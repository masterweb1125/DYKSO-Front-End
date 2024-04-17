import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import authRouter from "./router/auth.route.js";
import { dbConnection } from "./db/connect.js";
import serviceRouter from "./router/service.route.js";

dotenv.config();
const app = express();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;

// ----- connecting to database -----
dbConnection(DB_URL);
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'], 
//   credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// ---- Default/home page route --------
app.get("/", (req, res) => {
  res.send("WELCOME TO THE 'DYKSO' PROJECT SERVER 👋");
});

// ------ Custom middlewares --------- 
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/service", serviceRouter);


// ----- Errors handler ------
app.all("*", (req, res) => {
  res.status(500).json({
    status: 500,
    success: false,
    message: `Can not find ${req.originalUrl} on this server`,
  });
});

// -------- app listening port number ---------
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});