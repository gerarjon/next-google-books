import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 4000;
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/NextBooks';

mongoose.connect(url).then(() => {
  console.log('> Successfully connected to MongoDB');
}).catch((error) => {
  console.log('> Error connecting to MongoDB: ', error.message);
})

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`> Backend server ready on http://localhost:${port}`);
});