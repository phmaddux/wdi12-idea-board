require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise=global.promise
const app = express();
const bodyParser = require('body-parser')

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Successfully connected to MongoDB')
})
connection.on('error', (err) => {
    console.log('MongoDB Error')
})

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res .send("Hello World")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})