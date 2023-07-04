const {
  User
} = require('../models');

// CREATE new user
module.exports = {
  register: async (req, res) => {
    const {
      body: {
        username,
        email,
        password
      },
    } = req;
    try {
      const user = await User.create(req.body);

      delete user.password;

      req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.loggedIn = true;
        res.status(200).json(user);
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  login: async (req, res) => {
    const {
      body: {
        email,
        password
      },
    } = req;
    try {
      const user = await User.findOne({
        where: {
          email
        },
        attributes: {
          exclude: ['createdAt, updatedAt']
        },
      });

      if (!user) {
        res.status(400).json({
          message: 'Incorrect email or password. Please try again!',
        });
        return;
      }

      const validPassword = await user.checkPassword(password);

      if (!validPassword) {
        res.status(400).json({
          message: 'Incorrect email or password. Please try again!',
        });
        return;
      }

      delete user.password;

      req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.loggedIn = true;
        res.status(200).json({
          user,
          message: 'You are now logged in!',
        });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  logout: (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
};