const firebase = require('firebase');
const axios = require("axios");
const express = require('express'),
app = express()


// Initialize Firebase
const config = {
  apiKey: "AIzaSyBxU8b8jFHH7wDBXJZMn0vaYZZstPQdN6Y",
  authDomain: "endpoint-7c6fd.firebaseapp.com",
  databaseURL: "https://endpoint-7c6fd.firebaseio.com",
  projectId: "endpoint-7c6fd",
  storageBucket: "endpoint-7c6fd.appspot.com",
  messagingSenderId: "581327483846"
};
firebase.initializeApp(config);

//liesten to port number
port = process.env.PORT || 2000;


const data = require('./intent.json')
//Function posting the call_back

app.get('/add', function (req, res) {
  let userData = {main_menu: "Airtime",
                  choice: "R30"};

  // console.log(userData);

  axios.post('http://df1a828f.ngrok.io/api/v1/errorcode', userData)
   .then(function (response) {
     console.log(response);
     
   })
   .catch(function (error) {
    
     //console.log(error);
   });

})
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);