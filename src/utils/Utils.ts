

import * as Bcrypt from "bcrypt"
import { UserController } from "../controllers/Usercontroller";
export class Utils{
  public verified_OTPDate= 5 * 60 * 1000
    static GenerateOTp(digit:number=6){
        const digits='0123456789'
        let OTP='';
        for(let i=0;i<digit;i++)
        {
        OTP+=Math.floor(Math.random() * 10)
        }
        return parseInt(OTP)
    }
   
    static encryptPassword(password){
      return new Promise((resolve,reject)=>{
         Bcrypt.hash(password,10,(err,hash)=>{
      
      if(err){
         reject(err)
   
      }
   else{
      resolve(hash)
   
       }
   })
     })
   }

   // static comparePassword(data: {password :string, encrypt_password: string}): Promise<any>{
   //    return new Promise((resolve,reject)=>{
   //       Bcrypt.compare(data.password,data.encrypt_password,(err,same)=>{
      
   //    if(err){
   //       reject(err)
   
   //    }else if(!same){
   //       reject (new Error('user and password not match'))
   //    }
   //   else{
   //    resolve(true)
   
   //        }
   //       })
   //   })
   // }  -> can be done in this way

   
    static async comparePassword(data: { password: string; encrypt_password: string }): Promise<boolean> {
     const same = await Bcrypt.compare(data.password, data.encrypt_password);
     if (!same) throw new Error('User and password do not match');
     return true;   
}
}

