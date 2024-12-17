//Donation.js

//Sets up the moongoose models so it can perform CRUD( change, read, update, delete) operations and interact with MongoDB

const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    item: String,
    quantity: Number,
    donorName: String,
    category: String,
    expiryDate: String,
    createdBy: String,
});

module.exports = mongoose.model('Donation', DonationSchema);