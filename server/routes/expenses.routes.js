const router = require('express').Router();
const expenses = require('../data/expenses.json')



router.get('/',async(req,res,next)=>{

    res.send(expenses);

})



router.post('/',async(req,res)=>{
    res.send('new expnds');
})


router.delete('/:id',async(req,res)=>{
    res.send('delete expends  '+req.params.id);
})


router.patch('/:id',async(req,res)=>{
    res.send('patch expend  ' + req.params.id)
})


module.exports = router;