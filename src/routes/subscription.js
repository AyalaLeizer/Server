import express from 'express';
import { getAllSubscriptions, addSubscription, getSubscriptionById } from '../controllers/subscription.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getAllSubscriptions);
router.post('/', auth, addSubscription);
router.get('/:id', auth, getSubscriptionById);

export default router;
