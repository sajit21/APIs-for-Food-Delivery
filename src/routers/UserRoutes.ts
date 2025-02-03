
import  {Router} from "express" ;
import { UserController } from "../controllers/Usercontroller";
 import { UserValidator } from "../validator/UserValidator";
import { GlobalMiddleWare } from "../middleware/GlobalMiddleWare";
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
        // this.router.get('/send/verification/email',UserValidator.verifyUserForResendEmail(),GlobalMiddleWare.checkError,UserController.resendVerificationEmail)
        this.router.get('/login',UserValidator.login(),GlobalMiddleWare.checkError,UserController.login)

   
        //  this.router.get('/test',UserController.test1,UserController.test2)
    }
    postRoutes(){
        this.router.post('/signup',UserValidator.signup(),GlobalMiddleWare.checkError,UserController.signup)

    }

    putRoutes(){}
    patchRoutes(){
        this.router.patch('/verify',UserValidator.verifyEmail(),GlobalMiddleWare.checkError,UserController.verify)


    }
    deleteRoutes(){}
}

export default new UserRouter().router














