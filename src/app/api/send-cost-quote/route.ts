import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { generateQuotePdfBuffer, QuotePdfPayload } from '@/lib/generateQuotePdf';

const apiKey = process.env.RESEND_QUOTE_API_KEY || process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

function formatKey(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    const data: QuotePdfPayload & { attachment?: { filename: string; content: string } } = await req.json();

    const {
      name,
      email,
      phone,
      company,
      country = 'Global',
      currency = 'INR',
      whatsappNumber,
      projectType,
      platform,
      designComplexity,
      pagesRange,
      selectedFeatures,
      isEcommerce,
      ecommerceOptions,
      adminRequirement,
      databaseSize,
      expectedUsers,
      timeline,
      maintenance,
      hosting,
      domain,
      existingProject,
      additionalNotes,
      devBaseCost = '0',
      featuresCost = '0',
      maintenanceCost = '0',
      gstTax = '0',
      totalEstimate = '0',
      attachment,
    } = data;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields (name or email)' },
        { status: 400 }
      );
    }

    const referenceId = data.referenceId || `#BD-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;
    const cleanRef = referenceId.replace(/^#/, '');

    const fromEmail = process.env.QUOTE_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const adminEmail = process.env.QUOTE_ADMIN_EMAIL || process.env.ADMIN_EMAIL;

    if (!resend || !apiKey) {
      console.warn('RESEND_QUOTE_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        { success: false, error: 'Resend API Key is not configured.' },
        { status: 500 }
      );
    }

    if (!adminEmail) {
      console.warn('ADMIN_EMAIL is not configured in environment variables.');
      return NextResponse.json(
        { success: false, error: 'ADMIN_EMAIL is not configured.' },
        { status: 500 }
      );
    }

    // 1. Generate PDF Quotation Document Buffer
    const pdfPayload: QuotePdfPayload = {
      referenceId: cleanRef,
      name,
      email,
      phone: phone || 'N/A',
      company: company || 'N/A',
      country,
      currency,
      whatsappNumber: whatsappNumber || 'N/A',
      projectType: projectType || 'Website Development',
      platform: platform || 'Corporate Website',
      designComplexity: designComplexity || 'Custom UI/UX',
      pagesRange: pagesRange || '6-10',
      selectedFeatures: selectedFeatures || 'Standard Features',
      isEcommerce: isEcommerce || 'No',
      ecommerceOptions: ecommerceOptions || 'N/A',
      adminRequirement: adminRequirement || 'Single Admin',
      databaseSize: databaseSize || 'Small',
      expectedUsers: expectedUsers || '100-1000',
      timeline: timeline || '1 Month',
      maintenance: maintenance || '3 Months',
      hosting: hosting || 'Need Hosting',
      domain: domain || 'Already Have Domain',
      existingProject: existingProject || 'New Project',
      additionalNotes: additionalNotes || 'None',
      devBaseCost,
      featuresCost,
      maintenanceCost,
      gstTax,
      totalEstimate,
    };

    const pdfBuffer = generateQuotePdfBuffer(pdfPayload);

    // Prepare Email Attachments List
    const emailAttachments: Array<{ filename: string; content: Buffer }> = [
      {
        filename: `BrosDev_Project_Quote_${cleanRef}.pdf`,
        content: pdfBuffer,
      },
    ];

    // Optional user file attachment (e.g. Wireframes / Logo / Spec)
    if (attachment && attachment.content && attachment.filename) {
      const rawBase64 = attachment.content.includes(',')
        ? attachment.content.split(',')[1]
        : attachment.content;
      emailAttachments.push({
        filename: attachment.filename,
        content: Buffer.from(rawBase64, 'base64'),
      });
    }

    const formattedFrom = fromEmail.includes('<')
      ? fromEmail
      : `BrosDev Team <${fromEmail}>`;

    // 2. Admin Email Template
    const adminHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>New Project Quote Request - #${cleanRef}</title>
</head>
<body style="margin:0;padding:40px;background:#f5f5f5;font-family:Arial,sans-serif;color:#333;">
<table align="center" width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
    <tr>
        <td style="padding:30px 40px;background:#A90706;">
            <h2 style="margin:0;color:#ffffff;font-size:24px;">BrosDev // Official Quote Request</h2>
        </td>
    </tr>
    <tr>
        <td style="padding:40px;">
            <h1 style="margin-top:0;font-size:26px;color:#111;">New Project Estimate Lead</h1>
            <p style="font-size:15px;line-height:26px;color:#555;">
                A client has submitted a detailed project estimation configuration on the BrosDev website. The official Quotation PDF is attached.
            </p>
            <table width="100%" cellpadding="10" cellspacing="0" style="border:1px solid #e6e6e6;border-collapse:collapse;margin-top:20px;font-size:14px;">
                <tr style="background:#fafafa;"><td colspan="2"><b>Client Information</b></td></tr>
                <tr><td width="35%">Reference No.</td><td><b>#${cleanRef}</b></td></tr>
                <tr><td>Name</td><td>${name}</td></tr>
                <tr><td>Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td>Phone</td><td>${phone || 'N/A'}</td></tr>
                <tr><td>WhatsApp</td><td>${whatsappNumber || 'N/A'}</td></tr>
                <tr><td>Company</td><td>${company || 'N/A'}</td></tr>
                <tr><td>Country / Currency</td><td>${country} (${currency})</td></tr>
                <tr style="background:#fafafa;"><td colspan="2"><b>Calculated Financial Estimate</b></td></tr>
                <tr><td>Development Base</td><td>${devBaseCost}</td></tr>
                <tr><td>Features & Add-ons</td><td>${featuresCost}</td></tr>
                <tr><td>Maintenance</td><td>${maintenanceCost}</td></tr>
                <tr><td>GST Tax (18%)</td><td>${gstTax}</td></tr>
                <tr><td style="color:#A90706;font-weight:bold;">Total Estimate</td><td style="color:#A90706;font-weight:bold;font-size:16px;">${totalEstimate}</td></tr>
            </table>
            <p style="margin-top:20px;font-size:13px;color:#0284c7;">
              <b>Attached File:</b> BrosDev_Project_Quote_${cleanRef}.pdf
            </p>
        </td>
    </tr>
    <tr>
        <td style="padding:20px;background:#fafafa;text-align:center;font-size:12px;color:#777;border-top:1px solid #eee;">
            BrosDev Automated Lead Notification System
        </td>
    </tr>
</table>
</body>
</html>`;

    // Send Admin Notification Email
    const adminResult = await resend.emails.send({
      from: formattedFrom,
      to: adminEmail,
      subject: `New Lead: Project Quote #${cleanRef} - ${name} [${totalEstimate}]`,
      html: adminHtml,
      attachments: emailAttachments,
    });

    if (adminResult.error) {
      console.error('Resend Admin Quote Email Error:', adminResult.error);
      return NextResponse.json(
        { success: false, error: adminResult.error.message },
        { status: 500 }
      );
    }

    // 3. Client Auto-Reply Email Template
    const clientHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Your BrosDev Project Estimate Quotation - #${cleanRef}</title>
</head>
<body style="margin:0;padding:40px;background:#f4f4f4;font-family:Arial,sans-serif;color:#333;">
<table align="center" cellpadding="0" cellspacing="0" width="620" style="background:#ffffff;border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;">
    <tr>
        <td style="padding:35px 40px;border-bottom:1px solid #eeeeee;">
            <h2 style="margin:0;font-size:28px;font-weight:700;color:#A90706;">BrosDev</h2>
        </td>
    </tr>
    <tr>
        <td style="padding:40px;">
            <h1 style="margin:0 0 20px;font-size:30px;font-weight:700;color:#111;">Your Project Estimate is Ready!</h1>
            <p style="margin:0 0 16px;font-size:16px;line-height:28px;">Hi <strong>${name}</strong>,</p>
            <p style="margin:0 0 25px;font-size:16px;line-height:28px;color:#555;">
                Thank you for using the BrosDev Project & Squad Cost Estimator. Your official quotation <strong>#${cleanRef}</strong> has been generated and is attached to this email as a PDF document.
            </p>

            <table width="100%" cellpadding="12" cellspacing="0" style="border:1px solid #e6e6e6;border-collapse:collapse;margin:20px 0;font-size:14px;">
                <tr style="background:#fafafa;">
                    <td colspan="2" style="font-weight:bold;color:#111;">Quotation Summary (#${cleanRef})</td>
                </tr>
                <tr><td width="40%">Project Category</td><td>${projectType}</td></tr>
                <tr><td>Target Platform</td><td>${platform}</td></tr>
                <tr><td>Selected Features</td><td>${selectedFeatures}</td></tr>
                <tr><td style="font-weight:bold;color:#A90706;">Total Estimate (${currency})</td><td style="font-weight:bold;color:#A90706;font-size:18px;">${totalEstimate}</td></tr>
            </table>

            <p style="margin:25px 0;font-size:15px;line-height:26px;color:#555;">
                <b>Included BrosDev Guarantees:</b><br>
                • <b>2-Week Risk-Free Trial:</b> Test your dedicated squad with zero fee obligation if unsatisfied.<br>
                • <b>100% Code & IP Ownership:</b> Immediate full code assignment under Mutual NDA.<br>
                • <b>Sub-100ms API SLA & 85%+ Test Coverage</b> on production releases.
            </p>

            <p style="margin:25px 0 0;font-size:15px;line-height:26px;color:#555;">
                Our senior solutions architect will contact you shortly to review your roadmap or schedule your 1-on-1 kickoff call. If you have immediate questions, reply directly to this email or reach us at <a href="mailto:hello@brosdev.site" style="color:#A90706;font-weight:bold;">hello@brosdev.site</a>.
            </p>
        </td>
    </tr>
    <tr>
        <td style="padding:25px;text-align:center;background:#fafafa;border-top:1px solid #eeeeee;font-size:13px;color:#777;">
            © 2026 <strong>BrosDev IT Engineering Studio</strong>. All rights reserved.<br>
            <a href="https://brosdev.site" style="color:#A90706;text-decoration:none;">Website</a> | <a href="mailto:hello@brosdev.site" style="color:#A90706;text-decoration:none;">Contact Us</a>
        </td>
    </tr>
</table>
</body>
</html>`;

    let clientResult: any = null;
    try {
      clientResult = await resend.emails.send({
        from: formattedFrom,
        to: email,
        subject: `Your BrosDev Project Estimate Quotation - #${cleanRef}`,
        html: clientHtml,
        attachments: emailAttachments,
      });
    } catch (err) {
      console.warn('Client quote auto-reply email issue (non-fatal):', err);
    }

    return NextResponse.json({
      success: true,
      referenceId: `#${cleanRef}`,
      message: 'Quotation email sent successfully with attached PDF',
      adminEmailId: adminResult.data?.id,
      clientEmailId: clientResult?.data?.id,
    });
  } catch (error: any) {
    console.error('Send Cost Quote API Route Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
