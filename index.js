const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wcadmin:wcadmin@basic.wkn0n.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB Connectied!!...'))
    .catch(err => console.log(err))
//.then  -> 문장안에 성공하면 ~
//.catch ->  에러 ~

app.get('/', (req,res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on part ${port}`))
