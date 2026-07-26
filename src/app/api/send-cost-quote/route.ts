import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { generateQuotePdfBuffer, generateQuoteEmailHtml, QuotePdfPayload } from '@/lib/generateQuotePdf';

const apiKey = process.env.RESEND_QUOTE_API_KEY || process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

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

    // 1. Generate PDF Quotation Document Buffer & HTML Template
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

    let pdfBuffer: Buffer | null = null;
    try {
      pdfBuffer = await generateQuotePdfBuffer(pdfPayload);
    } catch (pdfErr) {
      console.warn('PDF Buffer generation warning (proceeding with HTML email):', pdfErr);
    }

    const quoteHtml = generateQuoteEmailHtml(pdfPayload);

    // Prepare Email Attachments List
    const emailAttachments: Array<{ filename: string; content: Buffer }> = [];

    if (pdfBuffer) {
      emailAttachments.push({
        filename: `BrosDev_Project_Quote_${cleanRef}.pdf`,
        content: pdfBuffer,
      });
    }

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

    const replyToEmail = process.env.QUOTE_REPLY_TO || 'billing@brosdev.site';

    // 2. Send Admin & Customer Emails in Parallel
    const adminPromise = resend.emails.send({
      from: formattedFrom,
      to: adminEmail,
      replyTo: replyToEmail,
      subject: `New Lead: Project Quote #${cleanRef} - ${name} [${totalEstimate}]`,
      html: quoteHtml,
      attachments: emailAttachments.length > 0 ? emailAttachments : undefined,
    });

    const clientPromise = resend.emails.send({
      from: formattedFrom,
      to: email,
      replyTo: replyToEmail,
      subject: `Your BrosDev Project Estimate Quotation - #${cleanRef}`,
      html: quoteHtml,
      attachments: emailAttachments.length > 0 ? emailAttachments : undefined,
    });

    const [adminResult, clientResult] = await Promise.all([adminPromise, clientPromise]);

    if (adminResult.error) {
      console.error('Resend Admin Quote Email Error:', adminResult.error);
    }
    if (clientResult.error) {
      console.error('Resend Customer Quote Email Error:', clientResult.error);
    }

    if (adminResult.error && clientResult.error) {
      return NextResponse.json(
        { success: false, error: adminResult.error?.message || clientResult.error?.message || 'Failed to send quotation emails' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      referenceId: `#${cleanRef}`,
      message: 'Quotation email sent successfully with new quote design to both customer and admin',
      adminEmailId: adminResult.data?.id,
      clientEmailId: clientResult.data?.id,
    });
  } catch (error: any) {
    console.error('Send Cost Quote API Route Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
