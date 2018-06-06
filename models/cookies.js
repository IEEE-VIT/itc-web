var mongoose=require("mongoose");
var bcrypt      = require('bcrypt-nodejs');

var cookieSchema = new mongoose.Schema({
    name : {type:String,required:true},
    captchaVal : {type:String,required:true},
    ip : {type:String},
    timestamp: {type:Date,default:Date.now}
});
var cookieData = mongoose.model("cookies",cookieSchema);

module.exports = cookieData;