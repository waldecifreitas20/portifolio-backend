import express from 'express';

import { adminRouter } from "./routes/admin";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ msg: '200 ok' });
});

app.use('/admin', adminRouter);



app.listen(3000, () => {
  console.log('API HAS STARTED!');
});