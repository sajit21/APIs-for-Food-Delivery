
import * as express from "express";
import * as mongoose from "mongoose"
import { getEnvironmanetVariables } from "./environments/environment";
import * as bodyParser from "body-parser"
import * as cors from "cors"
import UserRoutes from "./routers/UserRoutes";


export class Server{

   public app: express.Application=express();
   constructor(){
      this.setConfig()
      this.setRoutes()
      this.errorhandler() 
      this.handleErrors() //call this function when error occur while url hit
   }

   setConfig(){
      this.connectMongoDB()
      this.allowCors()
      this.configureBodyParser()
   }

   connectMongoDB(){
      //connect to mongodb
mongoose.connect(getEnvironmanetVariables().db_uri)
.then(()=>{
    console.log("connected to the database")

})
   }

   configureBodyParser(){
      this.app.use(bodyParser.urlencoded({extended:true})) //we can parse any data like string, object, array ...anything

   }

   allowCors(){
      this.app.use(cors())
   }

   setRoutes(){
      this.app.use('/api/user',UserRoutes)
    }

    errorhandler(){
      this.app.use((req,res)=>{
         res.status(404).json({
            message: "server not found",
            status: 404
         })
      })
    }

    handleErrors(){
      this.app.use((error,req,res,next)=>
         {
         const errorStatus =req.errorStatus || 500 
         res.status(errorStatus).json
         ({
            message: error.message || "something went wrong",
            status: errorStatus

       
         })
         })}
      }