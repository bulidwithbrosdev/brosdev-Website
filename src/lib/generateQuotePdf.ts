import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export interface QuotePdfPayload {
  referenceId: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  currency: string;
  whatsappNumber: string;
  projectType: string;
  platform: string;
  designComplexity: string;
  pagesRange: string;
  selectedFeatures: string;
  isEcommerce: string;
  ecommerceOptions: string;
  adminRequirement: string;
  databaseSize: string;
  expectedUsers: string;
  timeline: string;
  maintenance: string;
  hosting: string;
  domain: string;
  existingProject: string;
  additionalNotes: string;
  devBaseCost: string;
  featuresCost: string;
  maintenanceCost: string;
  gstTax: string;
  totalEstimate: string;
  dateStr?: string;
}

// Convert raw ID to human-readable category name
function formatCategoryName(id: string): string {
  if (!id) return "Custom Project";
  const map: Record<string, string> = {
    website: "Website Development",
    mobile: "Mobile App Development",
    custom_software: "Custom Software Development",
    ecommerce: "E-Commerce Platform",
    uiux: "UI/UX Product Design",
    ai: "AI & Automation Engine",
    marketing: "Digital Marketing Solutions",
    cloud: "Cloud Infrastructure & DevOps",
    support: "Maintenance & Support",
  };
  return map[id.toLowerCase()] || id.replace(/_/g, " ").toUpperCase();
}

function parseChips(input: string): string[] {
  if (!input || input === "N/A" || input === "None") return [];
  return input
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Clean Email Template (As shown in screenshot)
 * Sent as the HTML body of Resend emails.
 */
export function generateQuoteEmailHtml(data: QuotePdfPayload): string {
  const cleanRef = data.referenceId
    ? data.referenceId.replace(/^#/, "")
    : `BD-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;

  const categoryName = formatCategoryName(data.projectType);
  const currCode = data.currency || "INR";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Project Estimate is Ready! — BrosDev</title>
</head>
<body style="margin:0; padding:0; background-color:#F4F4F5; font-family:'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#18181B; -webkit-font-smoothing:antialiased;">

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F4F4F5; padding:30px 15px;">
  <tr>
    <td align="center">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:#FFFFFF; border:1px solid #E4E4E7; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
        
        <!-- Header Logo -->
        <tr>
          <td style="padding:28px 32px 20px; border-bottom:1px solid #F4F4F5;">
            <span style="font-family:'Space Grotesk', Helvetica, Arial, sans-serif; font-size:24px; font-weight:800; color:#A90706; letter-spacing:-0.5px;">BrosDev</span>
          </td>
        </tr>

        <!-- Main Body Content -->
        <tr>
          <td style="padding:32px;">
            <h1 style="margin:0 0 16px 0; font-size:22px; font-weight:700; color:#09090B; line-height:1.3;">Your Project Estimate is Ready!</h1>
            
            <p style="margin:0 0 16px 0; font-size:14px; line-height:1.6; color:#3F3F46;">
              Hi <strong>${escapeHtml(data.name || "Client")}</strong>,
            </p>
            
            <p style="margin:0 0 24px 0; font-size:14px; line-height:1.6; color:#3F3F46;">
              Thank you for using the BrosDev Project &amp; Squad Cost Estimator. Your official quotation <strong>#${cleanRef}</strong> has been generated and is attached to this email as a PDF document.
            </p>

            <!-- Quotation Summary Card -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #E4E4E7; border-radius:6px; overflow:hidden; margin-bottom:28px;">
              <tr>
                <td style="background-color:#FAFAFA; padding:12px 16px; border-bottom:1px solid #E4E4E7; font-size:13px; font-weight:700; color:#18181B;">
                  Quotation Summary (#${cleanRef})
                </td>
              </tr>
              <tr>
                <td style="padding:14px 16px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="35%" style="padding:6px 0; font-size:13px; color:#71717A; vertical-align:top;">Project Category</td>
                      <td width="65%" style="padding:6px 0; font-size:13px; font-weight:600; color:#18181B; vertical-align:top;">${escapeHtml(categoryName)}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0; font-size:13px; color:#71717A; vertical-align:top;">Target Platform</td>
                      <td style="padding:6px 0; font-size:13px; font-weight:600; color:#18181B; vertical-align:top;">${escapeHtml(data.platform || "N/A")}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0; font-size:13px; color:#71717A; vertical-align:top;">Selected Features</td>
                      <td style="padding:6px 0; font-size:13px; color:#27272A; line-height:1.5; vertical-align:top;">${escapeHtml(data.selectedFeatures || "Standard Features")}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0 4px 0; font-size:13px; font-weight:700; color:#A90706; border-top:1px solid #F4F4F5;">Total Estimate (${currCode})</td>
                      <td style="padding:10px 0 4px 0; font-size:16px; font-weight:800; color:#A90706; border-top:1px solid #F4F4F5;">${escapeHtml(data.totalEstimate || "₹ 0")}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Included Guarantees -->
            <p style="margin:0 0 10px 0; font-size:13.5px; font-weight:700; color:#18181B;">Included BrosDev Guarantees:</p>
            <ul style="margin:0 0 24px 0; padding-left:18px; font-size:13px; line-height:1.7; color:#3F3F46;">
              <li style="margin-bottom:6px;"><strong>1-Week Risk-Free Trial:</strong> Test your dedicated squad with zero fee obligation if unsatisfied.</li>
              <li style="margin-bottom:6px;"><strong>100% Code &amp; IP Ownership:</strong> Immediate full code assignment under Mutual NDA.</li>
              <li><strong>Sub-100ms API SLA &amp; 85%+ Test Coverage</strong> on production releases.</li>
            </ul>

            <p style="margin:0 0 0 0; font-size:13px; line-height:1.6; color:#52525B;">
              Our senior solutions architect will contact you shortly to review your roadmap or schedule your 1-on-1 kickoff call. If you have immediate questions, reply directly to this email or reach us at <a href="mailto:hello@brosdev.site" style="color:#A90706; font-weight:600; text-decoration:underline;">hello@brosdev.site</a>.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px; background-color:#FAFAFA; border-top:1px solid #E4E4E7; text-align:center; font-size:11.5px; color:#71717A; line-height:1.6;">
            <div>&copy; 2026 <strong>BrosDev IT Engineering Studio</strong>. All rights reserved.</div>
            <div style="margin-top:4px;">
              <a href="https://brosdev.site" style="color:#A90706; text-decoration:none; margin:0 4px;">Website</a> | 
              <a href="https://brosdev.site/contact" style="color:#A90706; text-decoration:none; margin:0 4px;">Contact Us</a>
            </div>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>

</body>
</html>`;
}

/**
 * Full HTML Document with JS Pagination for Puppeteer PDF Generation.
 */
export function generateQuotePdfHtml(data: QuotePdfPayload): string {
  const cleanRef = data.referenceId
    ? data.referenceId.replace(/^#/, "")
    : `BD-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;

  const now = new Date();
  const dateStr =
    data.dateStr ||
    now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const validUntil = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const validUntilStr = validUntil.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const currCode = data.currency || "INR";
  const categoryName = formatCategoryName(data.projectType);

  const featureChips = parseChips(data.selectedFeatures);
  const ecommerceChips = parseChips(data.ecommerceOptions);

  const showEcommerce =
    (data.isEcommerce === "Yes" || ecommerceChips.length > 0) &&
    ecommerceChips.length > 0;

  const showNotes =
    data.additionalNotes &&
    data.additionalNotes.trim() !== "" &&
    data.additionalNotes !== "None" &&
    data.additionalNotes !== "N/A";

  const phoneStr = data.phone || "N/A";
  const waStr = data.whatsappNumber;
  const combinedPhone =
    waStr && waStr !== "N/A" && waStr !== phoneStr
      ? `${phoneStr} / ${waStr}`
      : phoneStr;

  const totalStr = data.totalEstimate || "₹ 0";
  const totalValFormatted = totalStr.replace(/^(INR|USD|EUR|GBP)\s*/i, "");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>${escapeHtml(cleanRef)} — BrosDev</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet">
<style>
  :root{
    --red:        #A90706;
    --red-dark:   #6B0403;
    --red-tint:   #FBEAE9;
    --ink:        #17130F;
    --ink-soft:   #423A36;
    --muted:      #8A7F79;
    --paper:      #FDFBF9;
    --steel:      #F3EEEA;
    --line:       #E4DBD5;
    --ok:         #2F6B3E;
  }

  *{ box-sizing:border-box; margin:0; padding:0; }

  html,body{
    background:#DAD3CD;
    font-family:'Open Sans',sans-serif;
    color:var(--ink);
    -webkit-font-smoothing:antialiased;
  }

  .doc-wrap{
    max-width:900px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:0;
  }

  .page{
    background:var(--paper);
    width:100%;
    height:297mm;
    min-height:297mm;
    max-height:297mm;
    position:relative;
    box-shadow:0 30px 60px -20px rgba(23,19,15,.35);
    padding:0 0 46px 0;
    overflow:hidden;
    page-break-after:always;
    break-after:page;
    box-sizing:border-box;
  }

  .page:last-child{
    page-break-after:avoid !important;
    break-after:avoid !important;
  }

  /* ============ HEADER ============ */
  .head{
    background:var(--ink);
    color:var(--paper);
    padding:26px 48px 22px;
    position:relative;
    overflow:hidden;
  }
  .head::after{
    content:"";
    position:absolute;
    right:-60px; top:-90px;
    width:260px; height:260px;
    border-radius:50%;
    background:radial-gradient(circle at 30% 30%, var(--red) 0%, var(--red-dark) 55%, transparent 72%);
    opacity:.9;
  }
  .head::before{
    content:"";
    position:absolute;
    left:0; right:0; bottom:0;
    height:4px;
    background:linear-gradient(90deg, var(--red) 0%, #E4433F 50%, var(--red) 100%);
  }
  .head-row{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    position:relative;
    z-index:2;
  }
  .brand{
    display:flex;
    align-items:center;
    gap:10px;
  }
  .brand-mark{
    width:36px; height:36px;
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-shrink:0;
    box-shadow:0 4px 12px rgba(169,7,6,.45);
    overflow:hidden;
  }
  .brand-mark svg{ width:100%; height:100%; display:block; }
  .brand-name{
    font-family:'Open Sans',sans-serif;
    font-weight:700;
    font-size:20px;
    letter-spacing:0.5px;
  }
  .brand-sub{
    font-family:'Open Sans',sans-serif;
    font-size:9.5px;
    letter-spacing:1.4px;
    color:#C9BFB9;
    text-transform:uppercase;
    margin-top:1px;
  }
  .doc-meta{
    text-align:right;
    font-family:'Open Sans',sans-serif;
    font-size:11px;
    color:#D8CFC9;
    line-height:1.7;
  }
  .doc-meta .ref{
    color:#fff;
    font-size:12.5px;
    font-weight:600;
    letter-spacing:.5px;
  }
  .doc-title{
    margin-top:18px;
    font-family:'Open Sans',sans-serif;
    font-weight:600;
    font-size:13.5px;
    letter-spacing:2.5px;
    text-transform:uppercase;
    color:#F1E7E5;
    position:relative;
    z-index:2;
  }
  .doc-title span{ color:var(--red-dark); background:#fff; padding:1px 6px; border-radius:3px; margin-left:8px; font-size:10.5px; letter-spacing:1px; }

  /* ============ BODY ============ */
  .body{ padding:22px 48px 50px 48px; }

  .eyebrow{
    display:flex;
    align-items:center;
    gap:8px;
    margin-bottom:10px;
  }
  .eyebrow .num{
    font-family:'Open Sans',sans-serif;
    font-size:10px;
    font-weight:700;
    color:#fff;
    background:var(--ink);
    width:20px; height:20px;
    border-radius:4px;
    display:flex; align-items:center; justify-content:center;
  }
  .eyebrow h2{
    font-family:'Open Sans',sans-serif;
    font-size:12px;
    font-weight:700;
    letter-spacing:1.8px;
    text-transform:uppercase;
    color:var(--ink);
  }
  .eyebrow::after{
    content:"";
    flex:1;
    height:1px;
    background:var(--line);
  }

  section{ margin-bottom:18px; }
  section:last-child{ margin-bottom:0; }

  /* Client grid */
  .client-grid{
    display:grid;
    grid-template-columns:1.3fr 1fr;
    gap:1px;
    background:var(--line);
    border:1px solid var(--line);
    border-radius:8px;
    overflow:hidden;
  }
  .client-cell{
    background:var(--paper);
    padding:10px 16px;
  }
  .client-cell .k{
    font-family:'Open Sans',sans-serif;
    font-size:8.5px;
    letter-spacing:1.2px;
    text-transform:uppercase;
    color:var(--muted);
    margin-bottom:3px;
  }
  .client-cell .v{
    font-size:12.5px;
    font-weight:600;
    color:var(--ink);
  }
  .client-cell .v.red{ color:var(--red); }

  /* Spec sheet */
  .spec-sheet{
    border:1px solid var(--line);
    border-radius:8px;
    overflow:hidden;
  }
  .spec-row{
    display:flex;
    align-items:baseline;
    padding:7px 16px;
    border-bottom:1px solid var(--line);
    background:var(--paper);
  }
  .spec-row:nth-child(even){ background:var(--steel); }
  .spec-row:last-child{ border-bottom:none; }
  .spec-label{
    font-family:'Open Sans',sans-serif;
    font-size:9.5px;
    letter-spacing:0.8px;
    text-transform:uppercase;
    color:var(--muted);
    width:190px;
    flex-shrink:0;
    display:flex;
    align-items:center;
    gap:6px;
  }
  .spec-label::before{
    content:"";
    width:5px; height:5px;
    background:var(--red);
    border-radius:1px;
    flex-shrink:0;
  }
  .spec-dots{
    flex:1;
    border-bottom:1.5px dotted #C9BFB9;
    margin:0 10px;
    transform:translateY(-3px);
  }
  .spec-value{
    font-size:12px;
    font-weight:600;
    color:var(--ink);
    text-align:right;
    white-space:nowrap;
  }

  /* Chips */
  .chip-group{ margin-bottom:12px; }
  .chip-group:last-child{ margin-bottom:0; }
  .chip-group .glabel{
    font-family:'Open Sans',sans-serif;
    font-size:9px;
    letter-spacing:1px;
    text-transform:uppercase;
    color:var(--muted);
    margin-bottom:6px;
  }
  .chips{
    display:flex;
    flex-wrap:wrap;
    gap:5px;
    max-height:115px;
    overflow:hidden;
  }
  .chip{
    font-size:11px;
    font-weight:500;
    padding:4px 10px;
    border-radius:6px;
    border:1px solid var(--line);
    background:var(--paper);
    color:var(--ink-soft);
  }
  .chip.tag-ecom{
    background:var(--red-tint);
    border-color:#F0CFCD;
    color:var(--red-dark);
  }

  .note-box{
    background:var(--steel);
    border-left:3px solid var(--red);
    border-radius:0 6px 6px 0;
    padding:10px 14px;
    font-size:12px;
    color:var(--ink-soft);
    font-style:italic;
  }
  .note-box .glabel{
    font-family:'Open Sans',sans-serif;
    font-style:normal;
    font-size:9px;
    letter-spacing:1px;
    text-transform:uppercase;
    color:var(--muted);
    margin-bottom:4px;
    display:block;
  }

  .page-footer{
    position:absolute;
    bottom:0; left:0; right:0;
    height:44px;
    padding:12px 48px;
    border-top:1px solid var(--line);
    background:var(--paper);
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family:'Open Sans',sans-serif;
    font-size:9px;
    letter-spacing:.6px;
    color:var(--muted);
    text-transform:uppercase;
    z-index:10;
  }
  .page-footer a{ color:var(--red); text-decoration:none; }

  /* ============ FINANCIALS (page 2) ============ */
  .fin-table{
    width:100%;
    border-collapse:collapse;
    border:1px solid var(--line);
    border-radius:8px;
    overflow:hidden;
  }
  .fin-table thead th{
    background:var(--ink);
    color:#EFE5E3;
    font-family:'Open Sans',sans-serif;
    font-size:9px;
    letter-spacing:1.2px;
    text-transform:uppercase;
    text-align:left;
    padding:10px 16px;
  }
  .fin-table thead th:last-child{ text-align:right; }
  .fin-table tbody td{
    padding:11px 16px;
    border-bottom:1px solid var(--line);
    font-size:12.5px;
    color:var(--ink-soft);
  }
  .fin-table tbody tr:nth-child(even){ background:var(--steel); }
  .fin-table tbody td:last-child{
    text-align:right;
    font-family:'Open Sans',sans-serif;
    font-weight:600;
    color:var(--ink);
    white-space:nowrap;
  }

  .grand-total{
    margin-top:0;
    background:linear-gradient(120deg, var(--ink) 0%, #2B211D 100%);
    border-radius:0 0 8px 8px;
    padding:16px 22px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:-1px;
  }
  .grand-total .gt-label{
    font-family:'Open Sans',sans-serif;
    font-size:12px;
    letter-spacing:1.2px;
    text-transform:uppercase;
    color:#D8CFC9;
  }
  .grand-total .gt-value{
    font-family:'Open Sans',sans-serif;
    font-size:22px;
    font-weight:700;
    color:#fff;
  }
  .grand-total .gt-value span{
    color:var(--red);
    font-size:13px;
    font-weight:600;
    margin-right:6px;
    vertical-align:middle;
  }

  /* Guarantees */
  .guarantee-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
  }
  .guarantee{
    display:flex;
    gap:10px;
    padding:12px 14px;
    border:1px solid var(--line);
    border-radius:8px;
    background:var(--paper);
  }
  .guarantee .gi{
    width:26px; height:26px;
    border-radius:6px;
    background:var(--red-tint);
    color:var(--red);
    display:flex; align-items:center; justify-content:center;
    font-weight:700;
    font-family:'Open Sans',sans-serif;
    font-size:12px;
    flex-shrink:0;
  }
  .guarantee h4{
    font-size:11.5px;
    font-weight:700;
    color:var(--ink);
    margin-bottom:2px;
  }
  .guarantee p{
    font-size:10.5px;
    color:var(--muted);
    line-height:1.4;
  }

  .validity-strip{
    margin-top:12px;
    display:flex;
    align-items:center;
    gap:8px;
    font-family:'Open Sans',sans-serif;
    font-size:10.5px;
    color:var(--red-dark);
    background:var(--red-tint);
    padding:8px 14px;
    border-radius:6px;
  }
  .validity-strip::before{ content:"⏱"; }

  /* Signatures */
  .sig-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:18px;
    margin-top:6px;
  }
  .sig-box{
    border:1px solid var(--line);
    border-radius:8px;
    padding:14px;
    height:85px;
    position:relative;
  }
  .sig-box .sig-role{
    font-family:'Open Sans',sans-serif;
    font-size:9px;
    letter-spacing:1px;
    text-transform:uppercase;
    color:var(--muted);
  }
  .sig-box .sig-line{
    position:absolute;
    bottom:18px; left:14px; right:14px;
    border-bottom:1px solid var(--line);
  }
  .sig-box .sig-name{
    position:absolute;
    bottom:0; left:14px;
    font-size:10px;
    color:var(--muted);
  }

  @page{
    size:A4;
    margin:0;
  }

  @media print{
    html,body{ background:#fff; margin:0; padding:0; }
    .doc-wrap{ margin:0; gap:0; max-width:none; width:210mm; }
    .page{
      box-shadow:none;
      page-break-after:always;
      break-after:page;
      width:210mm;
      height:297mm;
      min-height:297mm;
      max-height:297mm;
    }
    .page:last-child{
      page-break-after:avoid !important;
      break-after:avoid !important;
    }
  }

  @media (max-width:640px){
    .doc-wrap{ margin:0; padding:0; }
    .page{ min-height:auto; box-shadow:none; }
    .head, .body{ padding-left:22px; padding-right:22px; }
    .client-grid, .guarantee-grid, .sig-grid{ grid-template-columns:1fr; }
    .spec-label{ width:150px; font-size:9.5px; }
    .page-footer{ position:static; flex-direction:column; gap:4px; padding:16px 22px; }
    .grand-total{ flex-direction:column; align-items:flex-start; gap:8px; }
  }
</style>
</head>
<body>

<div class="doc-wrap">

  <!-- ================= PAGE 1 ================= -->
  <div class="page">
    <div class="head">
      <div class="head-row">
        <div class="brand">
          <div class="brand-mark">
            <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGrad1" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#E4433F"/>
                  <stop offset="1" stop-color="#6B0403"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="44" height="44" rx="10" fill="url(#logoGrad1)"/>
              <rect x="13" y="9.5" width="4" height="25" rx="1.4" fill="#fff"/>
              <path d="M17 9.5 H25.5 a5.5 5.5 0 0 1 0 11 H17 V9.5 Z" fill="#fff"/>
              <path d="M17 21 H27 a6.25 6.25 0 0 1 0 12.5 H17 V21 Z" fill="#fff" fill-opacity="0.92"/>
              <circle cx="33.5" cy="12" r="2.1" fill="#fff" fill-opacity="0.55"/>
            </svg>
          </div>
          <div>
            <div class="brand-name">BrosDev</div>
            <div class="brand-sub">IT Engineering Studio</div>
          </div>
        </div>
        <div class="doc-meta">
          <div class="ref">${escapeHtml(cleanRef)}</div>
          <div>Issued&nbsp;&nbsp;${escapeHtml(dateStr)}</div>
          <div>Page&nbsp;&nbsp;01 / 02</div>
        </div>
      </div>
      <div class="doc-title">Project &amp; Squad Estimate <span>Official</span></div>
    </div>

    <div class="body">

      <section>
        <div class="eyebrow"><span class="num">•</span><h2>Client &amp; Contact</h2></div>
        <div class="client-grid">
          <div class="client-cell"><div class="k">Client Name</div><div class="v">${escapeHtml(data.name || "N/A")}</div></div>
          <div class="client-cell"><div class="k">Company</div><div class="v">${escapeHtml(data.company || "N/A")}</div></div>
          <div class="client-cell"><div class="k">Email</div><div class="v">${escapeHtml(data.email || "N/A")}</div></div>
          <div class="client-cell"><div class="k">Phone / WhatsApp</div><div class="v">${escapeHtml(combinedPhone)}</div></div>
          <div class="client-cell"><div class="k">Country / Currency</div><div class="v">${escapeHtml(data.country || "Global")} — ${escapeHtml(currCode)}</div></div>
          <div class="client-cell"><div class="k">Quote Status</div><div class="v red">Pending Acceptance</div></div>
        </div>
      </section>

      <section>
        <div class="eyebrow"><span class="num">01</span><h2>Technical Scope &amp; Parameters</h2></div>
        <div class="spec-sheet">
          <div class="spec-row"><div class="spec-label">Category</div><div class="spec-dots"></div><div class="spec-value">${escapeHtml(categoryName)}</div></div>
          <div class="spec-row"><div class="spec-label">Target Platform</div><div class="spec-dots"></div><div class="spec-value">${escapeHtml(data.platform || "N/A")}</div></div>
          <div class="spec-row"><div class="spec-label">Design Level</div><div class="spec-dots"></div><div class="spec-value">${escapeHtml(data.designComplexity || "N/A")}</div></div>
          <div class="spec-row"><div class="spec-label">Pages / Screens</div><div class="spec-dots"></div><div class="spec-value">${escapeHtml(data.pagesRange || "N/A")}</div></div>
          <div class="spec-row"><div class="spec-label">Existing Status</div><div class="spec-dots"></div><div class="spec-value">${escapeHtml(data.existingProject || "N/A")}</div></div>
          <div class="spec-row"><div class="spec-label">Timeline Requested</div><div class="spec-dots"></div><div class="spec-value">${escapeHtml(data.timeline || "N/A")}</div></div>
          <div class="spec-row"><div class="spec-label">Maintenance</div><div class="spec-dots"></div><div class="spec-value">${escapeHtml(data.maintenance || "N/A")}</div></div>
          <div class="spec-row"><div class="spec-label">Hosting &amp; Domain</div><div class="spec-dots"></div><div class="spec-value">${escapeHtml(data.hosting || "N/A")} · ${escapeHtml(data.domain || "N/A")}</div></div>
          <div class="spec-row"><div class="spec-label">Admin &amp; DB Specs</div><div class="spec-dots"></div><div class="spec-value">${escapeHtml(data.adminRequirement || "N/A")} · ${escapeHtml(data.databaseSize || "N/A")}</div></div>
          <div class="spec-row"><div class="spec-label">Expected Scale</div><div class="spec-dots"></div><div class="spec-value">${escapeHtml(data.expectedUsers || "N/A")}</div></div>
        </div>
      </section>

      <section>
        <div class="eyebrow"><span class="num">02</span><h2>Selected Features &amp; Modules</h2></div>

        <div class="chip-group">
          <div class="glabel">Features &amp; Add-ons</div>
          <div class="chips">
            ${featureChips.length > 0
      ? featureChips.map((f) => `<div class="chip">${escapeHtml(f)}</div>`).join("")
      : `<div class="chip">Standard Features</div>`
    }
          </div>
        </div>

        ${showEcommerce
      ? `<div class="chip-group">
          <div class="glabel">E-Commerce Options</div>
          <div class="chips">
            ${ecommerceChips.map((c) => `<div class="chip tag-ecom">${escapeHtml(c)}</div>`).join("")}
          </div>
        </div>`
      : ""
    }
      </section>

      ${showNotes
      ? `<section style="margin-bottom:0;">
        <div class="eyebrow"><span class="num">•</span><h2>Client Custom Notes</h2></div>
        <div class="note-box"><span class="glabel">Note</span>“${escapeHtml(data.additionalNotes)}”</div>
      </section>`
      : ""
    }

    </div>

    <div class="page-footer">
      <span>BrosDev IT Engineering Studio</span>
      <span><a href="https://brosdev.site">brosdev.site</a> · hello@brosdev.site</span>
    </div>
  </div>

  <!-- ================= PAGE 2 ================= -->
  <div class="page">
    <div class="head">
      <div class="head-row">
        <div class="brand">
          <div>
            <div class="brand-name">BrosDev</div>
            <div class="brand-sub">IT Engineering Studio</div>
          </div>
        </div>
        <div class="doc-meta">
          <div class="ref">${escapeHtml(cleanRef)}</div>
          <div>Issued&nbsp;&nbsp;${escapeHtml(dateStr)}</div>
          <div>Page&nbsp;&nbsp;02 / 02</div>
        </div>
      </div>
      <div class="doc-title">Project &amp; Squad Estimate <span>Official</span></div>
    </div>

    <div class="body">

      <section>
        <div class="eyebrow"><span class="num">03</span><h2>Itemized Financial Breakdown</h2></div>
        <table class="fin-table">
          <thead>
            <tr><th>Item / Description</th><th>Amount (${escapeHtml(currCode)})</th></tr>
          </thead>
          <tbody>
            <tr><td>Development Base — Category + Platform + Design + Pages</td><td>${escapeHtml(data.devBaseCost || "₹ 0")}</td></tr>
            <tr><td>Features &amp; Technical Modules Add-ons</td><td>${escapeHtml(data.featuresCost || "₹ 0")}</td></tr>
            <tr><td>Post-Launch Maintenance &amp; Support (${escapeHtml(data.maintenance || "1 Yr")})</td><td>${escapeHtml(data.maintenanceCost || "₹ 0")}</td></tr>
            <tr><td>GST / Regional Service Tax (18%)</td><td>${escapeHtml(data.gstTax || "₹ 0")}</td></tr>
          </tbody>
        </table>
        <div class="grand-total">
          <div class="gt-label">Grand Total Estimate</div>
          <div class="gt-value"><span>${escapeHtml(currCode)}</span>${escapeHtml(totalValFormatted)}</div>
        </div>
        <div class="validity-strip">This quotation is valid for 07 days from the date of issuance — ${escapeHtml(validUntilStr)}.</div>
        <div class="note-box" style="margin-top:12px;">
          <span class="glabel">Disclaimer</span>
          This is a computer / website generated quotation. The final amount may increase or decrease based on confirmed project scope, requirements, and revisions.
        </div>
      </section>

      <section>
        <div class="eyebrow"><span class="num">•</span><h2>Guarantees &amp; Service Terms</h2></div>
        <div class="guarantee-grid">
          <div class="guarantee">
            <div class="gi">1</div>
            <div><h4>1-Week Risk-Free Trial</h4><p>Test your dedicated engineering squad with zero fee obligation if unsatisfied.</p></div>
          </div>
          <div class="guarantee">
            <div class="gi">2</div>
            <div><h4>100% Code &amp; IP Ownership</h4><p>Immediate assignment of all GitHub commits, schemas, and assets.</p></div>
          </div>
          <div class="guarantee">
            <div class="gi">3</div>
            <div><h4>Sub-100ms API SLA</h4><p>Guaranteed API response benchmark across production releases.</p></div>
          </div>
          <div class="guarantee">
            <div class="gi">4</div>
            <div><h4>85%+ Test Coverage</h4><p>Automated test coverage enforced on every production release.</p></div>
          </div>
        </div>
      </section>

      <section style="margin-bottom:0;">
        <div class="eyebrow"><span class="num">•</span><h2>Acceptance &amp; Signatures</h2></div>
        <div class="sig-grid">
          <div class="sig-box">
            <div class="sig-role">Authorized Signature — BrosDev</div>
            <div class="sig-line"></div>
            <div class="sig-name">BrosDev IT Engineering Studio</div>
          </div>
          <div class="sig-box">
            <div class="sig-role">Client Acceptance &amp; Signature</div>
            <div class="sig-line"></div>
            <div class="sig-name">${escapeHtml(data.name || "Client")} — ${escapeHtml(data.company || "Company")}</div>
          </div>
        </div>
      </section>

    </div>

    <div class="page-footer">
      <span>BrosDev IT Engineering Studio</span>
      <span><a href="https://brosdev.site">brosdev.site</a> · hello@brosdev.site</span>
    </div>
  </div>

</div>

</body>
</html>`;
}

/**
 * Backward Compatibility Export for generateQuoteHtml
 */
export function generateQuoteHtml(data: QuotePdfPayload): string {
  return generateQuoteEmailHtml(data);
}

export async function generateQuotePdfBuffer(
  data: QuotePdfPayload
): Promise<Buffer> {
  const htmlContent = generateQuotePdfHtml(data);

  let executablePath: string | undefined;
  try {
    executablePath = await chromium.executablePath();
  } catch (e) {
    console.warn("Could not get chromium executablePath:", e);
  }

  if (!executablePath && process.env.CHROME_EXECUTABLE_PATH) {
    executablePath = process.env.CHROME_EXECUTABLE_PATH;
  }

  let browser;
  try {
    browser = await puppeteer.launch({
      args: chromium.args || ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
      defaultViewport: chromium.defaultViewport || { width: 1200, height: 800 },
      executablePath: executablePath || undefined,
      headless: (chromium.headless as any) ?? true,
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, {
      waitUntil: ["load", "domcontentloaded"],
    });

    const pdfUint8Array = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0mm",
        right: "0mm",
        bottom: "0mm",
        left: "0mm",
      },
      preferCSSPageSize: true,
    });

    return Buffer.from(pdfUint8Array);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
