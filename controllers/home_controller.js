const Desc = require('../models/desc');
module.exports.home = function (req,res){
  Desc.find({},function(err,desc){
    if(err){
        console.log('Error in the database ::');
    }
    return res.render('home',{
    title: "Home",
    desc_list: desc
    }
    );


  });


}