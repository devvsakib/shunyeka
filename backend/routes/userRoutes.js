import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export { router as userRoutes };