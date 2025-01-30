
import  {Router} from "express" ;
import { UserController } from "../controllers/Usercontroller";
 import { UserValidator } from "../validator/UserValidator";
class UserRouter{
    public router:Router;

constructor()
{
   this.router=Router()
   this.getRoutes()
   this.postRoutes()
   this.putRoutes()
   this.patchRoutes()
   this.deleteRoutes()

}

    getRoutes(){
        this.router.post('/signup',UserValidator.signup(),UserController.signup)
     
   
         this.router.get('/test',UserController.test1,UserController.test2)
    }
    postRoutes(){}
    putRoutes(){}
    patchRoutes(){}
    deleteRoutes(){}
}

export default new UserRouter().router














