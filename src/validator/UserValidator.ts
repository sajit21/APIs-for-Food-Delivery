
// import { Router } from "express";
import { query } from "express-validator";
import { body ,validationResult } from "express-validator";
import User from '../model/UserModel'

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
      

        // static verifyUserForResendEmail(){
        //   return [query('email','Email is required').isEmail()]
        // }

        static login() {
          return [
              query('email', 'Email is required').isEmail()
              .custom((email, {req}) => {
                  return User.findOne({
                      email: email
                  }).then(user => {
                      if (user) {
                          req.user = user;
                          return true;
                      } else {
                          // throw new Error('No User Registered with such Email');
                          throw('No User Registered with such Email');
                      }
                  }).catch(e => {
                      throw new Error(e);
                  })
              }),
              query('password', 'Password is required').isAlphanumeric()
          ];
      }
  
}