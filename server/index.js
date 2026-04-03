import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";
import authRouter from "./config/models/controllers/routes/middlewares/auth.route.js";
import userRouter from "./config/models/controllers/routes/user.route.js";
import interviewRouter from "./config/models/controllers/routes/interview.route.js";
import paymentRouter from "./config/models/controllers/routes/payment.route.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDb();
});
