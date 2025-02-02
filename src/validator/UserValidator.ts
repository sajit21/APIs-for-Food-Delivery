
// import { Router } from "express";
import { body ,validationResult } from "express-validator";


export class UserValidator{
 static signup()
    {
       return  [
            body('name','name is required').isString(),
            body('password','password is required').isAlphanumeric().isLength({min:5,max:25}).withMessage('password must be between 8-20 character'),
            body('email','email is required').isEmail(),
            body('type','user type is required').isString(),
            body('status','user status is required').isString()
        //     .custom((value, {req})=>{
        //     if(req.body.email) return true;
        //     else{
        //         throw new Error('email is not available for validation')
        //     }
        //    })

        ]
      }

      static verifyEmail()
      {
         return  [
             body('verified_OTPToken','email verification token is required').isNumeric(),
              body('email','email is required').isEmail(),
             
         
  
          ]
        }
}