const express=require("express")
const app=express();
const sql=require("./shared/connect");

// to convert req.body to json format
app.use(express.json());
const studentRouter=require("./routes/studentrouter");


// to convert req.body to json format
app.use(express.json())

sql.connect();
// console.log(sql)
app.use('/',studentRouter);

app.listen(3000,()=>{
    console.log("server running")
});