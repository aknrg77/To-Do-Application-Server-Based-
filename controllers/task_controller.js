const Desc = require('../models/desc');


module.exports.addTask = function (req,res){


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
   

}