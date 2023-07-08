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

// Get user by ID
router.get('/:user_id', async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update user by ID
router.put('/:user_id', async (req, res) => {
    try {
        const updatedInfo = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.user_id,
            updatedInfo,
            { new: true }
        );
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export { router as userRoutes };