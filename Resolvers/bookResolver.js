const Book = require('../models/Books');

exports.bookResolvers = {
  Query: {
    books: async () => {
      try {
        const books = await Book.find();
        return books;
      } catch (error) {
        console.error(error);
        throw new Error('Server Error');
      }
    },
  },
  Mutation: {
    addBook: async (_, { title, author }, { user }) => {
      console.log(user);
      try {
        const book = await Book.create({ title, author, owner: user.id });
        return book;
      } catch (error) {
        console.error(error);
        throw new Error('Server Error');
      }
    },
    buyBook: async (_, { id }, { user }) => {
      if (!user) {
        throw new Error("Unauthorized: User not logged in");
      }
      try {
        const book = await BookModel.findById(id);
        if (!book) {
          throw new Error("Book not found");
        }
        user.booksOwned.push(book);
        await user.save();

        return book;
      } catch (error) {
        console.error("Error buying book:", error.message);
        throw new Error("Failed to buy book");
      }
    },
    deleteBook: async (_, { id }, { user }) => {
      // Check if user is logged in
      if (!user) {
        throw new Error("Unauthorized: User not logged in");
      }

      // Check if user is admin
      if (user.role !== "admin") {
        throw new Error("Unauthorized: User is not an admin");
      }

      // User is logged in and is an admin, so delete book
      const deletedBook = await BookModel.findByIdAndDelete(id);
      if (!deletedBook) {
        throw new Error("Book not found");
      }

      return deletedBook;
    },
  },
};
