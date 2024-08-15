require('dotenv').config()
const express = require('express')
const app = express();

const port = process.env.PORT || 4001;

app.get('/', (req,res) => {
    res.send('Hey Express, this is my first express project here.')
})

app.listen(port, ()=> {
    console.log('App is running nd listening on port', port)
})