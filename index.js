const express = require('express');

const app = express();

const env = require('dotenv').config();

const port = process.env.PORT || 3000;

const db = require("./config/db")

app.use(express.urlencoded());

app.use('/', require('./Routes/indexRoutes'))

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server start on = ${port}`);
}) 