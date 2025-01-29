import * as mongoose from  "mongoose"
import {model} from 'mongoose'

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true
    }
})

export default model('user',userSchema) //-> in ts


// const User= mongoose.model(User,userSchema)
// export default User    ---> in node part
