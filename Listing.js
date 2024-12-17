const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true }, // Corrected spelling of 'location'
    price: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    description: String,
    contactInfo: String,
    capacity: Number,
    createdBy: { type: String, required: true },
});

module.exports = mongoose.model('Listing', ListingSchema); // Correct export
