import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {} from 'dotenv/config'

const app = express();

mongoose
  .connect('mongodb+srv://alphanoobie:husain@cluster0.o5s3rbi.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

app.use(cors());
app.use(express.json({ limit: "5mb" }));
