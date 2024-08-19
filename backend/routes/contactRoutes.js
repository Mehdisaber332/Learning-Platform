const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();
const userRoutes = require('./routes/userRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Submit Contact Form
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json(newContact);
});

app.use('/api/users', userRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/contact', contactRoutes);
module.exports = router;