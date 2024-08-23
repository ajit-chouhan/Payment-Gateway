import express from 'express';
var router = express.Router();

import * as Usercontroller from './PaymentController.js';
router.post("/",Usercontroller.save);
router.get("/payment/:paymentId",Usercontroller.fetch);
export default router;