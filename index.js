  const express=require("express");
  const app=express();

  app.get("/users",(req,res)=>{
    res.send({message:"users",data:[{
      id:1,
      name:"cedrick",
      age:20
    }]}); 
  })


  app.listen(3000,()=>{console.log("app running on port 3000")})