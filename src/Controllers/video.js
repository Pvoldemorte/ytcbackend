
import Video from "../Models/videoModels.js";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {initializeApp} from "firebase/app"

initializeApp({
    apiKey: "AIzaSyD4hRdkaobgkPYk9ddvicqB8683KAWr5Zc",
    authDomain: "clone-fecb8.firebaseapp.com",
    projectId: "clone-fecb8",
    storageBucket: "clone-fecb8.appspot.com",
    messagingSenderId: "432707618883",
    appId: "1:432707618883:web:96d637254ffc0dfb38acf6",
    measurementId: "G-9ZF8HHQCFQ",
  })
  


const storage = getStorage();


export const addVideo = async (req, res, next) => {
    const StorageRef = ref(storage, req.file.originalname);
    const metadata = {
      contentType: 'video/mp4',
    };
    uploadBytes(StorageRef, req.file.buffer, metadata);
  // console.log(req.file.originalname);

  try {
      const url = await getDownloadURL(StorageRef);
        const newVideo = new Video({
          videoUrl : url,
          ...req.body
        });
      const savedVideo = await newVideo.save();
      res.status(200).json(savedVideo);
    } catch (err) {
      next(err);
    }
}


export const getVideo = async (req, res, next) => {
  try {

    // const collection = db.collection('Video');
    const video = await Video.find({});
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};
