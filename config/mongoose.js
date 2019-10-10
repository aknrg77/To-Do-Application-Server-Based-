const mongoose = require('mongoose');
mongoose.connect ('mongodb://localhost/todo');


const db = mongoose.connection;



db.on('error',console.error.bind(console,'Connection error:'));
db.once('open',function (){
    console.log("connected to the database");
})