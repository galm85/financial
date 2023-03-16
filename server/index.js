const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();


// import routes
const expensesRoutes = require('./routes/expenses.routes');
const paycheckRoutes = require('./routes/paycheck.routes');


const app = express();


app.use(express.json());
app.use(cors());

app.use('/expenses',expensesRoutes)
app.use('/paycheck',paycheckRoutes)





app.listen(4000,()=>console.log('server is running'));