import express from 'express';
import { connectDB } from './database/connection_db.js';

const app = express();
const port = 3000;

connectDB();

app.get('/send', (req, res) => {
    res.send('Welcome to my side !');
  });

  app.listen(port, () => {
    console.log("Hello listening on port " + port);
})