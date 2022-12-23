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
  origin:["https://qau3-super-duper-guacamole-697pqjvjxr5f5q9v-3000.preview.app.github.dev"],
  methods:["GET", "POST"],
  preflightContinue: false,
  credentials:true
}))

app.get('/', (req, res) => {
  res.json({ hola: 'hola' });
});

app.use('/novice', novice);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port: ${process.env.PORT || port}`);
});
