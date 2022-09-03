const mongoose = require('mongoose')

const subjectSchema = mongoose.Schema({
    
    subjectName:{type:String,require:true},
    subjectCode:{type:String,require:true,unique:true},
    amountCredits:{type:Number,require:true},
    amountHours:{type:Number,require:true}
});

module.exports = mongoose.model('SubjectCollection',subjectSchema);