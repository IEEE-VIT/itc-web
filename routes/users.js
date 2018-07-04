var express = require('express');
var router = express.Router();
var participant = require('../models/participants.js');

var verifyIeeeMember = (req,res,next)=>{
    var cookie = req.cookies.IEEE;
    if(cookie === undefined){
        res.send({message : 'access denied!!'})
    }else if(cookie === process.env.COOKIE_VALUE){
        next();
    }
}

/* GET users listing. */
router.get('/wegotyou',(req,res)=>{
    var cookie = req.cookies[process.env.COOKIE_NAME];
    var uname = req.cookies[process.env.USER_COOKIE];
    var unameChk = uname !== undefined && uname === process.env.USER_NAME ? 0 : 1;
    var code = cookie !== undefined && cookie === process.env.COOKIE_VALUE ? 0 : 1;
    if(code===1 || unameChk===1){
        res.render('ieeeMemCheck');
    }
    else {
        message = cookie !== undefined && cookie === process.env.COOKIE_VALUE ? 'You are a verified IEEE member, go ahead !' : 'You are not verified IEEE member, please authenticate yourself before any action.';
        res.render('users', {
            message: message,
            code: code
        });
    }
});

router.post('/wegotyou', (req, res)=>{
    var cookie = req.cookies[process.env.COOKIE_NAME];
    var uname = req.cookies[process.env.USER_COOKIE];
    var unameChk = uname !== undefined && uname === process.env.USER_NAME ? 0 : 1;
    var code = cookie !== undefined && cookie === process.env.COOKIE_VALUE ? 0 : 1;
    if(code===1 || unameChk===1){
        res.send({code : 1, users : 'Something is not right :|'})
    }
    else {
        participant.find({}).select('name email contact timestamp ieeeSection emailSent invalidEmail whoMailed institute').sort({timestamp: -1}).exec((err, users) => {
            if (err) {
                console.log(err);
                res.send({code: 1, users: 'Something is not right :|'})
            } else {
                res.send({code: 0, users: users})
            }
        });
    }
});

router.post('/mailedUpdate/',verifyIeeeMember, (req, res)=>{
    // console.log("hkjnijw");
    var cookie = req.cookies[process.env.COOKIE_NAME];
    var uname = req.cookies[process.env.USER_COOKIE];
    var unameChk = uname !== undefined && uname === process.env.USER_NAME ? 0 : 1;
    var code = cookie !== undefined && cookie === process.env.COOKIE_VALUE ? 0 : 1;
    if(code===1 || unameChk===1){
        res.send({code : 1, users : 'Something is not right :|'})
    }
    else {
        participant.update({email: req.body.email}, {whoMailed: req.body.whoMailed}, (err, data) => {
            if (err)
                throw err;
            else {
                participant.find({}).select('name email contact timestamp ieeeSection emailSent invalidEmail whoMailed institute').sort({timestamp: -1}).exec((err, users) => {
                    if (err) {
                        res.send({code: 1, users: 'Something is not right :|'})
                    } else {
                        // console.log(users);
                        res.send({code: 0, users: users})
                    }
                })
            }
        });
    }
});

router.post('/update',verifyIeeeMember, (req, res)=>{
    var cookie = req.cookies[process.env.COOKIE_NAME];
    var uname = req.cookies[process.env.USER_COOKIE];
    var unameChk = uname !== undefined && uname === process.env.USER_NAME ? 0 : 1;
    var code = cookie !== undefined && cookie === process.env.COOKIE_VALUE ? 0 : 1;
    if(code===1 || unameChk===1){
        res.send({code : 1, users : 'Something is not right :|'})
    }
    else {
        participant.update({email: req.body.email}, {emailSent: true}, (err, data) => {
            if (err)
                throw err;
            else {
                participant.find({}).select('name email contact timestamp ieeeSection emailSent invalidEmail whoMailed institute').sort({timestamp: -1}).exec((err, users) => {
                    if (err) {
                        res.send({code: 1, users: 'Something is not right :|'})
                    } else {
                        res.send({code: 0, users: users})
                    }
                })
            }
        });
    }
});

router.post('/invalidEntry',verifyIeeeMember, (req, res)=> {
    var cookie = req.cookies[process.env.COOKIE_NAME];
    var uname = req.cookies[process.env.USER_COOKIE];
    var unameChk = uname !== undefined && uname === process.env.USER_NAME ? 0 : 1;
    var code = cookie !== undefined && cookie === process.env.COOKIE_VALUE ? 0 : 1;
    if(code===1 || unameChk===1){
        res.send({code : 1, users : 'Something is not right :|'})
    }
    else {
        participant.update({email: req.body.email}, {invalidEmail: true}, (err, data) => {
            if (err)
                throw err;
            else {
                participant.find({}).select('name email contact timestamp ieeeSection emailSent invalidEmail whoMailed institute').sort({timestamp: -1}).exec((err, users) => {
                    if (err) {
                        res.send({code: 1, users: 'Something is not right :|'})
                    } else {
                        res.send({code: 0, users: users})
                    }
                });
            }
        });
    }
});

router.post('/resetStatus',verifyIeeeMember, (req, res)=>{
    var cookie = req.cookies[process.env.COOKIE_NAME];
    var uname = req.cookies[process.env.USER_COOKIE];
    var unameChk = uname !== undefined && uname === process.env.USER_NAME ? 0 : 1;
    var code = cookie !== undefined && cookie === process.env.COOKIE_VALUE ? 0 : 1;
    if(code===1 || unameChk===1){
        res.send({code : 1, users : 'Something is not right :|'})
    }
    else {
        participant.update({email: req.body.email}, {invalidEmail: false, emailSent: false}, (err, data) => {
            if (err)
                console.log(err);
            else {
                participant.find({}).select('name email contact timestamp ieeeSection emailSent invalidEmail whoMailed institute').sort({timestamp: -1}).exec((err, users) => {
                    if (err) {
                        res.send({code: 1, users: 'Something is not right :|'})
                    } else {
                        res.send({code: 0, users: users})
                    }
                })
            }
        });
    }
});

router.post('/verifyPassword', (req, res)=>{
    var cookie = req.cookies[process.env.COOKIE_NAME];
    var uname = req.cookies[process.env.USER_COOKIE];
    var unameChk = uname !== undefined && uname === process.env.USER_NAME ? 0 : 1;
    var code = cookie !== undefined && cookie === process.env.COOKIE_VALUE ? 0 : 1;
    if(code===1 || unameChk===1){
        res.send({code : 1, users : 'Something is not right :|'})
    }
    else {
        if (req.query.p === process.env.USER_PASSWORD) {
            res.cookie(process.env.COOKIE_NAME,
                process.env.COOKIE_VALUE, {
                    maxAge: 86400000 // for 1 day
                });
            res.send({code: 0, message: 'Access granted !!'});
        } else {
            res.send({code: 1, message: 'Sorry access denied!!'});
        }
    }
});

router.post('/ieeeMemCheck', (req, res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var RegExp1 = /^([a-zA-Z0-9_-]){6}$/;
    var RegExp2 = /^([a-zA-Z0-9_-]){13}$/;
    if(username===undefined || password===undefined){
        res.json({"code":0,"message":"Incorrect Parameters in Post Request"});
    }
    else if(username===''){
        res.json({"code":0,"message":"Empty Username entered"});
    }
    else if(password===''){
        res.json({"code":0,"message":"Empty Password entered"});
    }
    else if(!RegExp2.test(username)){
        res.json({"code":0,"message":"Invalid Username Entered"});
    }
    else if(!RegExp1.test(password)){
        res.json({"code":0,"message":"Invalid Password Entered"});
    }
    else if(username!==process.env.USER_NAME || password!==process.env.USER_PASSWORD){
        res.json({"code":0,"message":"Incorrect Username/Password Entered"});
    }
    else{
        res.cookie(process.env.COOKIE_NAME,
            process.env.COOKIE_VALUE, {
                maxAge: 86400000 // for 1 day
            });
        res.cookie(process.env.USER_COOKIE,
            process.env.USER_NAME,{
                maxAge: 86400000 // for 1 day
            });
        res.json({"code":1,"message":"Correct Login, you will now be redirected to the Portal"});
    }
});

module.exports = router;

