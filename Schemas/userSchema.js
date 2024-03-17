const { gql } = require('apollo-server-express');

const userSchema = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    role: String!
    booksOwned: [Book!]!  
  }

  type AuthPayload {
    token: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    register(username: String!, email: String!, password: String!, role:String): User!
    login(email: String!, password: String!): AuthPayload
    logout: String!
  }
`;

module.exports = userSchema;
