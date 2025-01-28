
import {Router} from express ;

class UserRouter{
    public router:Router;

    constructor(){
        this.router=Router()
      
   this.getRoutes()
   this.postRoutes()

   this.putRoutes()
   this.patchRoutes()


   this.deleteRoutes()

}

    getRoutes(){
        this.router.get('/api/user',(req,res)=>{
            const data =[{name: 'tech'}]
            res.status(200).send(data)
         })
   
         this.router.get('/api/user/test',(req,res,next)=>{
            console.log("test")
            next
         },(req,res)=>{
            res.send("test")
         })
    }
    postRoutes(){}
    putRoutes(){}
    patchRoutes(){}
    deleteRoutes(){}
}

export default new UserRouter().router














