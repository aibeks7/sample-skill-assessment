import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.render('pages/index');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}.`);
});
