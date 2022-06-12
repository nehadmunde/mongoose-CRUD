const res = require("express/lib/response")
const studentModel=require('../models/student')

class studentController{

    //create students (post)
    static createDoc=async(req,res)=>{
       console.log(req.body)
        try{
            const doc=new studentModel({
                name:req.body.name,
                age:req.body.age,
                fees:req.body.fees
            })
            //saving document
            const result=await doc.save();
            console.log(result);
            res.redirect('/student');
        }catch(err){
            console.log(err)
        }
    }

    // read data (get)
    static getAllDoc=async(req,res)=>{ 
        try{
           const result=await studentModel.find()
           //console.log(result);
           res.render("index",{data:result})
        }catch(err){
            console.log(err);
        }
    }

    static editDoc=async (req,res)=>{
       // console.log(req.params.id);
       try{
           const result=await studentModel.findById(req.params.id);
           console.log(result)
           res.render("edit",{data:result})
       }catch(err){
           console.log(err)
       }
        //res.render("edit");
    }

    static updateDocById=async(req,res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result=await studentModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect("/student");
        }catch(err){
            console.log(err)
        }
    }

    static deleteDocById=async(req,res)=>{
       
        try{
            const result=await studentModel.findByIdAndDelete(req.params.id)
            console.log("deleted item id:",req.body)
            res.redirect("/student");
        }catch(err){
            console.log(err)
        }
    }
}

module.exports=studentController;