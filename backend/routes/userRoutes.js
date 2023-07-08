import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create a new user
router.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        const user = await new User(newUser).save();
        
        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export { router as userRoutes };