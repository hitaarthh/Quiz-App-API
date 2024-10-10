const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const auth = require('../middleware/auth');

// Create a new quiz
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const quiz = new Quiz({
      title,
      description,
      questions,
      createdBy: req.user.userId,
    });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all quizzes
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find().select('title description');
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get quiz details
router.get('/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Take a quiz
router.post('/:id/take', auth, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    const userAnswers = req.body.answers;
    const results = quiz.questions.map((question, index) => ({
      question: question.question,
      userAnswer: userAnswers[index],
      correctAnswer: question.correctAnswer,
      isCorrect: userAnswers[index] === question.correctAnswer,
    }));
    const score = results.filter(r => r.isCorrect).length;
    res.json({ score, totalQuestions: quiz.questions.length, results });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;