import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import feeds from './mocks/feed.json';
import whales from './mocks/whales.json';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.render('pages/index', { feeds, whales });
});

// app.get('/feed', (req, res) => {
//   res.send(feed);
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}.`);
});
