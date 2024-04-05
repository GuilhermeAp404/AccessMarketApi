import express from 'express';
import helmet from 'helmet';
import imageUpload from './utils/imageUpload.js';

const app = express();

app.use(express.json());
app.use(helmet());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.post('/multer', imageUpload.single('produto'), (req, res) => {
  res.status(200).json({ message: req.file });
});

export default app;
