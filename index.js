const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./models/User");

//application/x-www-form-urlencoded 타입 분석
app.use(bodyParser.urlencoded({extended: true}))
//application/json 타입 분석
app.use(bodyParser.json());

//DB연결
const mongoose = require('mongoose')
//'깃주소' 부분 mongoDB URL 입력해야함. 깃 업로드 전 꼭 지우고 업로드.
mongoose.connect('깃주소')
    .then(() => console.log('MongoDB Connectied!!...'))
    .catch(err => console.log(err))
//.then  -> 문장안에 성공하면 ~
//.catch ->  에러 ~

app.get('/', (req,res) => res.send('Hello World!'))


//회원가입을 위한 ROUTER
app.post('/register',(req, res) => {
    //회원가입 정보들 Client -> DB 저장
    const user = new User(req.body)
    //.save는 mongoose명령어, userInfo 는 user에서 나오는 정보들임. 따로 지정은 안했음.
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})


app.listen(port, () => console.log(`Example app listening on part ${port}`))
