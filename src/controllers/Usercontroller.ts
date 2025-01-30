

import * as mongoose from "mongoose"
import User from "../model/UserModel"
import { validationResult } from "express-validator"; // we 
export class UserController{


     static signup(req,res,next)
     {
       
            // const data =[{name: 'tech'}]
            // res.status(200).send(data)
            // const error=new Error('user email or password does not match')
            // next(error)
         // res.send(req.body)
         const errors =validationResult(req)
         const {name,email,password}=req.body;
         if(!errors.isEmpty()){
            // return res.status(400).json({errors: errors.array().map(x=>x.msg)})
               return res.status(400).json({ errors: errors.array() }); // with express-validator to format and return validation errors as an array.
         }
         else{
         
         res.send('User signed up successfully!'); //  Make sure response is sent
      }
     


         // const user= new User({
         //    name,
         //    email,
         //    password
         // })

         // user.save().then((user)=>{
         //    res.send(user) //incase to handle the promise . then use if it is resolve


         // })
         // .catch(err=>{
         //    next(err)
         // }
         // )
      }



         static test1(req,res,next){
       
          console.log("test") 
          next();       
         // res.status(200).send(data)
         }
         
         static test2(req,res){
       
            const data =[{name: 'tech'}]
            res.status(200).send(data)
         }  
         }
