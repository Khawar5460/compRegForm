const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/formregdatabase",{

}).then(() =>{
    console.log(`connected with database`);
}).catch((e)=>{
    console.log(`not conected with database`);
})
