import express from 'express';

import { adminRouter } from './core/routes/admin';
import { ProjectRouter } from './core/routes/project.routes';
import { TechnologyRouter } from './core/routes/technology.routes';
import { MessageRouter } from './core/routes/message.routes';

const app = express();

app.use(express.json());

app.use('/admin', adminRouter);
app.use('/messages', MessageRouter);
app.use('/projects', ProjectRouter);
app.use('/technologies', TechnologyRouter);


app.get('/', (req, res) => {
  return res.json({ msg: '200 ok' });
});

app.listen(3000, () => {
  console.log('API HAS STARTED!');
});