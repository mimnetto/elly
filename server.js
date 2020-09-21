//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express();
const db = mongoose.connection;
require("dotenv").config()

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

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
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


//___________________
// Routes
//___________________

// 03 New
app.get('/rsvps/new', (req, res)=>{
  res.render('new.ejs');
});

// 04 Show
app.get('/rsvps/show', (req, res)=>{
  res.render('show.ejs');
});

//  03 index route
app.get('/rsvps/index', (req, res)=>{
  res.render(
      'index.ejs',
  );
});

// 00 home
app.get('/rsvps/', (req, res)=>{
  res.render(
      'home.ejs',
  );
});

//localhost:3000
app.get('/' , (req, res) => {
    res.redirect('/rsvps')
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( '🥂👰🤵🥂', PORT));
