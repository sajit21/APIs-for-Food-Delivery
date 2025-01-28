export class UserController{


     static login(req,res){
       
            const data =[{name: 'tech'}]
            res.status(200).send(data)
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
