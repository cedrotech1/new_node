  const express=require("express");
  const app=express();

  app.get("/users",(req,res)=>{
    res.send({message:"users",data:[]}); 
  })


  app.listen(3000,()=>{console.log("app running on port 3000")})