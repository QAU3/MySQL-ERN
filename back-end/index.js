const express = require('express');
const app = express();
const port = 5000;
require('dotenv').config();

// Endpoints
const novice = require('./routes/novice');
const users = require('./routes/users');

app.get('/', (req, res) => {
  res.json({ hola: 'hola' });
});

app.use('/novice', novice);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port: ${process.env.PORT || port}`);
});
