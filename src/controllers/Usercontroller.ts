

// import { validationResult } from "express-validator"; // we 
import { Utils } from "../utils/Utils";
// import { NodeMailer } from "../utils/NodeMailer";
import * as Jwt from "jsonwebtoken"
import { getEnvironmanetVariables } from "../environments/environment";
import User from "../model/UserModel"


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
      

      try{
      const hash= await Utils.encryptPassword(password)
       const data={
         email,
         verified_OTPDate:Date.now() + new Utils().verified_OTPDate,
         verified_OTPToken : Utils.GenerateOTp(6),
         password: hash,
         name,
         type,
         status
       }
           

     
         let user= await new User(data).save()
         const payload={
            user_id : user._id,
            email : user.email,

         }
        const token= Jwt.sign(
            payload,
            getEnvironmanetVariables().jwt_secret_key,{
            expiresIn: '15d'
         })
       
     
         // await NodeMailer.sendMail({
         //    to: [user.email],
         //    subject: 'email verification',
         //    html: `<h1>your OTP is ${data.verified_OTPToken}</h1>`
         // })
         res.json({
            token:token,
            user:user
         })

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
            if (!user) {
               return next(new Error("email verification token is expired")); 
            }
            res.send(user);
            
            
            }
            catch(e){
               next(e)
            }
         }
      

         static async login(req,res,next){ 
            const user = req.user;
            const password = req.query.password;
            const encrypt_password = user.password;
            const data={password,
               encrypt_password :user.password
            }
         
         try {
            await Utils.comparePassword(data);
            const payload = {
                // user_id: user._id,
                aud: user._id,
                email: user.email
            };
            // const token = Jwt.jwtSign(payload);
            // res.json({
            //     token: token,
            //     user: user
            // });
        } catch(e) {
            next(e);
        }
    }
   }


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

      

