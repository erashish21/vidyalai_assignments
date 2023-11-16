
const express = require("express");
const cors = require("cors");
const fileUploadController = require("./controllers/fileUploadController");
const pdfController = require("./controllers/pdfController");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.post("/upload", fileUploadController.uploadFile);
app.get("/pdf/:filename", pdfController.getPdf);
app.post("/pdf/extract", pdfController.extractAndCreatePdf);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
