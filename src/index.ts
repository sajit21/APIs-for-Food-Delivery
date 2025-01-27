import * as express from "express";
import * as mongoose from "mongoose"
import { getEnvironmanetVariables } from "./environments/environment.js";
let app: express.Application=express();

app.listen(3000,()=>{
    console.log("port numbe")
})

//connect to mongodb
mongoose.connect(getEnvironmanetVariables().db_uri)
.then(()=>{
    console.log("connected to the database")

})
//use of promise with then catch and use of async await
function getMathbook(){
    return true
}

function getsciencebook(){
    return false
}

function result(): Promise<string>{
    return new Promise((resolve,reject)=>
        {
        setTimeout(()=>{
        if(getMathbook()){
            console.log("math book found")
        }
       else if(getsciencebook())
        {
            console.log("get science book")
        }
        else{
            console.log("both book not found")
        }
    },2000)
   })
}

//use of then catch
// result().then(response=>{
//     console.log(response)
// })
// .catch(error=>{
//     console.log(error)
// })


//use of async and await
async function result1(){
    try{
        const response1 = await result();
        console.log(response1)
    }
    catch(error){
        console.log(error)
    }
}
result()


