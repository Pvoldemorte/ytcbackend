import express from 'express';
import { addVideo, getVideo } from '../Controllers/video.js';
import multer from 'multer';

const router = express.Router();

// Set up multer for handling file uploads
// const storage = ;
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('file'), addVideo);
router.get("/data", getVideo)
 
export default router;

