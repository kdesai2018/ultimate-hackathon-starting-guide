const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const mongoose = require('mongoose');

const exphbs = require('express-handlebars');


// Set up database and collections
const Users = require('./schema/User')

mongoose.connect('mongodb://localhost/websitetest', {useNewUrlParser: true , useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "));
db.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


// Needed for custom routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Render views
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;
// Listen on requests only on a certain port
app.listen(port, () => {
    console.log(`listening on port ${ port }`);
});

// Set up cookies
app.use(session({
    name: 'server-session-cookie-id',
    secret: 'super safe secret',
    saveUninitialized: false,
    resave: false,
    cookie: {
       maxAge: 3600000 * 24 * 7 * 2 // 2 weeks
    }
}));

// Easy access to user and user updated when fields updated
app.use((req, res, next) => {
    if (req.session.userId) {
       Users.findById(req.session.userId, function (err, user) {
          user.password = null;
          delete user.password;
          req.user = user;
          return next();
       });
    } else {
       return next();
    }
});

// Middleware
function requireLogin(req, res, next) {
    if(req.session && req.session.userId) {
        return next();
    }
    else {
        var err = new Error('You must be logged in to view this page.');
        err.status = 400;
        return next(err);
    }
}

app.get("/", (req, res) => {
    res.render('login');
});

app.get("/register", (req, res) => {
    res.render('register');
});

app.get('/profile', requireLogin, (req, res) => {
    res.render('profile', {name : req.user.name})
});

app.post('/register', (req, res) => {
    if(req.user) res.json({"error" : "user already logged in"});
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
                res.redirect('/');
            }
          });
        });
      }
    })
});

app.post('/login', (req, res) => {
    Users.findOne({'email': req.body.email}, (err, user) => {
        if(err) console.log(err);
        else if(user === null) {
            res.status(400).json({"error" : "invalid username"});
            return;
        }
        else {
            bcrypt.compare(req.body.password, user.password, (err, match) => {
                if(err) console.log(err);
                else if(match) {
                    req.session.userId = user._id;
                    req.session.save();
                    res.redirect('/profile');
                    return;
                }
            })
        }
    })
});

app.get('/logout', (req, res, next) => {
    if(req.session) {
        req.session.destroy((err) => {
            if(err) {
                next(err);
            }
            else {
                return res.redirect('/')
            }
        });
    }
});

// Error handler
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    res.status(err.status);
    res.render('error', {"status" : err.status, "error": err.message})
});
