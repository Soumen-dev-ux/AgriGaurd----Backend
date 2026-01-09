import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "./routes/analyze.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",   // allow Vercel
}));

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", analyzeRoute);

// health check (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});