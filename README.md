# 🏠 Crisis Resource and Housing Management System

## **Overview**
The Crisis Resource and Housing Management System is a GraphQL-powered platform designed to streamline the process of managing **emergency housing listings** and **resource donations**. Inspired by Airbnb's **Airbnb.org** initiative, which connects people in times of crisis to housing resources, this project enables organizations to quickly match housing and donations to people in need.

The system supports:
- Creating and managing housing listings for emergencies.
- Tracking resource donations (e.g., food, medical supplies).
- Efficient data querying and updates using GraphQL.

---

## **Inspiration**
This project draws inspiration from Airbnb's **Airbnb.org**, which has provided housing for over 100,000 people during crises. By simplifying the management of housing and donation resources, this project aims to help non-profits, shelters, and local authorities provide **faster assistance** during emergencies.

The project is built to handle scalability, enabling thousands of listings and donations while ensuring data integrity and efficient resource allocation.

---
## **Features**
- **Housing Management**: Add, update, delete, and search for emergency housing listings.
- **Donation Tracking**: Manage resource donations with detailed item and donor information.
- **Efficient Queries**: Search for data using GraphQL with filters (e.g., location, item type).
- **Counts and Analytics**: Get counts of available listings and donations.
- **Scalability**: Built with MongoDB Atlas to handle thousands of records.

---

## **Technologies Used**
- **Backend**: Node.js, Apollo Server
- **Database**: MongoDB Atlas, Mongoose ODM
- **GraphQL**: Query language for APIs
- **Hosting**: Render (Deployment instructions included)

---

## **Prerequisites**
Before you begin, make sure you have:
1. **Node.js** installed (version 14+): [Download Node.js](https://nodejs.org/)
2. **MongoDB Atlas**: Set up a free cloud MongoDB account: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
3. **Git** installed (optional for cloning repositories): [Download Git](https://git-scm.com/)

---

## **Project Setup**

### 1. Clone the Repository
Clone the project to your local machine using the terminal:
```bash
git clone https://github.com/yourusername/crisis-resource-housing.git
cd crisis-resource-housing
```

### 2. Set Up MongoDB Atlas Connection
- Log in to MongoDB Atlas.
- Create a new cluster and database named `crisisResource`.
- Whitelist your IP address to connect to MongoDB.
- Copy your MongoDB connection string:
  ```text
  mongodb+srv://<username>:<password>@cluster.mongodb.net/crisisResource?retryWrites=true&w=majority
  ```
- Create a `.env` file in the root directory and add your connection string:
  ```bash
  MONGO_DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/crisisResource
  ```

### 3. Install Dependencies
Navigate to your project root folder and install the required dependencies:
```bash
npm install
```
The following dependencies are installed:
- `@apollo/server`: GraphQL server setup.
- `mongoose`: ODM for MongoDB to handle database operations.
- `graphql`: Query language for GraphQL.
- `dotenv`: For loading environment variables.

### 4. Run the Project Locally
Start the development server using the following command:
```bash
npm start
```
If everything is set up correctly, you will see:
```text
✈ Server ready at http://localhost:4000/
✅ Connected to MongoDB Atlas successfully.
```

### 5. GraphQL Playground
After starting the server, you can access the GraphQL Playground at: [http://localhost:4000/](http://localhost:4000/)
Here, you can test GraphQL queries and mutations.

---

## **Example Queries and Mutations**

### 1. Add a new housing listing:
```graphql
mutation {
  addListing(
    title: "Emergency Shelter",
    location: "New York City",
    price: 150.0,
    description: "Safe shelter for up to 6 people.",
    contactInfo: "555-987-6543",
    capacity: 6,
    createdBy: "user123"
  ) {
    id
    title
    location
    price
    availability
  }
}
```

### 2. Fetch all housing listings:
```graphql
query {
  listings {
    id
    title
    location
    price
    availability
  }
}
```

### 3. Add a new donation:
```graphql
mutation {
  addDonation(
    item: "Bottled Water",
    quantity: 100,
    donorName: "John Doe",
    category: "Supplies",
    expiryDate: "2024-12-31",
    createdBy: "user456"
  ) {
    id
    item
    quantity
    donorName
  }
}
```

### 4. Fetch all donations:
```graphql
query {
  donations {
    id
    item
    quantity
    donorName
    category
  }
}
```

---

## **Project Structure**

Here is an overview of the project structure:
```
crisis-resource-housing/
│
├── src/
│   ├── index.js            # Main entry point
│   ├── typeDefs.js         # GraphQL schema definitions
│   ├── resolvers/
│   │   └── index.js        # Resolvers for queries and mutations
│   ├── models/
│   │   ├── Listing.js      # Mongoose model for housing listings
│   │   └── Donation.js     # Mongoose model for resource donations
│
├── .env                    # Environment variables (MongoDB connection)
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

---

## **Deployment**

### Deploy to Render
Follow these steps to deploy the project to Render:
1. **Create a Render account**: Go to [Render](https://render.com/) and sign up for a free account.
2. **Create a new web service**:
   - Link your GitHub repository to Render.
   - Set the build command: `npm install`.
   - Set the start command: `npm start`.
3. **Add environment variables**:
   - Add the `MONGO_DB_URI` connection string under "Environment Variables".
4. **Deploy**:
   - Render will provide a public URL for your application.

---

## **Future Enhancements**
- Implement role-based access control for different user types.
- Add authentication for secure access to the platform.
- Integrate a frontend (React.js or Vue.js) for user-friendly interactions.
- Include advanced search and filtering options.

---

## **License**
This project is licensed under the MIT License.

---

## **Contact**
For any questions or suggestions, please reach out:
- **Name**: Marcel Marin
- **Email**: marcel.marin@example.com
- **LinkedIn**: [www.linkedin.com/in/marcel-martin-link](https://www.linkedin.com/in/marcel-martin-link)
