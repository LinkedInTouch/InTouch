const express = require('express');
const router = express.Router();

const databaseController = require('../controllers/databaseController');

const router = express.Router();

// when sending a request to apiDatabase endpoint, find the user, then get the connections, 
router.get('/:user_id',
  databaseController.findUser,
  databaseController.getConnections,
  (req, res) => res.status(200).json(res.locals)
);

module.exports = router; 
