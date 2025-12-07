import { log } from 'console';
import express from 'express';
import { testQuery } from './db/connection';

const app = express();

app.get('/', (req, res) => {
  return res.json({ msg: '200 ok' });
});


app.listen(3000, () => {
  log('API HAS STARTED!');
  testQuery();
});