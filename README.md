# Library Management

Welcome to the Library Management System, a comprehensive solution for managing your library's resources efficiently. This system offers a wide range of features tailored to meet the needs of both users and administrators.

## Features

1. *User Authentication*
   - Signup: Users can create an account.
   - Signin: Secure login functionality for registered users.

2. *Book Management*
   - Browse Books: Users can browse through the collection of available books.
   - Purchase Books: Users can purchase books from the library.


## User Guide

1. *Signup*
   - New users can register by providing their details.

2. *Signin*
   - Registered users can sign in using their credentials.

4. *Book Operations*
   - Browse Books: Users can explore the collection of books available in the library.
   - Purchase Books: Users can buy books from the library by selecting the desired title and completing the purchase process.


## Get Started

#### Available Routes

*Queries*

- *books*
  - Endpoint: /graphql
  - Method: POST
  - Description: Retrieves a list of all books.
  - Authorization: Required
  - Example Query:
    graphql
    ``` query {
      books {
        id
        title
        author
        description
        buyPrice
        status
      }
    }
     ```

- *users*
  - Endpoint: /graphql
  - Method: POST
  - Description: Retrieves a list of all users.
  - Authorization: Required
  - Example Query:
   ```  graphql
    query {
      users {
        id
        username
        email
        password
        role
      }
    }
     ```

*Mutations*

- *addBook*
  - Endpoint: /graphql
  - Method: POST
  - Description: Adds a new book to the system.
  - Authorization: Required
  - Example Mutation:
    ``` graphql
    mutation {
      addBook(bookInput: {
        title: "Book Title",
        author: "Author Name",
        description: "Book Description",
        buyPrice: 199.44
      }) {
        id
        title
        author
        description
        buyPrice
        status
      }
    }
     ```

- *deleteBook*
  - Endpoint: /graphql
  - Method: POST
  - Description: Deletes a book from the system.
  - Authorization: Required
  - Example Mutation:
   ```  graphql
    mutation {
      deleteBook(id: "book_id_here") {
        id
        title
        author
      }
    }
     ```

- *buyBook*
  - Endpoint: /graphql
  - Method: POST
  - Description: Allows a user to buy a book.
  - Authorization: Required
  - Example Mutation:
    ``` graphql
    mutation {
      buyBook(bookId: "book_id_here") {
        id
        title
        author
        description
        buyPrice
        status
      }
    }
     ```

- *register*
  - Endpoint: /graphql
  - Method: POST
  - Description: Registers a new user.
  - Authorization: Not required
  - Example Mutation:
    ``` graphql
    mutation {
      register(
        username: "abc",
        email: "abc@example.com",
        password: "password",
        role: "admin"
    ) {
        id
        username
        email
        role
      }
    }
     ```

- *login*
  - Endpoint: /graphql
  - Method: POST
  - Description: Logs in a user and generates access tokens.
  - Authorization: Not required
  - Example Mutation:
    graphql
    mutation {
      login(email: "john@example.com", password: "password") {
        token
        user {
          id
          name
          email
        }
      }
    }
    
    

## Technology Stack

- *Node.js*: Backend JavaScript runtime.
- *Express.js*: Web application framework for Node.js.
- *Apollo Server Express*: GraphQL server for Node.js.
- *MongoDB*: NoSQL database for data storage.
Thank you for choosing our platform!
