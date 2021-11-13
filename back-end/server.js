import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import ToDo from './dbToSchema.js';

const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  'mongodb+srv://federico333:federico@nodeexpress.zmaq3.mongodb.net/toDoReact?retryWrites=true&w=majority';

mongoose.connect(connection_url);

app.use(express.json());
app.use(Cors());

app.get('/', (req, res) => {
  res.send('Hello Federico');
});

app.post('/api/new', (req, res) => {
  const itemModel = req.body;
  ToDo.create(itemModel, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/api/new', (req, res) => {
  ToDo.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
