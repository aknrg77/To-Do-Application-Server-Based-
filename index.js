const express = require('express');   //importing the express module
const app = express();
const port = 8000;      //port : 8000
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
 }));


// setting up the database and requiring it
const db =require('./config/mongoose');



//setting up the view engine(ejs)
app.set('view engine','ejs');
app.set('views','./views');



const Desc = require('./models/desc');


app.use(express.static('./assets')); //to access the static files


app.use('/',require('./routes/index'));  // using the express router

//('add-task')
//app.use('/add-task',require('./routes/add_task'));
app.post('/add-task',function(req,res){

    Desc.create({
        desc:req.body.desc
    },function(err,newDesc){
        if(err){
            console.log('error in creating new item');
            return;
        }
        console.log('******',newDesc);
        return res.redirect('back');
    });
});




app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`server is running on the port : ${port}`);
})