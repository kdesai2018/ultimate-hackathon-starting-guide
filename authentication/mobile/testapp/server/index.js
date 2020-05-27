const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser= require('body-parser');

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'super secret key';


const Users = require('./schema/User')

mongoose.connect('mongodb://localhost/mobiletest', {useNewUrlParser: true , useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "));
db.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`listening on port ${ port }`);
});

app.post('/register', (req, res) => {
  Users.findOne({'email' : req.body.email}, (err, foundUser) => {
    if(err) console.log(err);  
    if(foundUser != null)
    {
      res.json({"error" : "email already in use"});
    }
    else
    {
      bcrypt.hash(req.body.password, 12, (err, hash) => {
        Users.create({password: hash, username : req.body.username, name : req.body.name, email : req.body.email}, (err, user) => {
          if(err) res.json({"error": err});
          else {
              res.json({"message" : "success!"});
          }
        });
      });
    }
  })
});

app.post('/login', (req, res)=> {
    Users.findOne({'email' : req.body.email}, (err, user) => {
      if(err) console.log(err);
      if(user === null)
      {
        res.status(401).json({"message" : "Failed to log in"});
        return;
      }
      else
      {
        bcrypt.compare(req.body.password, user.password, (err, match) => {
            if(err) console.log(err);
            if(match)
            {
              res.status(200).json({"token": jwt.sign({id: user._id}, SECRET_KEY), "user" : user});
            }
            else
            {
              res.status(401).json({"message" : "Failed to log in"});
            }
        })
      }
    })
  });

  app.get('/backwards', (req, res) => {
    console.log(req.query);
    let token = req.query.token;
    if(token === undefined) {
      res.status(401).json({"message" : "no token"});
    }
    else {
      jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if(err) console.log(err);
        if(decoded === undefined) 
        {
          res.status(401).json({"message" : "invalid token"});
        }    
        let id = decoded.id;
        Users.findById(id, (err, user) => {
          if(err) console.log(err);
  
          if(user == null) res.status(401).json({"message" : "invalid token"});
          else {
            let backwards = user.name.split("").reverse().join("")
            res.status(200).json({"backwards" : backwards});
          }
        })
      })
    }

  })
