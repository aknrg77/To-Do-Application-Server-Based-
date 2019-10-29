const Desc = require('../models/desc');


module.exports.addTask = async function (req,res){
    
    let newDesc;
    try {
        newDesc = await Desc.create({
            desc:req.body.desc,
            dateOfTask:req.body.dateOfTask,
            category:req.body.category
        });
    } catch(err) {
        console.log(err);
    }

    return res.redirect('back');

    // Desc.create({
    //     desc:req.body.desc,
    //     dateOfTask:req.body.dateOfTask,
    //     category:req.body.category
    // },function(err,newDesc){
    //     if(err){
    //         console.log('error in creating new item');
    //         return;
    //     }
    //     console.log('******',newDesc);
    //     return res.redirect('back');
    // });

   

}


module.exports.deleteTask = function(req,res){
    let id = req.query.id;

    Desc.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting the data');
            return;
        }
        return res.redirect('back');

    });


}