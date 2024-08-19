const express = require('express');
const Lesson = require('../models/Lesson');
const router = express.Router();

// Get All Lessons
router.get('/', async (req, res) => {
    const lessons = await Lesson.find();
    res.json(lessons);
});

// Create Lesson
router.post('/', async (req, res) => {
    const { title, description, content } = req.body;
    const newLesson = new Lesson({ title, description, content });
    await newLesson.save();
    res.status(201).json(newLesson);
});

module.exports = router;