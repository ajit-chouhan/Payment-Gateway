import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Razorpay from 'razorpay';
// require('dotenv').config();
// import {} from 'dotenv/config'
// import { isCurrency } from 'validator';
// import payments from 'razorpay/dist/types/payments';
const app = express();
const PORT = 3001;
import userrouter from './PaymentRoutes.js'

// import paymentRoutes from './PaymentRoutes.js';
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user",userrouter);

// app.use('/api', paymentRoutes);
// app.get('/', (req, res)=>{
//     res.send("hello world");
// })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
