const mongoose = require('mongoose');


const rsvpsSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    from:  { type: String, required: true },
    memory:  { type: String, required: true },
    img: { type: String, required: false },
    wish:  { type: String, required: true },
    side:  { type: String, required: true },
}, {timestamps: true});


const Rsvp = mongoose.model('Rsvp', rsvpsSchema);

module.exports = Rsvp;
