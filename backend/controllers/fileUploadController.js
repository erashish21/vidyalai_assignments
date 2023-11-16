
const multer = require("multer");
const uploadMiddleware = require("../middlewares/uploadMiddleware");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadFile = (req, res) => {
  // Use req.file.buffer for the file data
  const fileBuffer = req.file.buffer;

  const filename = "uploaded-file.pdf"; // Replace with actual filename
  const filePath = `./uploads/${filename}`; // Replace with actual file path

  // Save the file to the server (in this case, to the 'uploads' directory)
  require("fs").writeFileSync(filePath, fileBuffer);

  res.json({ filename });
};

module.exports = {
  uploadFile,
};
