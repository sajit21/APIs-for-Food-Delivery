

import * as mongoose from "mongoose"
import User from "../model/UserModel"
// import { validationResult } from "express-validator"; // we 
import { Utilis } from "../utilis/Utilis";
import { truncate } from "fs";
export class UserController{


     static async signup(req,res,next)
     {
       
            // const data =[{name: 'tech'}]
            // res.status(200).send(data)
            // const error=new Error('user email or password does not match')
            // next(error)
         // res.send(req.body)
         const {name,verified_OTPDate,verified_OTPToken,email,password,type,status}=req.body;
            // return res.status(400).json({errors: errors.array().map(x=>x.msg)})
               // return res.status(400).json({ errors: errors.array()[0].msg }); // with express-validator to format and return validation errors as an array.
    
         // else{
         
         // res.send('User signed up successfully!'); //  Make sure response is sent
      // }
     
       const data={
         email,
         verified_OTPDate:Date.now() + new Utilis().verified_OTPDate,
         verified_OTPToken : Utilis.GenerateOTp(6),
         password,
         name,
         type,
         status
       }
           

       try{
         let user= await new User(data).save()
         res.send(user)

       }catch(e){
         next(e)
       }

         // user.save().then((user)=>{
         //    res.send(user) //incase to handle the promise . then use if it is resolve


         // })
         // .catch(err=>{
         //    next(err)
         // }
         // )
      }


      static async verify(req,res,next){
            
         const {
            verified_OTPToken,email}=req.body;
            try{
               const user= await User.findOneAndUpdate({
                  email:email,
                  verified_OTPToken:verified_OTPToken,
                  verified_OTPDate :{$gt: Date.now()}
               },
               {email_verified: true

               },
            {
               new : true
            })
               if(user)
               {
                  res.send(user)

               }else{
                  throw new Error('email verification token is expired')

               }
            
            }
            catch(e){
               next(e)
            }
         }}


         // static test1(req,res,next){
       
         //  console.log("test") 
         //  next();       
         // // res.status(200).send(data)
         // }
         
         // static test2(req,res){
       
         //    const data =[{name: 'tech'}]
         //    res.status(200).send(data)
         // }  
         // }

      
         


