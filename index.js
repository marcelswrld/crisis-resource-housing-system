// resolvers/index.js -- GraphQL Resolvers

// Resolvers contain the logic that fetches or modifies the data based on the operations requested by the client

const Listing = require('../models/Listing');
const Donation = require('../models/Donation');

const resolvers = {
    Query: {
        // Fetch all listings, optionally filtered by location
        listings: async (_, { location }) => {
            if (location) {
                return await Listing.find({ location });
            }
            return await Listing.find();
        },

        // Fetch all donations, optionally filtered by item
        donations: async (_, { item }) => {
            if (item) {
                return await Donation.find({ item });
            }
            return await Donation.find();
        },

        // Count the total number of listings, optionally filtered by location
        listingCount: async (_, { location }) => {
            if (location) {
                return await Listing.countDocuments({ location });
            }
            return await Listing.countDocuments();
        },

        // Count the total number of donations, optionally filtered by category
        donationCount: async (_, { category }) => {
            if (category) {
                return await Donation.countDocuments({ category });
            }
            return await Donation.countDocuments();
        },
    },

    Mutation: {
        // Add a new listing
        addListing: async (_, { title, location, price, description, contactInfo, capacity, createdBy }) => {
            console.log('Received data for addListing:', {
                title,
                location,
                price,
                description,
                contactInfo,
                capacity,
                createdBy,
            });
            const newListing = new Listing({
                title,
                location,
                price,
                availability: true, // default to available
                description,
                contactInfo,
                capacity,
                createdBy,
            });
            const savedListing = await newListing.save();
            console.log('Saved listing:', savedListing);
            return savedListing;
        },
        

        // Add a new donation
        addDonation: async (_, { item, quantity, donorName, category, expiryDate, createdBy }) => {
            const newDonation = new Donation({
                item,
                quantity,
                donorName,
                category,
                expiryDate,
                createdBy,
            });
            return await newDonation.save();
        },

        // Delete a listing by ID
        deleteListing: async (_, { id }) => {
            return await Listing.findByIdAndDelete(id);
        },

        // Delete a donation by ID
        deleteDonation: async (_, { id }) => {
            return await Donation.findByIdAndDelete(id);
        },

        // Update a listing
        updateListing: async (_, { id, title, location, price, availability, description, contactInfo, capacity }) => {
            const updatedListing = await Listing.findByIdAndUpdate(
                id,
                {
                    title,
                    location,
                    price,
                    availability,
                    description,
                    contactInfo,
                    capacity,
                },
                { new: true } // Return the updated document
            );
            return updatedListing;
        },

        // Update a donation
        updateDonation: async (_, { id, item, quantity, donorName, category, expiryDate }) => {
            const updatedDonation = await Donation.findByIdAndUpdate(
                id,
                {
                    item,
                    quantity,
                    donorName,
                    category,
                    expiryDate,
                },
                { new: true } // Return the updated document
            );
            return updatedDonation;
        },
    },
};

module.exports = resolvers;
