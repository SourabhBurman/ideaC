const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
exports.userResolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.error(error);
        throw new Error('Server Error');
      }
    },
  },
  Mutation: {
    register: async (_, { username, email, password }) => {
      try {
        let user = await User.findOne({ email });
        if (user) {
          throw new Error('User already exists');
        }
        const hash = bcrypt.hashSync(password, 5);
        user = new User({ username, email, password:hash });
        await user.save();
        return user;
      } catch (error) {
        console.error(error);
        throw new Error('Server Error');
      }
    },
    login: async (_, { email, password }) => {
      try {
        let user = await User.findOne({ email });
        if (!user) {
          throw new Error('Invalid Credentials');
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
          throw new Error('Invalid Credentials');
        }
        const token = jwt.sign({
          userId: user._id
        }, 'secret', { expiresIn: '1h' });
      console.log(token)
        return { token,username:user.username };
      } catch (error) {
        console.error(error);
        throw new Error('Server Error');
      }
    },
  },
};
