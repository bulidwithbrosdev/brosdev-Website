import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_NEWSLETTER_API_KEY || process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'RESEND_NEWSLETTER_API_KEY / RESEND_API_KEY is not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const adminEmail = process.env.ADMIN_EMAIL || 'bulidwithbrosdev@gmail.com';
    const fromEmail =
      process.env.NEWSLETTER_FROM_EMAIL ||
      process.env.RESEND_FROM_EMAIL ||
      'onboarding@resend.dev';

    const formattedFrom = fromEmail.includes('<')
      ? fromEmail
      : `BrosDev Team <${fromEmail}>`;

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `#NEWS-${randomNum}`;
    const cleanReference = `${randomNum}`;

    // 1) Send admin notification about the new subscriber
    const adminHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Newsletter Subscriber</title>
</head>
<body style="margin:0;padding:40px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#333;">
<table align="center" width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
    <tr>
        <td style="padding:30px 40px;background:#A90706;">
            <h2 style="margin:0;color:#ffffff;font-size:28px;">BrosDev</h2>
        </td>
    </tr>
    <tr>
        <td style="padding:40px;">
            <h1 style="margin-top:0;font-size:30px;color:#111;">New Newsletter Subscription</h1>
            <p style="font-size:16px;line-height:28px;color:#555;">
                A new user has subscribed to the BrosDev newsletter.
            </p>
            <table width="100%" cellpadding="12" cellspacing="0" style="border:1px solid #e6e6e6;border-collapse:collapse;margin-top:25px;">
                <tr>
                    <td width="35%" style="font-weight:bold;border-bottom:1px solid #eee;">Subscription Type</td>
                    <td style="border-bottom:1px solid #eee;">Newsletter Subscription</td>
                </tr>
                <tr>
                    <td style="font-weight:bold;border-bottom:1px solid #eee;">Reference No.</td>
                    <td style="border-bottom:1px solid #eee;">#${cleanReference}</td>
                </tr>
                <tr>
                    <td style="font-weight:bold;border-bottom:1px solid #eee;">Subscriber Email</td>
                    <td style="border-bottom:1px solid #eee;"><a href="mailto:${email}" style="color:#A90706;text-decoration:none;">${email}</a></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style="padding:25px;background:#fafafa;border-top:1px solid #eee;text-align:center;font-size:13px;color:#777;">
            This is an automated notification from the BrosDev website.
        </td>
    </tr>
</table>
</body>
</html>`;

    const adminResult = await resend.emails.send({
      from: formattedFrom,
      to: adminEmail,
      subject: `New Newsletter Subscriber: ${email} [${referenceId}]`,
      html: adminHtml,
    });

    if (adminResult.error) {
      console.error('Resend Admin Email Error (Newsletter):', adminResult.error);
    }

    // 2) Send Newsletter Welcome Auto-Reply template to subscriber
    const autoReplyHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BrosDev</title>
</head>

<body style="margin:0;padding:40px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">

<table align="center" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e5e5;border-radius:8px;">

    <!-- Logo -->
    <tr>
        <td style="padding:35px 40px 20px;text-align:center;">
            <h2 style="margin:0;font-size:32px;font-weight:bold;color:#A90706;">
                BrosDev
            </h2>
        </td>
    </tr>

    <!-- Content -->
    <tr>
        <td style="padding:20px 40px 45px;">

            <h1 style="font-size:34px;color:#111;margin-top:0;margin-bottom:20px;">
                Thanks for subscribing!
            </h1>

            <p style="font-size:18px;line-height:30px;color:#555;margin:0 0 18px;">
                Thank you for joining the <strong style="color:#A90706;">BrosDev</strong> newsletter.
            </p>

            <p style="font-size:18px;line-height:30px;color:#555;margin:0 0 18px;">
                You'll receive occasional updates about our latest projects,
                web development tips, new services, and exclusive offers.
            </p>

            <p style="font-size:18px;line-height:30px;color:#555;margin:0 0 25px;">
                We're excited to have you with us and can't wait to help you build something amazing.
            </p>

            <p style="font-size:18px;line-height:30px;color:#555;margin:0;">
                Cheers,<br>
                <strong style="color:#A90706;">The BrosDev Team</strong>
            </p>

        </td>
    </tr>

</table>

<table align="center" width="600" cellpadding="0" cellspacing="0">
<tr>
<td style="padding:25px 20px;color:#888;font-size:13px;text-align:center;line-height:22px;">

© 2026 BrosDev. All rights reserved.<br><br>

<a href="https://brosdev.site" style="color:#A90706;text-decoration:none;">Unsubscribe</a>
&nbsp;|&nbsp;
<a href="https://brosdev.site" style="color:#A90706;text-decoration:none;">Manage Preferences</a>
&nbsp;|&nbsp;
<a href="https://brosdev.site/en/privacy-policy" style="color:#A90706;text-decoration:none;">Privacy Policy</a>

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
        subject: `Thanks for subscribing to the BrosDev newsletter!`,
        html: autoReplyHtml,
      });
    } catch (err) {
      console.warn('Newsletter Auto-reply dispatch warning:', err);
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Subscribed to newsletter successfully',
      adminEmailId: adminResult.data?.id,
      autoReplyId: autoReplyResult?.data?.id,
    });
  } catch (error: any) {
    console.error('Newsletter API Route Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
