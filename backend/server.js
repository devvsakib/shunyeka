// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

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
