const router = require('express').Router();
const { User } = require('../models');

// CREATE new user
module.exports = {
  register: async (req, res) => {
    const { body: { firstName, lastName, email, password } } = req;
    try {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password
      });

      req.session.save(() => {
        req.session.isAuthenticated = true;
        res.status(200).json(user);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  login: async (req, res) => {
    const { body: { email, password } } = req;
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }

      const validPassword = await user.checkPassword(password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
      req.session.save(() => {
        req.session.isAuthenticated = true;
        res.status(200).json({ user, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  logout: (req, res) => {
    if (req.session.isAuthenticated) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  }
}
