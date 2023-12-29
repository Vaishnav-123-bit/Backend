import mongoose from "mongoose";
import {DB_name} from '../constants.js'
const connectDB=async()=>{
    try{
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
       console.log(`Mongo db Connected DB HOST : ${connectionInstance.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

export default connectDB