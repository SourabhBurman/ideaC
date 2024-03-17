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
        const book = await Book.create({ title, author, owner: user._id });
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
  },
};
