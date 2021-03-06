// load express module into its own variable
const express = require ('express'); 

//load passport and passport-google strategy
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;

// connect passport with new passport google-strategy instance and pass configs between them
passport.use(new googleStrategy()); 
// creates a new express application
const app = express(); 
// route handler
// app => register route handler, get => method to watch for incoming http requests
// '/' => watch for requests to '/' directory, req => object representing the incoming request
// res => object representing the response data, body of arrow function => send JSON
// data "{hi:'there'}" as response 
/*
app.get('/',(req,res) => {
    res.send({hi : 'SomTej'});
});
*/

app.get('/auth/google')

// tells node to listen on port set by heroku during rum-time or default it to 5000 if not set
const PORT = process.env.PORT || 5000;
app.listen(PORT);

