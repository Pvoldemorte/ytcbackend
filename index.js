import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import  dotenv from "dotenv";
import videoRoutes from "./src/Routes/videoRoute.js";

// import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/videos", videoRoutes);



async function dataBaseConn() {
    try {
        const db = await mongoose.connect("mongodb+srv://youtubeclone:youtubeclone2023@youtubeclonecluster.ecnn20u.mongodb.net/youtubeclone"
            );
            console.log("Hello Chetan");
  
      if (!db) {
        console.log("db connection is failed");
      }
  
      console.log("database connection successfuly")
      app.listen(process.env.PORT , ()=>{ 
        console.log("server is listen on port: " + process.env.PORT);
      });
  
    } catch (error) {
      console.log("database Connection error : " + error);
    }
  
  }
  
  dataBaseConn();
  
  export default dataBaseConn;
