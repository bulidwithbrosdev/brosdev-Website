import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');
  return handleUnsubscribe(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return handleUnsubscribe(body.email);
  } catch {
    return handleUnsubscribe(null);
  }
}

async function handleUnsubscribe(email: string | null) {
  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { success: false, error: 'A valid email parameter is required.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_NEWSLETTER_API_KEY || process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL || 'bulidwithbrosdev@gmail.com';
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  if (apiKey) {
    const resend = new Resend(apiKey);
    const formattedFrom = fromEmail.includes('<') ? fromEmail : `BrosDev Team <${fromEmail}>`;

    const adminHtml = `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; padding: 20px;">
  <h2 style="color: #A90706;">Newsletter Unsubscribe Request</h2>
  <p>The following subscriber has requested to be unsubscribed from the BrosDev newsletter:</p>
  <p style="font-size: 16px; font-weight: bold; background: #f4f4f4; padding: 10px; border-left: 4px solid #A90706;">
    ${email}
  </p>
  <p>Please update the mailing list so no further promotional emails are sent to this recipient.</p>
</body>
</html>`;

    await resend.emails.send({
      from: formattedFrom,
      to: adminEmail,
      replyTo: 'hello@brosdev.site',
      subject: `[UNSUBSCRIBE REQUEST] ${email}`,
      html: adminHtml,
    }).catch(console.error);
  }

  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Unsubscribed — BrosDev</title>
<style>
  body { font-family: system-ui, sans-serif; background: #FAF8F5; color: #0f172a; margin: 0; padding: 40px 20px; text-align: center; }
  .box { max-width: 500px; margin: 60px auto; background: #fff; padding: 40px; border: 2px solid #0f172a; box-shadow: 8px 8px 0 #0f172a; }
  h1 { color: #A90706; margin-top: 0; font-size: 24px; text-transform: uppercase; }
  p { color: #475569; font-size: 14px; line-height: 1.6; }
  a { display: inline-block; margin-top: 20px; padding: 12px 24px; background: #A90706; color: #fff; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
</style>
</head>
<body>
  <div class="box">
    <h1>UNSUBSCRIBED</h1>
    <p>You have been successfully removed from the BrosDev newsletter mailing list for <strong>${email}</strong>.</p>
    <p>You will no longer receive newsletter updates from us.</p>
    <a href="https://brosdev.site">Return to BrosDev</a>
  </div>
</body>
</html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}
