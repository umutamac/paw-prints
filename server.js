const express = require("express");
const mongoose = require("mongoose");
//const routes = require("./routes");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

const app = express();
const PORT = process.env.PORT || 3001; // backend server runs from this port


// Define Bodyparser middleware here
//new
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());


// DB Config - new
const db = require("./config/keys").mongoURI;

// Connect to MongoDB - new
mongoose
  .connect(db,{useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//checking connections
//app.get('/', (req, res) => {
// res.send('Project 3')
//})

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
//app.use(routes)
app.use("/api/users", users);
app.use("/api/posts", posts);


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pawprint");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
