import { jsPDF } from "jspdf";

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

// Clean Non-ASCII Currency symbols (e.g. ₹ -> INR, € -> EUR, £ -> GBP, $ -> USD) for standard Helvetica PDF compatibility
function cleanCurrencyString(val: string, currencyCode: string): string {
  if (!val) return "0";
  let cleaned = val
    .replace(/₹/g, "INR ")
    .replace(/€/g, "EUR ")
    .replace(/£/g, "GBP ")
    .replace(/\$/g, "USD ")
    .replace(/¹/g, "")
    .trim();

  if (!cleaned.startsWith("INR") && !cleaned.startsWith("USD") && !cleaned.startsWith("EUR") && !cleaned.startsWith("GBP")) {
    cleaned = `${currencyCode} ${cleaned}`;
  }
  return cleaned;
}

// Convert raw ID to human-readable category name
function formatCategoryName(id: string): string {
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
  return map[id] || id.replace(/_/g, " ").toUpperCase();
}

export function generateQuotePdfBuffer(data: QuotePdfPayload): Buffer {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const primaryRed = [169, 7, 6]; // #A90706
  const darkSlate = [15, 23, 42]; // #0F172A
  const lightBg = [250, 248, 245]; // #FAF8F5
  const grayBorder = [226, 221, 213]; // #E2DDD5
  const textDark = [30, 41, 59];

  const dateStr = data.dateStr || new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currCode = data.currency || "INR";
  const devBaseClean = cleanCurrencyString(data.devBaseCost, currCode);
  const featuresClean = cleanCurrencyString(data.featuresCost, currCode);
  const maintClean = cleanCurrencyString(data.maintenanceCost, currCode);
  const gstClean = cleanCurrencyString(data.gstTax, currCode);
  const totalClean = cleanCurrencyString(data.totalEstimate, currCode);

  // Helper Header Drawer for Page 1 & Page 2
  const drawPageHeader = (pageNum: number, totalPages: number) => {
    // Top Bar
    doc.setFillColor(darkSlate[0], darkSlate[1], darkSlate[2]);
    doc.rect(0, 0, 210, 28, "F");

    doc.setFillColor(primaryRed[0], primaryRed[1], primaryRed[2]);
    doc.rect(0, 28, 210, 2.5, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("BROSDEV", 14, 16);

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text("OFFICIAL PROJECT & SQUAD ESTIMATE QUOTATION", 14, 23);

    // Quote Metadata Right
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "bold");
    doc.text(`QUOTE REF: ${data.referenceId}`, 196, 12, { align: "right" });
    doc.setFont("helvetica", "normal");
    doc.text(`DATE: ${dateStr}`, 196, 17, { align: "right" });
    doc.text(`PAGE ${pageNum} OF ${totalPages}`, 196, 22, { align: "right" });
  };

  const drawPageFooter = () => {
    doc.setDrawColor(grayBorder[0], grayBorder[1], grayBorder[2]);
    doc.line(14, 282, 196, 282);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(120, 120, 120);
    doc.text("BrosDev IT Engineering Studio • https://brosdev.site • Contact: hello@brosdev.site", 105, 288, { align: "center" });
  };

  // =========================================================================
  // PAGE 1: CLIENT DETAILS & TECHNICAL SCOPE GRID
  // =========================================================================
  drawPageHeader(1, 2);

  let y = 38;

  // Client Details Box
  doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
  doc.setDrawColor(darkSlate[0], darkSlate[1], darkSlate[2]);
  doc.setLineWidth(0.4);
  doc.rect(14, y, 182, 38, "FD");

  doc.setTextColor(primaryRed[0], primaryRed[1], primaryRed[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("CLIENT & CONTACT INFORMATION", 18, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);

  doc.text(`Client Name: ${data.name || "N/A"}`, 18, y + 15);
  doc.text(`Email: ${data.email || "N/A"}`, 18, y + 22);
  doc.text(`Phone: ${data.phone || "N/A"}`, 18, y + 29);

  doc.text(`Company: ${data.company || "N/A"}`, 110, y + 15);
  doc.text(`WhatsApp: ${data.whatsappNumber || data.phone || "N/A"}`, 110, y + 22);
  doc.text(`Country / Currency: ${data.country || "Global"} (${currCode})`, 110, y + 29);

  y += 46;

  // Technical Scope Grid
  doc.setTextColor(darkSlate[0], darkSlate[1], darkSlate[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("1. TECHNICAL SCOPE & PARAMETERS", 14, y);
  y += 4;

  doc.setDrawColor(darkSlate[0], darkSlate[1], darkSlate[2]);
  doc.setLineWidth(0.3);
  doc.line(14, y, 196, y);
  y += 6;

  const categoryName = formatCategoryName(data.projectType);

  const techSpecs = [
    ["Project Category", categoryName],
    ["Target Platform", data.platform || "Corporate Website"],
    ["Design Level", data.designComplexity || "Custom UI/UX"],
    ["Pages / Screens", data.pagesRange || "6-10 Pages"],
    ["Existing Status", data.existingProject || "New Project"],
    ["Timeline Req", data.timeline || "1 Month"],
    ["Maintenance", data.maintenance || "3 Months Support"],
    ["Hosting & Domain", `${data.hosting || "Need Hosting"} | ${data.domain || "Already Have"}`],
    ["Admin & DB Specs", `${data.adminRequirement || "Single Admin"} | ${data.databaseSize || "Small DB"}`],
    ["Expected Scale", `${data.expectedUsers || "100-1000 Users"}`],
  ];

  doc.setFontSize(8.5);
  techSpecs.forEach((spec, i) => {
    const col = i % 2 === 0 ? 14 : 110;
    const rowY = y + Math.floor(i / 2) * 7;

    doc.setFont("helvetica", "bold");
    doc.setTextColor(primaryRed[0], primaryRed[1], primaryRed[2]);
    doc.text(`${spec[0]}:`, col, rowY);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    const valText = spec[1] ? String(spec[1]).substring(0, 38) : "N/A";
    doc.text(valText, col + 36, rowY);
  });

  y += Math.ceil(techSpecs.length / 2) * 7 + 8;

  // Features Overview Box
  doc.setTextColor(darkSlate[0], darkSlate[1], darkSlate[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("2. SELECTED FEATURES & MODULES OVERVIEW", 14, y);
  y += 4;

  doc.setDrawColor(darkSlate[0], darkSlate[1], darkSlate[2]);
  doc.setLineWidth(0.3);
  doc.line(14, y, 196, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(primaryRed[0], primaryRed[1], primaryRed[2]);
  doc.text("Features & Add-ons:", 14, y);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const featsStr = data.selectedFeatures || "Standard Features";
  const splitFeats = doc.splitTextToSize(featsStr, 138);
  doc.text(splitFeats, 54, y);

  y += Math.max(splitFeats.length * 4.2, 8) + 6;

  // E-commerce Modules if applicable
  if (data.isEcommerce === "Yes" && data.ecommerceOptions) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(primaryRed[0], primaryRed[1], primaryRed[2]);
    doc.text("E-Commerce Options:", 14, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    const splitEcom = doc.splitTextToSize(data.ecommerceOptions, 138);
    doc.text(splitEcom, 54, y);
    y += Math.max(splitEcom.length * 4.2, 8) + 6;
  }

  // Additional Notes if any
  if (data.additionalNotes && data.additionalNotes !== "None") {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(primaryRed[0], primaryRed[1], primaryRed[2]);
    doc.text("Client Custom Notes:", 14, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    const splitNotes = doc.splitTextToSize(data.additionalNotes, 138);
    doc.text(splitNotes, 54, y);
  }

  drawPageFooter();

  // =========================================================================
  // PAGE 2: FINANCIAL BREAKDOWN TABLE & TERMS & GUARANTEES
  // =========================================================================
  doc.addPage();
  drawPageHeader(2, 2);

  y = 38;

  doc.setTextColor(darkSlate[0], darkSlate[1], darkSlate[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("3. ITEMIZED FINANCIAL COST BREAKDOWN", 14, y);
  y += 4;

  doc.setDrawColor(darkSlate[0], darkSlate[1], darkSlate[2]);
  doc.setLineWidth(0.3);
  doc.line(14, y, 196, y);
  y += 8;

  // Financial Table Header
  doc.setFillColor(darkSlate[0], darkSlate[1], darkSlate[2]);
  doc.rect(14, y, 182, 8, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("ITEM / DESCRIPTION", 18, y + 5.5);
  doc.text(`AMOUNT (${currCode})`, 192, y + 5.5, { align: "right" });

  y += 8;

  const financialItems = [
    ["Development Base (Category + Platform + Design + Pages)", devBaseClean],
    ["Features & Technical Modules Add-ons", featuresClean],
    ["Post-Launch Maintenance & Support", maintClean],
    ["GST / Regional Service Tax (18%)", gstClean],
  ];

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");

  financialItems.forEach((item, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 255 : lightBg[0], idx % 2 === 0 ? 255 : lightBg[1], idx % 2 === 0 ? 255 : lightBg[2]);
    doc.rect(14, y, 182, 8, "F");
    doc.setDrawColor(grayBorder[0], grayBorder[1], grayBorder[2]);
    doc.line(14, y + 8, 196, y + 8);

    doc.setTextColor(textDark[0], textDark[1], textDark[2]);
    doc.text(item[0], 18, y + 5.5);
    doc.text(item[1], 192, y + 5.5, { align: "right" });
    y += 8;
  });

  // Grand Total Highlight Banner
  y += 4;
  doc.setFillColor(primaryRed[0], primaryRed[1], primaryRed[2]);
  doc.rect(14, y, 182, 12, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("GRAND TOTAL ESTIMATE:", 18, y + 8);
  doc.text(totalClean, 192, y + 8, { align: "right" });

  y += 24;

  // Guarantees & Terms Box
  doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
  doc.setDrawColor(darkSlate[0], darkSlate[1], darkSlate[2]);
  doc.setLineWidth(0.4);
  doc.rect(14, y, 182, 38, "FD");

  doc.setTextColor(primaryRed[0], primaryRed[1], primaryRed[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("BROSDEV GUARANTEES & SERVICE TERMS", 18, y + 7);

  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text("• 2-Week Risk-Free Trial: Test your dedicated engineering squad with zero fee obligation if unsatisfied.", 18, y + 14);
  doc.text("• 100% Code & IP Ownership: Immediate assignment of all GitHub code commits, schemas, and assets.", 18, y + 21);
  doc.text("• Sub-100ms API Response SLA & 85%+ Automated Test Coverage guaranteed across production releases.", 18, y + 28);
  doc.text("• Estimate Validity: This quotation is valid for 30 days from date of issuance.", 18, y + 33);

  y += 50;

  // Sign-off / Acceptance Box
  doc.setDrawColor(grayBorder[0], grayBorder[1], grayBorder[2]);
  doc.line(14, y, 90, y);
  doc.line(120, y, 196, y);

  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("Authorized Signature (BrosDev)", 14, y + 4);
  doc.text("Client Acceptance & Signature", 120, y + 4);

  drawPageFooter();

  const arrayBuffer = doc.output("arraybuffer");
  return Buffer.from(arrayBuffer);
}
