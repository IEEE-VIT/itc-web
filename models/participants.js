var mongoose=require("mongoose");
var bcrypt      = require('bcrypt-nodejs');

var participantSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true},
    name : {type:String,required:true},
    email : {type : String,required : true,lowercase :true, unique:true},
    contact : {type: String},
    institute : {type : String,lowercase :true},
    dorm : {type : Boolean, default : false},
    ieeeSection : {type : String, lowercase : true},
    ieeeMemberNumber : {type : String, lowercase : true},
    ieeeEventsExperience : {type : String, lowercase : true},
    sessionC : {type : String, default : "empty"},
    generalQueOne : {type : String, lowercase : true},
    generalQueTwo : {type : String, lowercase : true},
    timestamp: {type:Date, default:Date.now},
    emailSent : {type : Boolean, default : false},
    invalidEmail : { type : Boolean, default : false },
    whoMailed: { type : String}
});
var participant = mongoose.model("participants",participantSchema);

module.exports = participant;
