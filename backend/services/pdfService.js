// services/pdfService.js
const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

const extractAndCreatePdf = async (originalPdfBuffer, selectedPages) => {
  // Handle PDF extraction and creation logic here
  // ...

  const pdfDoc = await PDFDocument.create();
  const originalPdfDoc = await PDFDocument.load(originalPdfBuffer);

  // Extract selected pages
  selectedPages.forEach((pageNumber) => {
    const [copiedPage] = pdfDoc.copyPages(originalPdfDoc, [pageNumber]);
    pdfDoc.addPage(copiedPage);
  });

  // Save the new PDF
  const newPdfBytes = await pdfDoc.save();

  fs.writeFileSync("new-file.pdf", newPdfBytes); // Replace with actual file path
};

module.exports = {
  extractAndCreatePdf,
};
