module.exports = {
  getDashboard: (req, res) => {
    res.render('dashboard', { welcomeMessage: 'Welcome to the dashboard' });
  }
}