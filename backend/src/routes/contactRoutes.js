const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Create a new contact message
router.post('/messages', contactController.create);

// Get all contact messages
router.get('/messages', contactController.getAll);

// Update contact message status
router.patch('/messages/:id/status', contactController.updateStatus);

module.exports = router;
