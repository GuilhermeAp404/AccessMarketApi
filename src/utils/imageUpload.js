import multer from 'multer';
import crypto from 'crypto';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const archiveExtension = file.originalname.split('.')[1];

    const newName = crypto.randomBytes(64).toString('hex');

    const archive = `${newName}.${archiveExtension}`;
    cb(null, archive);
  },
});

const imageUpload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error('Apenas imagens em png ou jpg são permitidas'));
    }
    cb(undefined, true);
  },
});

export default imageUpload;
