import express from 'express';

import { adminRouter } from './core/routes/admin';
import { ProjectRouter } from './core/routes/project.routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ msg: '200 ok' });
});

app.use('/admin', adminRouter);
app.use('/projects', ProjectRouter);



app.listen(3000, () => {
  console.log('API HAS STARTED!');
});