import multer from 'multer';
import fs from 'fs';
import path from 'path';

export const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userId = req.body.userId;
    const userPath = `uploads/${userId}/`;

    fs.mkdir(userPath, { recursive: true }, (err) => {
      if (err) {
        return cb(err);
      }

      cb(null, userPath);
    });
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, `media-${uniqueSuffix}${fileExtension}`);
  },
});
