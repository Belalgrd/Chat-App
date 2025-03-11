const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/messages', chatController.getChatMessages);
router.post('/message', chatController.postChatMessage);

module.exports = router;
