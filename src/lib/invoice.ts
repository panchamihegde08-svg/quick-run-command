import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { Sale, Settings } from "./types";
import { fmtDateTime, inr } from "./format";

export function buildInvoicePdf(sale: Sale, s: Settings) {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text(s.shopName, 14, 18);
  doc.setFontSize(9);
  doc.text(s.address, 14, 24, { maxWidth: 110 });
  doc.text(`Phone: ${s.mobile}`, 14, 34);
  doc.text(`GSTIN: ${s.gstin}`, 14, 39);

  doc.setFontSize(13);
  doc.text("TAX INVOICE", 196, 18, { align: "right" });
  doc.setFontSize(9);
  doc.text(`Invoice: ${sale.invoiceNo}`, 196, 25, { align: "right" });
  doc.text(`Date: ${fmtDateTime(sale.date)}`, 196, 30, { align: "right" });
  doc.text(`Cashier: ${sale.cashier}`, 196, 35, { align: "right" });

  doc.text(`Bill To: ${sale.customerName}`, 14, 48);
  if (sale.customerMobile) doc.text(`Mobile: ${sale.customerMobile}`, 14, 53);

  autoTable(doc, {
    startY: 58,
    head: [["#", "Item", "HSN", "Qty", "Rate", "Disc", "GST%", "Amount"]],
    body: sale.items.map((i, idx) => [
      idx + 1,
      i.name,
      i.hsn,
      `${i.qty} ${i.unit}`,
      i.price.toFixed(2),
      i.discount.toFixed(2),
      i.gst,
      i.total.toFixed(2),
    ]),
    styles: { fontSize: 8 },
    headStyles: { fillColor: [22, 128, 61] },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let y = (doc as any).lastAutoTable.finalY + 8;
  const rows: [string, string][] = [
    ["Subtotal", inr(sale.subtotal)],
    ["Item Discount", "-" + inr(sale.itemDiscount)],
    ["Bill Discount", "-" + inr(sale.billDiscount)],
    ["Taxable Value", inr(sale.taxable)],
    ["CGST", inr(sale.cgst)],
    ["SGST", inr(sale.sgst)],
    ["IGST", inr(sale.igst)],
    ["Round Off", inr(sale.roundOff)],
    ["GRAND TOTAL", inr(sale.total)],
    ["Payment", sale.paymentMethod],
  ];
  doc.setFontSize(9);
  for (const [k, v] of rows) {
    doc.text(k, 140, y);
    doc.text(v, 196, y, { align: "right" });
    y += 5.5;
  }
  doc.setFontSize(8);
  doc.text(s.footerNote, 14, y + 6);
  return doc;
}

export function downloadInvoice(sale: Sale, s: Settings) {
  buildInvoicePdf(sale, s).save(`${sale.invoiceNo}.pdf`);
}

export function printA4(sale: Sale, s: Settings) {
  const doc = buildInvoicePdf(sale, s);
  doc.autoPrint();
  const url = doc.output("bloburl");
  window.open(url as unknown as string, "_blank");
}

export function thermalHtml(sale: Sale, s: Settings) {
  const w = s.thermalWidth === 58 ? 220 : 300;
  const line = "--------------------------------";
  return `<html><head><title>${sale.invoiceNo}</title><style>
  body{font-family:'Courier New',monospace;font-size:12px;width:${w}px;margin:0 auto;padding:8px;color:#000}
  .c{text-align:center}.r{text-align:right}.b{font-weight:700}
  table{width:100%;border-collapse:collapse}td{font-size:11px;padding:1px 0}
  </style></head><body>
  <div class="c b" style="font-size:15px">${s.shopName}</div>
  <div class="c">${s.address}</div>
  <div class="c">Ph: ${s.mobile}</div>
  <div class="c">GSTIN: ${s.gstin}</div>
  <div>${line}</div>
  <div>Invoice: ${sale.invoiceNo}</div>
  <div>Date: ${fmtDateTime(sale.date)}</div>
  <div>Cashier: ${sale.cashier}</div>
  <div>Customer: ${sale.customerName}</div>
  <div>${line}</div>
  <table>
    <tr class="b"><td>Item</td><td class="r">Qty</td><td class="r">Rate</td><td class="r">Amt</td></tr>
    ${sale.items
      .map(
        (i) =>
          `<tr><td colspan="4">${i.name}</td></tr><tr><td></td><td class="r">${i.qty} ${i.unit}</td><td class="r">${i.price.toFixed(2)}</td><td class="r">${i.total.toFixed(2)}</td></tr>`,
      )
      .join("")}
  </table>
  <div>${line}</div>
  <table>
    <tr><td>Subtotal</td><td class="r">${sale.subtotal.toFixed(2)}</td></tr>
    <tr><td>Discount</td><td class="r">-${(sale.itemDiscount + sale.billDiscount).toFixed(2)}</td></tr>
    <tr><td>CGST</td><td class="r">${sale.cgst.toFixed(2)}</td></tr>
    <tr><td>SGST</td><td class="r">${sale.sgst.toFixed(2)}</td></tr>
    <tr><td>Round Off</td><td class="r">${sale.roundOff.toFixed(2)}</td></tr>
    <tr class="b"><td>TOTAL</td><td class="r">${sale.total.toFixed(2)}</td></tr>
    <tr><td>Paid (${sale.paymentMethod})</td><td class="r">${sale.received.toFixed(2)}</td></tr>
    <tr><td>Change</td><td class="r">${sale.change.toFixed(2)}</td></tr>
  </table>
  <div>${line}</div>
  <div class="c">${s.footerNote}</div>
  <script>window.onload=function(){window.print()}<\/script>
  </body></html>`;
}

export function printThermal(sale: Sale, s: Settings) {
  const win = window.open("", "_blank", "width=400,height=700");
  if (!win) return;
  win.document.write(thermalHtml(sale, s));
  win.document.close();
}

export function whatsappShare(sale: Sale, s: Settings) {
  const text = [
    `*${s.shopName}*`,
    `Invoice: ${sale.invoiceNo}`,
    `Date: ${fmtDateTime(sale.date)}`,
    "",
    ...sale.items.map((i) => `${i.name} x${i.qty} = ${inr(i.total)}`),
    "",
    `Total: ${inr(sale.total)}`,
    `Paid via ${sale.paymentMethod}`,
    "",
    s.footerNote,
  ].join("\n");
  const phone = (sale.customerMobile ?? "").replace(/\D/g, "");
  const url = `https://wa.me/${phone ? "91" + phone.slice(-10) : ""}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
