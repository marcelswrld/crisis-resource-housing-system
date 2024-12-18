//index.js -- Main Server File
//the main entry point that sets up the GraphQL server and connects it to MongoDB

//// Importing Required Packages ////

//imports apollo server from the @apollo/server package
//Apollo Server is a GraphQL server that allows you to build an API using GraphQL
const { ApolloServer } = require('@apollo/server');

//imports startStandaloneServer, a utility to start the Apollo server with a simplified config
//This method is provided in Apollo Server to create a standalone instance
const { startStandaloneServer } = require('@apollo/server/standalone');

//imports Mongoose which is a library for interacting with MongoDB in a Node.js environment
//Mongoose allows you to define models and schemas to easily manage your data
const mongoose = require('mongoose');

//// Connecting to MongoDB ////

//Defines a constant variable MONGO_DB_URI that stores the connection string for our MongoDB Atlas cluster
//The connection string is used to connect the Node.js app to the MongoDB database in the cloud
const MONGO_DB_URI =
  'mongodb+srv://realmarcel:f10iMCYUmAlzRI2N@crisis-housing-cluster.j3dse.mongodb.net/crisisResource?retryWrites=true&w=majority';

//mongoose.connect is used to connect MongoDB using the connection string (MONGO_DB_URI)
mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true, //uses the new connection string parser
    useUnifiedTopology: true, //uses the new server discovery and monitoring engine
  })
  .then(() => {
    //this is a promise that executes once the connection is successful
    console.log('✅ Connected to MongoDB Atlas successfully.');
  })
  .catch((error) => {
    //handles errors
    console.error('❌ Error connecting to MongoDB Atlas:', error.message);
    process.exit(1); //exits the process if the connection fails
  });

//// Importing GraphQL Schema and Resolvers ////

const typeDefs = require('./typeDefs'); //imports GraphQL schema definitions from typeDefs that contain the structure of our data (types, queries, and mutations)
const resolvers = require('./resolvers'); //imports resolvers that provide the logic for how the data is fetched or modified based on GraphQL queries and mutations

//// Setting up Apollo Server ////

const server = new ApolloServer({
  //Create a new instance of the ApolloServer class
  //The server is configured with schema definitions and resolvers
  typeDefs,
  resolvers,
});

//// Starting the server ////
async function startServer() {
  //defines an asynchronous function to start the server
  try {
    const { url } = await startStandaloneServer(server, {
      //starts the server when it's ready
      listen: { port: 4000 }, //specifies the port where the server listens
    });
    console.log(`🚀 Server ready at ${url}`); //server is running log message
  } catch (error) {
    console.error('❌ Failed to start the server:', error.message);
  }
}

startServer(); //calls startServer to start the server
