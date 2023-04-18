const mongoose=require("mongoose");

const text=mongoose.Schema({
    text:{
        type:String,
        minlength:3,
    }
})

const Text=new mongoose.model("Text",text)

module.exports =Text;