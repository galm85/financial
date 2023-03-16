const mongoose = require('mongoose');


const expenseSchema = new mongoose.Schema({
    title:{type:String,required:true},
    date:{type:String,required:true},
    sum:{type:Number,required:true}
},{timestamps:true});



const Expense = mongoose.model('Expense',expenseSchema);

module.exports = Expense;



