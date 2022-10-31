const express = require("express");
const exphbs = require("express-handlebars");
const path = require('path');

const sequelize = require('./db/config');
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();
const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

const force = process.env.FORCE_SYNC === 'true';

sequelize.sync({ force }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})