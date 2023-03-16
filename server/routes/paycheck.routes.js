const router = require('express').Router();
const paycheck = require('../data/paycheck.json');



router.get('/',async(req,res,next)=>{
    // console.log(paycheck)
    res.send(paycheck);
    // res.send('get my paycheck');
    next();
})



router.post('/',async(req,res)=>{
    res.send('inset paychek');
})


router.delete('/:id',async(req,res)=>{
    res.send('delete paychecl  '+req.params.id);
})


router.patch('/:id',async(req,res)=>{
    res.send('update paychaeck  ' + req.params.id)
})


module.exports = router;