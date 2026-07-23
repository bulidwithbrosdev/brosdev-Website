import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export type FormType =
  | 'hire-developer'
  | 'industry-scoping'
  | 'book-consultation'
  | 'contact-us'
  | 'hiring-model-modal'
  | 'instant-scoping-modal'
  | 'careers-application'
  | 'cost-calculator'
  | 'audit-request';

interface EnquiryPayload {
  formType: FormType;
  name: string;
  email: string;
  referenceId?: string;
  attachment?: {
    filename: string;
    content: string; // base64 string
    type?: string;
  };
  [key: string]: any;
}

const FORM_LABELS: Record<FormType, string> = {
  'hire-developer': 'Hire Developer Enquiry',
  'industry-scoping': 'Industry Scoping Request',
  'book-consultation': 'Consultation Booking',
  'contact-us': 'Contact Form Submission',
  'hiring-model-modal': 'Hiring Model Quick Lead',
  'instant-scoping-modal': 'Instant Developer Scoping',
  'careers-application': 'Careers Application',
  'cost-calculator': 'Squad Cost Estimator Request',
  'audit-request': 'Free Architecture & Code Security Audit Request',
};

const FORM_PREFIXES: Record<FormType, string> = {
  'hire-developer': 'DEV',
  'industry-scoping': 'IND',
  'book-consultation': 'MEET',
  'contact-us': 'INQ',
  'hiring-model-modal': 'HM',
  'instant-scoping-modal': 'INST',
  'careers-application': 'APP',
  'cost-calculator': 'CALC',
  'audit-request': 'AUDIT',
};

function formatKey(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    const data: EnquiryPayload = await req.json();
    const { formType, name, email, attachment, referenceId: customRef, ...rest } = data;

    if (!name || !email || !formType) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields (name, email, or formType)' },
        { status: 400 }
      );
    }

    const label = FORM_LABELS[formType] ?? 'New Enquiry';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const adminEmail = process.env.ADMIN_EMAIL;

    // Generate unique form-specific reference code (e.g. #DEV-123456, #MEET-654321, etc.)
    const prefix = FORM_PREFIXES[formType] || 'BD';
    const referenceId = customRef || rest.ticketId || `#${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;

    if (!resend || !apiKey || apiKey === 're_xxxxxxxxxxxx') {
      console.warn('RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        {
          success: false,
          error: 'Resend API Key is not configured. Please set RESEND_API_KEY in .env.local'
        },
        { status: 500 }
      );
    }

    if (!adminEmail) {
      console.warn('ADMIN_EMAIL is not configured in environment variables.');
      return NextResponse.json(
        {
          success: false,
          error: 'ADMIN_EMAIL is not configured. Please set ADMIN_EMAIL in .env.local'
        },
        { status: 500 }
      );
    }

    // Process attachment if provided
    let attachmentsList: Array<{ filename: string; content: Buffer }> = [];
    let imagePreviewHtml = '';

    if (attachment && attachment.content && attachment.filename) {
      const rawBase64 = attachment.content.includes(',')
        ? attachment.content.split(',')[1]
        : attachment.content;

      const fileBuffer = Buffer.from(rawBase64, 'base64');
      attachmentsList.push({
        filename: attachment.filename,
        content: fileBuffer,
      });

      const lowerName = attachment.filename.toLowerCase();
      if (lowerName.endsWith('.png') || lowerName.endsWith('.jpg') || lowerName.endsWith('.jpeg') || lowerName.endsWith('.webp') || lowerName.endsWith('.gif')) {
        const mimeType = attachment.type || (lowerName.endsWith('.png') ? 'image/png' : 'image/jpeg');
        imagePreviewHtml = `
          <div style="margin-top: 16px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px; background: #ffffff;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; color: #475569;">Uploaded Image Attachment (${attachment.filename}):</p>
            <img src="data:${mimeType};base64,${rawBase64}" alt="${attachment.filename}" style="max-width: 100%; max-height: 400px; border-radius: 4px; display: block;" />
          </div>
        `;
      }
    }

    const cleanReference = referenceId ? referenceId.replace(/^#/, '') : '';

    const dynamicRowsHtml = Object.entries(rest)
      .filter(([key, value]) => value !== undefined && value !== null && value !== '' && key !== 'attachmentFileName' && key !== 'resumeFileName')
      .map(([key, value]) => {
        const displayVal = typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);
        return `
                <tr>
                    <td style="font-weight:bold;border-bottom:1px solid #eee;">${formatKey(key)}</td>
                    <td style="border-bottom:1px solid #eee;">${displayVal}</td>
                </tr>`;
      })
      .join('');

    const formattedFrom = fromEmail.includes('<')
      ? fromEmail
      : `BrosDev Team <${fromEmail}>`;

    const adminHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New ${label}</title>
</head>

<body style="margin:0;padding:40px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#333;">

<table align="center" width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">

    <!-- Header -->
    <tr>
        <td style="padding:30px 40px;background:#A90706;">
            <h2 style="margin:0;color:#ffffff;font-size:28px;">
                BrosDev
            </h2>
        </td>
    </tr>

    <!-- Content -->
    <tr>
        <td style="padding:40px;">

            <h1 style="margin-top:0;font-size:30px;color:#111;">
                New ${label}
            </h1>

            <p style="font-size:16px;line-height:28px;color:#555;">
                A new enquiry has been submitted through the BrosDev website.
            </p>

            <table width="100%" cellpadding="12" cellspacing="0" style="border:1px solid #e6e6e6;border-collapse:collapse;margin-top:25px;">

                <tr>
                    <td width="35%" style="font-weight:bold;border-bottom:1px solid #eee;">Request Type</td>
                    <td style="border-bottom:1px solid #eee;">${label}</td>
                </tr>

                <tr>
                    <td style="font-weight:bold;border-bottom:1px solid #eee;">Reference No.</td>
                    <td style="border-bottom:1px solid #eee;">#${cleanReference}</td>
                </tr>

                <tr>
                    <td style="font-weight:bold;border-bottom:1px solid #eee;">Applicant Name</td>
                    <td style="border-bottom:1px solid #eee;">${name}</td>
                </tr>

                <tr>
                    <td style="font-weight:bold;border-bottom:1px solid #eee;">Applicant Email</td>
                    <td style="border-bottom:1px solid #eee;"><a href="mailto:${email}" style="color:#A90706;text-decoration:none;">${email}</a></td>
                </tr>

                ${dynamicRowsHtml}

            </table>

            ${imagePreviewHtml}
            ${attachment ? `<p style="margin-top: 16px; font-size: 14px; color: #0284c7;"><b>Attached File:</b> ${attachment.filename}</p>` : ''}

        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td style="padding:25px;background:#fafafa;border-top:1px solid #eee;text-align:center;font-size:13px;color:#777;">
            This is an automated notification from the BrosDev website.<br>
            Please review the enquiry and follow up with the client.
        </td>
    </tr>

</table>

</body>
</html>`;

    // 1) Send admin notification email
    const adminResult = await resend.emails.send({
      from: formattedFrom,
      to: adminEmail,
      subject: `New Submission: ${label} - ${name} [#${cleanReference}]`,
      html: adminHtml,
      ...(attachmentsList.length > 0 ? { attachments: attachmentsList } : {}),
    });

    if (adminResult.error) {
      console.error('Resend Admin Email Error:', adminResult.error);
      return NextResponse.json(
        { success: false, error: adminResult.error.message },
        { status: 500 }
      );
    }

    // 2) Send auto-reply email using exact user-requested template
    const autoReplyHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BrosDev - Enquiry Confirmation</title>
</head>

<body style="margin:0;padding:40px;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#333;">

<table align="center" cellpadding="0" cellspacing="0" width="620" style="background:#ffffff;border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;">

    <!-- Header -->
    <tr>
        <td style="padding:35px 40px;border-bottom:1px solid #eeeeee;">

            <h2 style="margin:0;font-size:30px;font-weight:700;color:#A90706;">
                BrosDev
            </h2>

        </td>
    </tr>

    <!-- Body -->
    <tr>
        <td style="padding:40px;">

            <h1 style="margin:0 0 25px;font-size:36px;font-weight:700;color:#111;">
                Thanks for contacting us!
            </h1>

            <p style="margin:0 0 18px;font-size:17px;line-height:30px;">
                Hi <strong>${name}</strong>,
            </p>

            <p style="margin:0 0 25px;font-size:17px;line-height:30px;color:#555;">
                Thank you for reaching out to <strong>BrosDev</strong>.
                We've successfully received your
                <strong>${label}</strong>.
                Our team is currently reviewing your request and will get back to you shortly.
            </p>

            <h3 style="margin:35px 0 15px;font-size:22px;color:#111;">
                Enquiry Summary
            </h3>

            <table width="100%" cellpadding="14" cellspacing="0" style="border:1px solid #e6e6e6;border-collapse:collapse;">

                <tr style="background:#fafafa;">
                    <td colspan="2" style="font-size:17px;font-weight:bold;color:#111;">
                        ${label}
                    </td>
                </tr>

                <tr>
                    <td width="35%" style="border-top:1px solid #eeeeee;font-weight:600;">
                        Name
                    </td>

                    <td style="border-top:1px solid #eeeeee;">
                        ${name}
                    </td>
                </tr>

                <tr>
                    <td style="border-top:1px solid #eeeeee;font-weight:600;">
                        Email
                    </td>

                    <td style="border-top:1px solid #eeeeee;">
                        ${email}
                    </td>
                </tr>

                <tr>
                    <td style="border-top:1px solid #eeeeee;font-weight:600;">
                        Reference No.
                    </td>

                    <td style="border-top:1px solid #eeeeee;">
                        #${cleanReference}
                    </td>
                </tr>

                <tr>
                    <td style="border-top:1px solid #eeeeee;font-weight:600;">
                        Expected Response
                    </td>

                    <td style="border-top:1px solid #eeeeee;">
                        24–48 Hours
                    </td>
                </tr>

            </table>

            <p style="margin:30px 0 0;font-size:16px;line-height:28px;color:#555;">
                If it's urgent, feel free to email us directly at
                <a href="mailto:hello@brosdev.site" style="color:#A90706;text-decoration:none;font-weight:600;">
                    hello@brosdev.site
                </a>
                — our team will get back to you as soon as possible.
            </p>

            <p style="margin:35px 0 0;font-size:17px;line-height:28px;color:#555;">
                Thank you for choosing BrosDev. We appreciate the opportunity to work with you.
            </p>

            <p style="margin:30px 0 0;font-size:17px;line-height:28px;">
                Best regards,<br>
                <strong>The BrosDev Team</strong>
            </p>

        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td style="padding:30px;text-align:center;background:#fafafa;border-top:1px solid #eeeeee;">

            <p style="margin:0;font-size:14px;color:#777;">
                © 2026 <strong>BrosDev</strong>. All rights reserved.
            </p>

            <p style="margin:15px 0 0;font-size:14px;">

                <a href="https://brosdev.site"
                   style="color:#A90706;text-decoration:none;">
                    Website
                </a>

                &nbsp;&nbsp;|&nbsp;&nbsp;

                <a href="mailto:hello@brosdev.site"
                   style="color:#A90706;text-decoration:none;">
                    Contact Us
                </a>

                &nbsp;&nbsp;|&nbsp;&nbsp;

                <a href="https://brosdev.site/en/privacy-policy"
                   style="color:#A90706;text-decoration:none;">
                    Privacy Policy
                </a>

            </p>

        </td>
    </tr>

</table>

</body>
</html>`;

    let autoReplyResult: any = null;
    try {
      autoReplyResult = await resend.emails.send({
        from: formattedFrom,
        to: email,
        subject: `Thank you for contacting BrosDev, ${name}! [${referenceId}]`,
        html: autoReplyHtml,
      });
    } catch (err) {
      console.warn('Auto-reply email dispatch issue (non-fatal):', err);
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Enquiry sent successfully',
      adminEmailId: adminResult.data?.id,
      autoReplyId: autoReplyResult?.data?.id,
    });
  } catch (error: any) {
    console.error('Send Enquiry API Route Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
