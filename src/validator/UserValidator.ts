
import { Router } from "express";
import { body ,validationResult } from "express-validator";
export class UserValidator{



    static signup(){
        [
            body('name','name is required').isString(),
            body('email','email is required').isEmail(),

            body('password','name is required').isLength({min:5}),
           .custom({req}=>{
            if(req.email) return true;
            else{
                throw new Error('email is not available for validation')
            }
           })

        ]



    }
}