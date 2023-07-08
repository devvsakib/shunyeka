import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { userRoutes } from './routes/userRoutes.js';
dotenv.config();

const app = express();
const port = process.env.PORT | 3000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// mongo connection
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.MONGO_URI, options)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

// routes for users
app.use('/users', userRoutes);

// Welcome message
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Users API Working Fine!',
        serverState: 'Running'
    });
});
app.get('*', (req, res) => {
    res.status(404).json({
        message: 'OOPS! Wrong API Route',
        serverState: 'Running'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
