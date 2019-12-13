import express from 'express';
const app = express();
var cors = require('cors')

app.use(cors())
import mongoose from './config/database'




app.listen(process.env.PORT || 3002,()=>{
    console.log("server is connected")
})


app.get("/get",(req:express.Request,res:express.Response)=>{
    res.send({message:"server is getting"})
})


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(express.json());
app.use("/",require("./Todo"))