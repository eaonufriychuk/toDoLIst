const mongoose = require('mongoose');
const express = require('express');
const toDoModel = require('./models/toDo');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/toDo')
  .then(() => console.log('ok'))
  .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => res.send('OK'));

app.get('/todo', (req, res) => {
  toDoModel.find({}, (err, result) => {
    if (!err && result) {
      res.status(200).json(result)
    } else {
      res.status(404).send('not found');
    }
  })
})

app.post('/todo', (req, res) => {
  toDoModel.create(req.body, (err, result) => {

    if (!err && result) {
      res.status(200).json(result)
    } else {
      res.status(500).send('not created');
    }
  })
})

app.delete('/todo/:id', (req, res) => {
  toDoModel.remove({
    _id: req.params.id
  }, (err) => {
    if (!err) {
      res.status(200).send('deleted')
    } else {
      res.status(500).send('not deleted');
    }
  })
})

app.listen(3005, () => console.log('server started'));