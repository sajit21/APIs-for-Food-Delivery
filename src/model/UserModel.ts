import * as mongoose from  "mongoose"
import {model} from 'mongoose'

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
    ,
    status:{
        type:String,
        required:true
    },
    created_at:{
        type:String,
        required:true,
        default: new Date()
    },
    updated_at:{
        type:String,
        required: true,
        default: new Date()
    }
   
})

export default model('user',userSchema) //-> in ts


// const User= mongoose.model(User,userSchema)
// export default User    ---> in node part
