export class UserController{


     static login(req,res,next){
       
            // const data =[{name: 'tech'}]
            // res.status(200).send(data)
            // const error=new Error('user email or password does not match')
            // next(error)
         res.send(req.body)
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
