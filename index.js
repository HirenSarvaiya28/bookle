const express = require('express');

const app = express();

const port = 8000;

const db = require("./config/db")

app.use(express.urlencoded());

app.use('/', require('./Routes/indexRoutes'))

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server running on port number :- ${port}`);
}) 