
import * as express from "express";
import * as mongoose from "mongoose"
import { getEnvironmanetVariables } from "./environments/environment";

import UserRoutes from "./routers/UserRoutes";


export class Server{

   public app: express.Application=express();
   constructor(){
      this.setConfig()
      this.setRoutes()
   }

   setConfig(){
      this.connectMongoDB()
   }

   connectMongoDB(){
      //connect to mongodb
mongoose.connect(getEnvironmanetVariables().db_uri)
.then(()=>{
    console.log("connected to the database")

})
   }

   setRoutes(){}
   

   UserRoutes(){

      this.app.use('/api/user/',UserRoutes.Router())
     

   }







}