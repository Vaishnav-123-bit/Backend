import mongoose, { Schema } from 'mongoose'
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        
    },
    fullname:{
            type:String,
            required:true,
            unique:true,
            index:true,
            trim:true,
            lowercase:true
    },
    avatar:{
        type:String,  //cloudinary 
        required:true
    },
    coverImage:{
        type:String
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"password is required..."]
    },
    refreshToken:{
        type:String
    }
    
},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
    this.password=bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
    jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:ACCESS_TOKEN_EXPIRY
        }

    )
}

userSchema.methods.generateRefreshToken=function (){
    jwt.sign(
        {
            _id:this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:REFRESH_TOKEN_EXPIRY
        }

    )
}


export const User=mongoose.model("User",userSchema) 
