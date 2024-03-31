import express from 'express';
import { connectDB } from './database/connection_db.js';
import { addNewTerminology } from './global_service/service.js';

const app = express();
const port = 8000;

connectDB();

app.get('/send', (req, res) => {
    res.send('Welcome to my side !');
  });

  app.listen(port, () => {
    console.log("Hello listening on port " + port);
})

app.post('/add/terminology', async(req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const meaning = req.body.meaning;

  const result  = await addNewTerminology(title, description, meaning)
  console.log(result);
})