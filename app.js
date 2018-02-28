const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");

const User = require("./models/user");
const Comment = require("./models/comment");
const Picture = require("./models/picture");
const Song = require("./models/song");

const index = require('./routes/index');
const users = require('./routes/users');
const post = require("./routes/post")

var app = express();




// app.use(express.static(path.join(__dirname, 'public'))); ?


// -- MIDDLEWARES --

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));



app.use('/', index);
app.use('/users', users);


// -- ERRORS --

app.use((req, res) => {
  res.status(404);
  res.json({ error: "Page not found" });
});

// error handler
app.use((err, req, res, next) => {
  console.log("ERROR", req.method, req.path, err);

  if (!res.headersSent) {
    res.status(500);
    res.json({ error: "unexpected" });
  }
});

module.exports = app;
