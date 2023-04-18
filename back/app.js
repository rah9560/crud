const express=require("express");
const app=express();
const port=process.env.PORT || 6900
const path=require("path");

const staticPath=path.join(__dirname,"../front")
console.log(path.join(__dirname,"../front"));

require("./db")
const Text=require("./schema")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(staticPath))

app.post("/",(req,res)=>{
    const diff_text=new Text({
        text:req.body.string
    })
    diff_text.save();
    res.send("Your data has been saved")
})

app.listen(port,()=>{
    console.log("Server is listening to port 6900");
})
