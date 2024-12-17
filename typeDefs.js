const { gql } = require('graphql-tag');

const typeDefs = gql`
    # Holds all the emergency housing listings
    type Listing {
        id: ID!
        title: String!
        location: String!
        price: Float!
        availability: Boolean!
        description: String
        contactInfo: String
        capacity: Int
        createdBy: ID!
    }

    # Holds all the donation information
    type Donation {
        id: ID!
        item: String!
        quantity: Int!
        donorName: String!
        category: String
        expiryDate: String
        createdBy: ID!
    }

    # Defines what data the user can request
    type Query {
        listings(location: String): [Listing]
        donations(item: String): [Donation]
        listingCount(location: String): Int
        donationCount(category: String): Int
    }

    # Defines what data the user can modify
    type Mutation {
        addListing(
            title: String!, 
            location: String!, 
            price: Float!, 
            description: String, 
            contactInfo: String, 
            capacity: Int, 
            createdBy: ID!
        ): Listing

        addDonation(
            item: String!, 
            quantity: Int!, 
            donorName: String!, 
            category: String, 
            expiryDate: String, 
            createdBy: ID!
        ): Donation

        deleteListing(id: ID!): Listing
        deleteDonation(id: ID!): Donation

        updateListing(
            id: ID!, 
            title: String, 
            location: String, 
            price: Float, 
            availability: Boolean, 
            description: String, 
            contactInfo: String, 
            capacity: Int
        ): Listing

        updateDonation(
            id: ID!, 
            item: String, 
            quantity: Int, 
            donorName: String, 
            category: String, 
            expiryDate: String
        ): Donation
    }
`;

module.exports = typeDefs;
