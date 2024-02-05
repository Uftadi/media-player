import multer from 'multer';
import { myStorage } from '../storage/mediaStorage.js';
import userModel from '../models/userModel.js';
import nodePath from 'path';

const upload = multer({ storage: myStorage }).array('files');

export default [
  (req, res, next) => {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res
          .status(400)
          .json({ success: false, message: 'Error uploading files.' });
      } else if (err) {
        return res
          .status(500)
          .json({ success: false, message: 'Server error.' });
      }

      const uploadedMedia = req.files.map((file) => {
        const { originalname, path } = file;

        const { name: fileName } = nodePath.parse(originalname);

        const media = { fileName, path };
        return media;
      });

      const userId = req.body.userId;

      for (const mediaObj of uploadedMedia) {
        await userModel.findByIdAndUpdate(
          userId,
          { $addToSet: { media: mediaObj } },
          { new: true }
        );
      }

      res.send(`media uploaded successfully`);
    });
  },
];
