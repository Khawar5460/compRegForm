const mongoose=require("mongoose")

const empSchema=new mongoose.Schema({
      firstname:{
          type:String,
          require:true
      },
      lasttname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    gender:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true,
        unique:true

    },
    password:{
        type:String,
        require:true
    },
    retypepassword:{
        type:String,
        require:true
    }
})
const Register=new mongoose.model("Register",empSchema);
module.exports=Register;