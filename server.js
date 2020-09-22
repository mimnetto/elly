//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require("dotenv").config()


const app = express();
const db = mongoose.connection;



//___________________
// public
//___________________
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });



// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

// Controllers
const rsvpsController = require('./controllers/rsvps.js')
app.use('/rsvps', rsvpsController)

// Routes
// 00 home
// app.get('/rsvps', (req, res) => {
//   res.redirect('/rsvps')
// })

app.get('/', (req, res)=>{
  res.render(
      'rsvps/home.ejs',
  );
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( '🥂👰🤵🥂 Wedding bells on', PORT));
