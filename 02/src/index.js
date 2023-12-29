import mongoose from "mongoose";
import { DB_name } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
import dotenv from 'dotenv'
const app = express();


dotenv.config({
    path:'./env'
})

connectDB()





















// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
//     app.on("error", (error) => {
//       console.log("err", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App listening on ${process.env.PORT}`);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// });
