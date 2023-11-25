const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  firstName : {type:String},
  lastName : {type:String},
  gender : {type:String},
  dateOfBirth : {type:String},
  nationality : {type:String},
  address : {type:String},
  email : {type:String},
  phone : {type:String},
  admissionDate : {type:String},
  courses : {type:String}
},
{
    versionKey:false,
    timestumps:true 
});

const StudentModel = mongoose.model("students" , StudentSchema);
module.exports = StudentModel ;