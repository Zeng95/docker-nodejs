import express, { Application } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 8080;
const HOST = 'localhost';

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`TypeScript App is running on: ${req.url}`);
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
})