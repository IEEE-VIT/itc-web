var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
let Captcha = require('node-captcha-generator');

var participant = require('../models/participants.js');
var cookieData = require('../models/cookies.js');

var check = require('../utilities/regex');
var nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

function countWords(value){
    return((value.split(" ").length)<=200);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Itinerary page. */
router.get('/itinerary', function(req, res, next) {
    res.render('itinerary');
});

router.get('/register', function(req, res, next) {
    res.render('regClosed');
    // var c = new Captcha({
    //     length:5, // number length
    //     size:{    // output size
    //         width: 450,
    //         height: 200
    //     }
    // });
    //
    // console.log(req.cookies['name']);
    // if(req.headers['x-forwarded-for']) {
    //     var ip = req.headers['x-forwarded-for'].split(',').pop();
    // }
    // else if(req.connection.remoteAddress){
    //     var ip = req.connection.remoteAddress;
    // }
    // else if(req.socket.remoteAddress){
    //     var ip = req.socket.remoteAddress
    // }
    // else if(req.connection.socket.remoteAddress){
    //     var ip = req.connection.socket.remoteAddress;
    // }
    // console.log(ip);
    //
    // cookieData.find({ip: ip.toString()}).sort({timestamp:1}).exec(function (err, user) {
    //     if (user.length>100) {
    //         console.log(user);
    //         console.log("Length Exceeded for IP: ",user[1].ip);
    //         var delKey = user[0].name;
    //         cookieData.deleteOne({name:delKey}, function (err, delCookie) {
    //             if(err)
    //                 throw err;
    //             else{
    //                 console.log("Entry deleted (name = ): " + delKey);
    //             }
    //         });
    //     }
    // });
    // cookieData.deleteOne({name: req.cookies['name']}, function (err, user) {
    //     if (err) {
    //         throw(err);
    //     }
    // });
    //
    // var rString = randomString(20, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    //
    // // string value of captcha
    // //console.log(c.value);
    // console.log(rString+"fkefkwb");
    // var data = new cookieData({ name : rString,
    //     captchaVal : c.value.toString(),
    //     ip : ip.toString(),
    //     timestamp:Date.now()
    // });
    // data.save(function(err,done){
    //     if(err){
    //         throw err;
    //     }else{
    //         //To handle error when rString generated exists in the DB
    //         if (err && err.code == 11000) {
    //             res.json({code: 1, message: 'Duplicate Entry'});
    //         }
    //         else if (err && err.code != 66) {
    //             res.json({code: 1, message: 'Something went wrong'});
    //         }else{
    //             res.clearCookie('name');
    //             c.toBase64(function(err, base64){
    //                 res.cookie('name',rString).render('regform',{captcha:base64});
    //             });
    //         }
    //     }
    // });
});

// CLOSING REGS -- COMMENTING

// router.get('/imageGen', function(req, res, next) {
//     var c = new Captcha({
//         length:5, // number length
//         size:{    // output size
//             width: 450,
//             height: 200
//         }
//     });
//
//     c.toBase64(function(err, base64){
//         base64Data  =   base64.replace(/^data:image\/png;base64,/, "");
//         base64Data  +=  base64Data.replace('+', ' ');
//         binaryData  =   new Buffer(base64Data, 'base64').toString('binary');
//         cookieData.findOneAndUpdate({name: req.cookies['name']}, {captchaVal:c.value.toString()}, function (err, user1) {
//             if(err){
//                 console.log("Captcha Error");
//                 console.log(err);
//             }
//             else{
//                 res.contentType('image/png');
//                 console.log("Captcha value of Cookie "+req.cookies['name']+" has been changed to "+c.value.toString());
//                 res.end(binaryData,'binary');
//             }
//         });
//     });
// });
//
// router.post('/register', function(req, res, next) {
//     var success = true;
//     var ieeeMemberChoices = ["true","false"];
//     var sessionOptions = ["C","IC","MC","AC"];
//     errors = [];
//     console.log(req.body);
//     if (!req.body.name || req.body.name === "" || req.body.name.length > 100) {
//         // errors.push('Invalid Name');
//         errors.push({
//             error : true,
//             message: 'Name cannot be empty or greater than 40 characters'
//         });
//         success = false;
//     }else if(!check.reg_no.test(req.body.name)){
//         errors.push({
//             error : true,
//             message: 'Invalid characters in your name'
//         });
//         success = false;
//     }else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if (!req.body.email || req.body.email === ""){
//         errors.push({
//             error : true,
//             message: 'Email cannot be empty'
//         });
//         success = false;
//     }else if(req.body.email.length > 35 || req.body.email.includes('darkweb.com' || !check.email.test(req.body.email))
//     ) {
//         errors.push({
//             error : true,
//             message: 'Please provide a valid email ID'
//         });
//         success = false;
//     }else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if (!req.body.institute || req.body.institute === "" || !check.reg_no.test(req.body.institute)) {
//         errors.push({
//             error : true,
//             message: 'Your University/College name seems to contain invalid characters. Please use only letters and spaces. Avoid using abbreviation.'
//         });
//         success = false;
//     }else if(req.body.institute && req.body.institute.length>100){
//         errors.push({
//             error : true,
//             message: 'Restrict Institute Name to 100 Characters'
//         });
//         success = false;
//     }
//     else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if (!req.body.contact || req.body.contact === "" || !check.phone.test(req.body.contact)) {
//         errors.push({
//             error : true,
//             message: 'Invalid contact details. Please use only digits.'
//         });
//         success = false;
//     }else if(req.body.contact && req.body.contact.length>20){
//         errors.push({
//             error : true,
//             message: 'Restrict Phone Number to 20 Characters'
//         });
//         success = false;
//     }
//     else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if(!req.body.dorm || !isInArray(req.body.dorm, ieeeMemberChoices)){
//         errors.push({
//             error : true,
//             message: 'Please specify your preferred accommodation.'
//         });
//         success = false;
//     }else{
//         errors.push({
//             code: 0,
//             error : false,
//             message: ''
//         });
//     }
//
//     if(!req.body.ieeeMember || !ieeeMemberChoices.includes(req.body.ieeeMember)){
//         errors.push({
//             error : true,
//             message: 'Please specify if you are an IEEE Member or not.'
//         });
//         success = false;
//     }else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if (req.body.ieeeMember === "true" && (!req.body.ieeeSection || req.body.ieeeSection === '' || req.body.ieeeSection === null)) {
//         errors.push({
//             error : true,
//             message: 'IEEE Section cannot be empty. Please specify the region (say Madras section)'
//         });
//         success = false;
//     }else if(req.body.ieeeMember === "true" && !check.reg_no.test(req.body.ieeeSection)) {
//         errors.push({
//             error : true,
//             message: 'Invalid IEEE Section. Please specify the region (say Madras section)'
//         });
//         success = false;
//     }else if(req.body.ieeeMember === "true" && req.body.ieeeSection.length>100){
//         errors.push({
//             error : true,
//             message: 'Please restrict to 100 Characters'
//         });
//         success = false;
//     }
//     else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if (req.body.ieeeMember === "true" && (!req.body.ieeeMemberNumber || req.body.ieeeMemberNumber === '' || req.body.ieeeMemberNumber === null)){
//         errors.push({
//             error : true,
//             message: 'IEEE Membership number can\'t be empty'
//         });
//         success = false;
//     } else if(req.body.ieeeMember === "true" && !check.reg_no.test(req.body.ieeeMemberNumber)) {
//         errors.push({
//             error : true,
//             message: 'IEEE Membership number must contain only digits'
//         });
//         success = false;
//     }else if(req.body.ieeeMember === "true" && req.body.ieeeMemberNumber.length>25) {
//         errors.push({
//             error : true,
//             message: 'Please restrict to 25 characters'
//         });
//         success = false;
//     }
//     else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if(req.body.ieeeEventsExperience && !countWords(req.body.ieeeEventsExperience)){
//         errors.push({
//             error : true,
//             message : "We are eager to know of your engagements with IEEE but please limit yourself to 200 words"
//         })
//         success = false;
//     }else if(req.body.ieeeEventsExperience && !check.englishText.test(req.body.ieeeEventsExperience)){
//         errors.push({
//             error : true,
//             message : "Only alphanumeric and  _ @ . \" \' ( ) / #  & , /  -  characters are allowed"
//         })
//         success = false;
//     }
//     else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if(!req.body.sessionC || req.body.sessionC === "empty" || !sessionOptions.includes(req.body.sessionC)){
//         errors.push({
//             error : true,
//             message : "Please specify which event you would like to attend."
//         })
//         success = false;
//     }else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if (!req.body.generalQueOne) {
//         // errors.push('Invalid Answer');
//         errors.push({
//             error : true,
//             message: 'Please answer this'
//         });
//         success = false;
//     }else if(!countWords(req.body.generalQueOne)){
//         errors.push({
//             error : true,
//             message: 'Only 200 words are allowed'
//         });
//         success = false;
//     }else if(!check.englishText.test(req.body.generalQueOne)) {
//         errors.push({
//             error: true,
//             message: "Only alphanumeric and  _ @ . \" \' ( ) / #  & , /  -  characters are allowed"
//         });
//         success = false;
//     }else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if (!req.body.generalQueTwo) {
//         // errors.push('Invalid Answer');
//         errors.push({
//             error : true,
//             message: 'Please answer this'
//         });
//         success = false;
//     }else if(!check.englishText.test(req.body.generalQueTwo)){
//         errors.push({
//             error : true,
//             message: "Only alphanumeric and _ @ . \" \' ( ) / #  & , /  -  characters are allowed"
//         });
//         success = false;
//     }else if(!countWords(req.body.generalQueTwo)){
//         errors.push({
//             error : true,
//             message: 'Only 200 words are allowed'
//         });
//         success = false;
//     }else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     if (!req.body.captcha || req.body.captcha.length !==5) {
//         // errors.push('Invalid Captcha Input');
//         errors.push({
//             error : true,
//             message: 'Invalid Captcha Input'
//         });
//         success = false;
//     }else{
//         errors.push({
//             error : false,
//             message: ''
//         });
//     }
//
//     console.log(req.body.captcha.length);
//     if(success){
//         var captchaVal = req.body.captcha;
//         var cookieName = req.cookies['name'];
//         console.log(req.cookies);
//         cookieData.findOne({name: cookieName}, function (err1, user) {
//             if (!user) {
//                 console.log("Invalid Cookie");
//                 res.json({code:1, errors : errors, message:"Session Time Out, please refresh the page"});
//             }
//             else {
//                 console.log(user.captchaVal);
//                 if (user.captchaVal === captchaVal) {
//                     console.log("Correct Captcha");
//                     var data = new participant(req.body);
//                     data.save(function(err,done){
//                         console.log("Error if any: ");
//                         console.log(err);
//                         if (err && err.code == 11000) {
//                             res.json({code: 1, errors : errors, message: 'It seems you have already registered. Please check your mailbox, we have sent you a mail.\n If mail is not found, please use a different email ID to register.'})
//                         }
//                         else if (err && err.code != 66) {
//                             res.json({code: 1, errors : errors, message: 'Something went wrong. Please try again !'});
//                         }else {
//                             res.json({code: 0,errors : errors, message: 'Valid data, saving to database'});
//                             cookieData.deleteOne({name: cookieName}, function (err2, user2) {
//                                 console.log("Deleting Cookie" + cookieName);
//                                 if(err)
//                                     console.log(err);
//                             });
//                                 //res.redirect(success);
//                             //Send Email using Nodemailer
//                             // var transporter = nodemailer.createTransport({
//                             //     service: 'gmail',
//                             //     auth: {
//                             //         user: process.env.EMAIL_ID,
//                             //         pass: process.env.EMAIL_PASSWORD
//                             //     }
//                             // });
//                             //
//                             // var mailOptions = {
//                             //     from: '"IEEE-VIT" '+process.env.EMAIL_ID,
//                             //     to: req.body.email,
//                             //     subject: "Congratulations! You\'ve successfully registered for ITC 2018",
//                             //     text: "Dear "+req.body.name+", "+"\n\n"+"You have successfully registered for ITC 2018!\n\nYour application will be followed by a simple screening process, post which the payment link will be provided in a couple of weeks' time.\n\nThank you again for your application.If you have any queries, please let contact the undersigned.\n\nRegards,\nIEEE-VIT\nFacebook: https://www.facebook.com/itcvit2018/"
//                             // };
//                             // transporter.sendMail(mailOptions, function (err, info) {
//                             //     if (err) {
//                             //         console.log(err);
//                             //         res.json({code: 1, message: "Failed !\n Something went wrong!\n Please try again."});
//                             //     }
//                             //     else {
//                             //         res.json({code: 0, message: "Success! \nWe have sent you an email with further details. Please check spam, if not found."});
//                             //     }
//                             // });
//                         }
//                     });
//                 }
//                 else{
//                     console.log("Incorrect captcha");
//                     res.json({code:1, errors : errors, message:"Incorrect Captcha Input"});
//                 }
//             }
//         });
//     }else {
//         res.json({
//             errors : errors,
//             code : 1,
//             message : "Please check the invalid entries and submit again."
//         })
//     }
// });
//
// router.get('/success', function(req, res, next) {
//    res.render('regsuccess');
// });


router.get('/itc_brochure.pdf', function(req, res, next) {
    var tempFile= path.dirname(require.main.filename).toString() + "/ITC_Brochure.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

router.get('/iot_componentsList.pdf', function(req, res, next) {
    var tempFile= path.dirname(require.main.filename).toString() + "/IOT_components.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

module.exports = router;
