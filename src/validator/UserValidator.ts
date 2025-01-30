
// import { Router } from "express";
import { body ,validationResult } from "express-validator";


export class UserValidator{
 static signup()
    {
       return  [
            body('name','name is required').isString(),
            body('password','password is required').isLength({min:5}),
            body('email','email is required').isEmail()
            .custom((value, {req})=>{
            if(req.body.email) return true;
            else{
                throw new Error('email is not available for validation')
            }
           })

        ]
      }
}