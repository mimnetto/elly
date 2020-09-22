// controller
//___________________
//Dependencies
//___________________
const express = require('express');
const Rsvp = require('../models/rsvps.js');
const rsvps = express.Router()
const moment = require('moment');



//___________________
// Routes
//___________________
// 01 New
rsvps.get('/new', (req, res)=>{
  res.render('rsvps/new.ejs');
});

// 06 edit
rsvps.get('/:id/edit', (req, res)=>{
    Rsvp.findById(req.params.id, (err, foundRsvp)=>{ //find the logs
        res.render(
    		'rsvps/edit.ejs',
    		{
    			rsvp: foundRsvp //pass in found
    		}
    	);
    });
});

// 05 DELETE
rsvps.delete('/:id', (req, res)=>{
    Rsvp.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/rsvps');//redirect back to index
    });
});

// 04 Show
rsvps.get('/:id', (req, res)=>{
  Rsvp.findById(req.params.id, (err, foundRsvps)=>{
      res.render('rsvps/show.ejs', {
          rsvps: foundRsvps
      });
  });
});

// 05 update
rsvps.put('/:id', (req, res)=>{
    Rsvp.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/rsvps/'+ updatedModel.id);
    });
});

// 02 Create
rsvps.post('/', (req, res)=>{
  Rsvp.create(req.body, (error, createdRsvp)=>{
        res.redirect('/rsvps/' + createdRsvp.id)
  });
});

//  03 index route
rsvps.get('/', (req, res)=>{
  Rsvp.find({}, (error, allRsvps)=>{
      res.render('rsvps/index.ejs', {
          rsvps: allRsvps
      });
  });
});


module.exports = rsvps
