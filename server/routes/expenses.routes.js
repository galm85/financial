const router = require('express').Router();
// const expenses = require('../data/expenses.json')
const Expense = require ('../models/Expenses.model');


router.get('/',async(req,res,next)=>{

    const expenses = await Expense.find();
    res.send(expenses);

})



router.post('/',async(req,res)=>{
   
    try {
        const expense = new Expense(req.body)
        await expense.save();
        res.status(200).json(expense);
        
    } catch (error) {
        console.log(error);
        res.status(400).json('error',error);
    }


})


router.delete('/:id',async(req,res)=>{
    res.send('delete expends  '+req.params.id);
})


router.patch('/:id',async(req,res)=>{
    res.send('patch expend  ' + req.params.id)
})


module.exports = router;