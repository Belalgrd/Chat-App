
exports.getChatMessages = (req, res) => {
  res.json([]);
};

exports.postChatMessage = (req, res) => {
  const { sender, message } = req.body;
  console.log('Received message:', message);

  const userMessage = { sender, message, timestamp: new Date() };

  const responses = [
    "That's interesting!",
    "Can you tell me more?",
    "I'm not sure about that.",
    "How does that make you feel?",
    "I see, please continue."
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  const simulatedResponse = responses[randomIndex];
  console.log('Simulated response:', simulatedResponse);

  const botMessage = { sender: 'bot', message: simulatedResponse, timestamp: new Date() };

  res.status(201).json({ userMessage, botMessage });
};
