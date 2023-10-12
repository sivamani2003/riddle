import mongoose from "mongoose";
const Schema =  mongoose.Schema
const userSchema = new Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    application_number:{
        type:String,
        require:true,
        unique:true,
    }
})
export default mongoose.model("User",userSchema);