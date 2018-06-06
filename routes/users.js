var express = require('express');
var router = express.Router();
var participant = require('../models/participants.js');

/* GET users listing. */
router.get('/wegotyou',(req,res)=>{
  res.render('users');
});

router.post('/wegotyou', (req, res)=>{
  participant.find({}).select('name email contact timestamp ieeeSection emailSent invalidEmail whoMailed').sort({timestamp:-1}).exec((err,users)=>{
    if(err){
        console.log(err);
      res.send({code : 1, users : 'Something is not right :|'})
    }else{
      res.send({code : 0, users : users})
      }
  })
});

router.post('/mailedUpdate/', (req, res)=>{
    // console.log("hkjnijw");
    participant.update({email : req.body.email},{whoMailed : req.body.whoMailed},(err,data)=> {
        if(err)
            throw err;
        else
        {
            participant.find({}).select('name email contact timestamp ieeeSection emailSent invalidEmail whoMailed').sort({timestamp: -1}).exec((err, users) => {
                if(err) {
                    res.send({code: 1, users: 'Something is not right :|'})
                }else{
                    // console.log(users);
                    res.send({code: 0, users: users})
                }
            })
        }
    });
});

router.post('/update', (req, res)=>{
    participant.update({email : req.body.email},{emailSent : true},(err,data)=> {
        if(err)
            throw err;
        else
        {
            participant.find({}).select('name email contact timestamp ieeeSection emailSent invalidEmail whoMailed').sort({timestamp: -1}).exec((err, users) => {
                if(err) {
                    res.send({code: 1, users: 'Something is not right :|'})
                }else{
                    res.send({code: 0, users: users})
                }
            })
        }
    });
});

router.post('/invalidEntry', (req, res)=> {
    participant.update({email: req.body.email}, {invalidEmail: true}, (err, data) => {
    if(err)
    throw err;
else
{
    participant.find({}).select('name email contact timestamp ieeeSection emailSent invalidEmail whoMailed').sort({timestamp: -1}).exec((err, users) => {
        if(err) {
            res.send({code: 1, users: 'Something is not right :|'})
        }else{
            res.send({code: 0, users: users})
                }
            })
        }
    });
});

router.post('/resetStatus', (req, res)=>{
    participant.update({email : req.body.email},{invalidEmail : false,emailSent : false},(err,data)=> {
    if(err)
        throw err;
    else
    {
    participant.find({}).select('name email contact timestamp ieeeSection emailSent invalidEmail whoMailed').sort({timestamp: -1}).exec((err, users) => {
        if(err) {
            res.send({code: 1, users: 'Something is not right :|'})
        }else{
            res.send({code: 0, users: users})
                }
            })
        }
    });
});
module.exports = router;

