import Subscription from '../models/subscription.js';

export const getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find().populate('memberId').populate('movieId');
        res.status(200).json({ message: "Subscriptions fetched successfully", data: subscriptions });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const addSubscription = async (req, res) => {
    const { memberId, movieId, date } = req.body;
    try {
        const subscription = await Subscription.create({ memberId, movieId, date });
        res.status(201).json({ message: "Subscription added successfully", subscription });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getSubscriptionById = async (req, res) => {
    const { id } = req.params;
    try {
        const subscription = await Subscription.findById(id).populate('memberId').populate('movieId');
        if (!subscription) return res.status(404).json({ message: "Subscription not found" });
        res.status(200).json({ message: "Subscription fetched successfully", subscription });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
