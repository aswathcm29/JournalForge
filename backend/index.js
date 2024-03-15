const express = require('express')
const cors = require('cors') 
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser())
const saltRounds = 10;
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
})

app.use('/users', userRoutes);

try{
    const connect = async() =>{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("db connected")   
    }
    connect();
}
catch(err){
    console.log(err.message)
}