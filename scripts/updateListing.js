// updateListing.js -- Script to Update a Document in MongoDB

const mongoose = require('mongoose');
const Listing = require('./src/models/Listing');

// MongoDB Connection String
const MONGO_DB_URI =
  'mongodb+srv://realmarcel:f10iMCYUmAlzRI2N@crisis-housing-cluster.j3dse.mongodb.net/crisisResource?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('✅ Connected to MongoDB Atlas.');

    // Update the document with a missing location
    try {
      const result = await Listing.updateOne(
        { _id: '6760bd4c52a0effa78d3a70b' }, // Replace with the actual _id
        { $set: { location: 'Unknown' } } // Add a default value
      );

      console.log('✅ Document Updated:', result);
    } catch (error) {
      console.error('❌ Error updating document:', error.message);
    } finally {
      mongoose.disconnect(); // Close the connection after the operation
    }
  })
  .catch((error) => {
    console.error('❌ Connection Error:', error.message);
  });
