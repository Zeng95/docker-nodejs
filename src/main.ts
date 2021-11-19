import express from 'express';

const app = express();
const PORT = 8080;
const HOST = 'localhost';

app.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.url);
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);