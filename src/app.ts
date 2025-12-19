import express from 'express';
import cors from 'cors';

import { adminRouter } from './core/routes/admin/index.js';
import { ProjectRouter } from './core/routes/project.routes.js';
import { TechnologyRouter } from './core/routes/technology.routes.js';
import { MessageRouter } from './core/routes/message.routes.js';

const app = express();

const { PORT, ALLOWED_DOMAIN } = process.env;

app.use(express.json());
app.use(cors({ origin: ALLOWED_DOMAIN }));

app.use('/admin', adminRouter);
app.use('/messages', MessageRouter);
app.use('/projects', ProjectRouter);
app.use('/technologies', TechnologyRouter);


app.get('/', (req, res) => {
  return res.json({ msg: '200 ok' });
});


app.listen(PORT ?? 8080, () => {
  console.log('API HAS STARTED!');
  console.log(`LISTENING AT PORT: ${PORT}`);
});