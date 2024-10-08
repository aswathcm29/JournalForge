const express = require('express')
const cors = require('cors') 
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const journalRoutes = require('./routes/journalRoutes');
const multer  = require('multer')




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

app.get('/',(req, res)=>{
    res.status(200).json("hello world")
})


app.use('/uploads',express.static('uploads'))
const express = require('express');
const { journalModel } = require('./models/journalModel'); // Assuming your journal model is in this path
const { userModel } = require('./models/userModel');
const router = express.Router();

// Route to get the count of journals for a user
router.get('/streak/:userName', async (req, res) => {
  try {
    const { userName } = req.params;
    
    // Count the number of journals for the user
    const journalCount = await journalModel.countDocuments({ userName });
    
    res.status(200).json({ count: journalCount });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch journal count' });
  }
});

module.exports = router;

app.use('/users', userRoutes);
app.use('/journal', journalRoutes);



