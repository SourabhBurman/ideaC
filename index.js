const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/db');
const { bookResolvers } = require('./Resolvers/bookResolver');
const { userResolvers } = require('./Resolvers/userResolver');
const bookSchema = require('./Schemas/bookSchema');
const userSchema = require('./Schemas/userSchema');
const authMiddleware = require('./Middleware/auth');
const jwt = require("jsonwebtoken");
require("dotenv").config()

const app = express();

const server = new ApolloServer({
  typeDefs:[userSchema,bookSchema],
  resolvers:[userResolvers,bookResolvers],
  context: async ({ req }) => {
    const token = req.headers.authorization?.split(" ")[1] || "";
    let user = null;
    try {

      if (token) {
          const decodedToken = jwt.verify(token, "secret");
          const userId = decodedToken.userId;
          user = await UserModel.findById(userId);
      } 
  } catch (error) {
      console.error("Error decoding token:", error.message);
  }
// let user = req.user
  return { user };
  },
});



app.use(express.json());

async function startApolloServer() {
    await server.start();
    server.applyMiddleware({ app });
}

startApolloServer().catch(error => {
  console.error('Error starting server:', error);
});

// app.use(authMiddleware);

// Start server
const PORT = 3000;
app.listen(PORT, async() => {
    await connectDB
  console.log(`Server running on port ${PORT}`);
});
