/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");
const path = require("path");

/* ***********************
 * Routes
 *************************/
app.use(static)

// Set ports
const HOST = "localhost";
const PORT = 5500;


/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 5500;
const host = process.env.HOST || 'localhost';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})

app.get('/', (req, res) => {
  res.render('index', { content: `<h1>Treasure Tamb</h1><p>Welcome to the portfolio!</p>` });
});

