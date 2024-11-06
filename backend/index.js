const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/devopsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api', (req, res) => res.send('Hello from the API'));
app.listen(5000, () => console.log('Backend running on port 5000'));
