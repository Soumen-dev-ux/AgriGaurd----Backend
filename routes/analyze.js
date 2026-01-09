import express from "express";
import multer from "multer";
import fs from "fs";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/analyze", upload.single("image"), async (req, res) => {
  try {
    const text = req.body.text;
    const image = req.file;

    if (!text && !image) {
      return res.status(400).json({ error: "No input provided" });
    }

    // AI logic here

    if (image) fs.unlinkSync(image.path);

    res.json({
      success: true,
      result: "Analysis completed"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
