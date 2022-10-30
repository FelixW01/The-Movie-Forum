const express = require("express");
const exphbs = require("express-handlebars");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
const hbs = exphbs.create();

require('./routes')(app);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});