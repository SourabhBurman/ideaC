const { gql } = require('apollo-server-express');

const bookSchema = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    owner: User
    description: String!
    rentPrice: Float    
    buyPrice: Float
  }

  type Query {
    books: [Book!]!
  }

  type Mutation {
    addBook(title: String!, author: String!, description: String!, buyPrice: Float): Book!
    deleteBook(id:ID!):Book!
    buyBook(bookId: ID!): Book!
  }
`;

module.exports = bookSchema;
