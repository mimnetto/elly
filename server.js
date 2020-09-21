//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const Rsvp = require('./models/rsvps.js');
const app = express();
const db = mongoose.connection;
require("dotenv").config()
// const rsvpsSeed = require("./models/seed.js");

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


//___________________
// Routes
//___________________

// 05 DELETE
app.delete('/rsvps/:id', (req, res)=>{
    Rsvp.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/rsvps/');//redirect back to index
    });
});

// 06 edit
app.get('/rsvps/:id/edit', (req, res)=>{
    Rsvp.findById(req.params.id, (err, foundRsvp)=>{ //find the logs
        res.render(
    		'edit.ejs',
    		{
    			rsvp: foundRsvp //pass in found
    		}
    	);
    });
});

// 05 update
app.put('/products/:id', (req, res)=>{
    Rsvp.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/rsvps/');
    });
});

// 01 New
app.get('/rsvps/new', (req, res)=>{
  res.render('new.ejs');
});


//  03 index route
app.get('/rsvps/', (req, res)=>{
  Rsvp.find({}, (error, allRsvps)=>{
      res.render('index.ejs', {
          rsvps: allRsvps
      });
  });
});

// 04 Show
app.get('/rsvps/:id', (req, res)=>{
  Rsvp.findById(req.params.id, (err, foundRsvps)=>{
      res.render('show.ejs', {
          rsvps: foundRsvps
      });
  });
});

// 00 home
app.get('/', (req, res)=>{
  res.render(
      'home.ejs',
  );
});

// 02 Create
app.post('/rsvps/', (req, res)=>{
  Rsvp.create(req.body, (error, createdRsvp)=>{
        res.redirect('/rsvps/' + createdRsvp.id)
  });
});



// uncomment to add seed to db
// Rsvp.create(rsvpsSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added rsvp data')
// })

app.get(
  '/dropdatabase/cannotundo/areyoursure/reallysure/okthen',
  (req, res) => {
    Rsvp.collection.drop()
    res.send('You did it! You dropped the database!')
  }
)

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( '🥂👰🤵🥂 Wedding bells on', PORT));
