const express=require ("express");
const hbs=require("hbs");
const path=require("path");
const app=express();
require("./db/conn");
const Register=require("./models/registers") 
const port=process.env.PORT || 3000;
const static_path=path.join(__dirname, "../public");
const template_path=path.join(__dirname, "../templates/views");
const partials_path=path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//console.log(path.join(__dirname, "../public"));
app.use(express.static(static_path));
app.set("view engine","hbs")
app.set("views", template_path);
hbs.registerPartials(partials_path )

app.get("/",(req,res)=>{
res.render("index");
})

// app.get("/register",(req,res)=>{
//  res.render("register");
//     })
app.get("/index", async(req,res)=>{

try{
const password = req.body.password;
const repassword = req.body.retypepassword;
if(password === repassword)
{
const regEmp = new Register({
    firstname:req.body.firstname,
    lasttname:req.body.lasttname,
    email:req.body.email,
    gender:req.body.gender, 
    phone:req.body.phone,
    password:req.body.password,
    retypepassword:repassword

})
const registered = await regEmp.save()
res.status(201).render("index")
}else{
   res.send("password are not match") 
}

}catch(error){
res.status(400).send(error)
}
    })


app.listen(port,()=>{
 console.log(`connected successfuly at ${port}`)
})