import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";

import authRouter from "./routes/auth.route.js";

const app = express();
const port = process.env.port || 4000;

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(cookieParser());

//router
app.use("/api/auth", authRouter);

app.listen(port, async () => {
  await connectDB();
  console.log(`your server is running on port : ${port}`);
});
