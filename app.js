const express = require("express");
const app = express();
// rotes
const router = require("./routes/routes");
app.use(router);

//const layouts = require("express-ejs-layouts");
// parse application/x - www - form - urlencoded
app.use(express.urlencoded({ extended: false }));

//set ejs
app.set("view engine", "ejs");
const port = process.env.port || 8080;

// connect to db
const connect = require("./db/db");
connect();
app.listen(port, () => {
  console.log(`App listening on  ${port}!`);
});
