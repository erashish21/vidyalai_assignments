
const fs = require("fs");
const pdfService = require("../services/pdfService");

const getPdf = (req, res) => {
  const { filename } = req.params;

  
  const filePath = `./uploads/${filename}`; // Replace with actual file path

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
};

const extractAndCreatePdf = async (req, res) => {
  const { filename, selectedPages } = req.body;

 
  try {
    const originalPdfBuffer = fs.readFileSync(`./uploads/${filename}`); // Replace with actual file path

    // Call the pdfService to extract and create a new PDF
    await pdfService.extractAndCreatePdf(originalPdfBuffer, selectedPages);

    const newPdfPath = "new-file.pdf"; // Replace with actual file path
    const stream = fs.createReadStream(newPdfPath);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=new-file.pdf");
    stream.pipe(res);
  } catch (error) {
    console.error("Error extracting and creating PDF:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getPdf,
  extractAndCreatePdf,
};
