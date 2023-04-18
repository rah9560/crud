const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/crud")
.then(()=>{
    console.log("Database is created successfully");
})
.catch(()=>{
    console.log("Database is not created successfully");
})