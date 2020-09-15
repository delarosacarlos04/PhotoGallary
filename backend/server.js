const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true });

console.log("")
console.log("")

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
})


const imagesRouter = require('./routes/images');
const usersRouter = require('./routes/users');

app.use('/images', imagesRouter);
app.use('/users', usersRouter);
app.use(express.static('uploads'));






app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});