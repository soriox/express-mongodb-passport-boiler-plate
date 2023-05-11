const express = require('express');
const router = express.Router();

// API
router.get('/', async (req, res) => {
    res.send({
      name: 'Firefly API',
      version: '1.0.0',
      description: 'This is a basic API that provides some sample endpoints',
      website: 'https://www.fireflycms.com',
    })
});

module.exports = router;