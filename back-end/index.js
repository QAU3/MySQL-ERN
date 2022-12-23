const express = require('express');
const cors = require("cors")
const app = express();
const port = 5000;
require('dotenv').config();

// Endpoints
const novice = require('./routes/novice');
const users = require('./routes/users');

//Some configurations
app.use(express.urlencoded({extended : true}));
app.use(cors({
  origin:["http://127.0.0.1:3000"],
  methods:["GET", "POST"],
  credentials:true
}))

app.get('/', (req, res) => {
  res.json({ hola: 'hola' });
});

app.use('/novice', novice);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port: ${process.env.PORT || port}`);
});
