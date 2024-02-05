import express from 'express';
import mediaMiddleware from '../middlewares/mediaMiddleware.js';
import {
  getMedia,
  deleteVideo,
  editName,
} from '../controllers/storeMediaController.js';

const router = express.Router();
router.post('/editName', editName);
router.post('/deleteVideo', deleteVideo);
router.post('/uploadMedia', mediaMiddleware);
router.get('/storeMedia', getMedia);

export default router;
