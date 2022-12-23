const express = require('express');
const users = express.Router();
const DB = require('../DB/dbConn.js');

//Checks if user submited both fields, if user exist and if the combiation of user and password matches
users.post('/login', async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  if (username && password) {
    try {
      let queryResult = await DB.AuthUser(username);

      if (queryResult.length > 0) {
        if (password === queryResult[0].user_password) {
          req.session.user = queryResult;
          console.log(req.session.user);
          console.log(queryResult);
          console.log('SESSION VALID');

          //res.redirect('/');
        } else {
          console.log('INCORRECT PASSWORD');
        }
      } else {
        console.log('USER NOT REGISTRED');
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  } else {
    console.log('Please enter Username and Password!');
  }
  res.end();
});

//Inserts a new user in our database id field are complete
users.post('/register', async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  if (username && password && email) {
    try {
      let queryResult = await DB.AddUser(username, email, password);
      if (queryResult.affectedRows) {
        console.log('New user added!!');
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  } else {
    console.log('A field is missing!');
  }

  res.end();
});

module.exports = users;
