const express=require('express');
const connectDB=require('./db/connectdb');
const web=require('./routes/web');
const join=require('path');
const app=express();
const port =process.env.PORT || 4000;
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017";

//Database connection
connectDB(DATABASE_URL);

//middleware it parses incomming request with urlincoded payload and is based on body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//app.use(express.static(join(process.cwd(),"public"))); 

//set template engine
app.set("view engine","ejs");

//Load Routes
app.use('/student',web);

app.listen(port,()=>{
    console.log(`Server listning at port http://localhost:${port}`);
})