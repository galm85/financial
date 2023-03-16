const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4002;

// import routes
const expensesRoutes = require('./routes/expenses.routes');
const paycheckRoutes = require('./routes/paycheck.routes');




const app = express();

mongoose.connect(process.env.MONGO_URI)
        .then(console.log('Connect to mongoDB'))
        .then(app.listen(PORT,()=>console.log(`server is running on : http://localhost:${PORT}`)))
        .catch(e=>console.log('error:',e));

app.use(express.json());
app.use(cors());

app.use('/expenses',expensesRoutes)
app.use('/paycheck',paycheckRoutes)





// app.listen(4000,()=>console.log('server is running'));