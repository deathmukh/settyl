import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

app.use(cors());
app.use(express.json({ limit: "5mb" }));

const employeeData = new mongoose.Schema({
  id: Number,
  employee_name: String,
  employee_salary: Number,
  employee_age: Number,
  profile_image:String
})
const Employee = mongoose.model('employee', employeeData)

app.post('/save-mongo', async(req, res) => {
  try {
    // console.log(req.body)
    Employee.insertMany(req.body)
    .then(value => {
        console.log("Saved Successfully");
    })
    .catch(error => {
        console.log(error);
    })
    return res.json({ok:true})
  } catch (error) {
    console.log(error)
  }
})

const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV == 'production'){
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`server is running`))