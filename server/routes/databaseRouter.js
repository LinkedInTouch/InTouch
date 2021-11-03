const express = require('express');
const router = express.Router();

const databaseController = require('../controllers/databaseController');

router.get('/',
  (req, res) => res.status(200).send('hello')
);

// when sending a request to apiDatabase endpoint, find the user, then get the connections, 
// expect locals object with keys: userData (object), connections (array of objects) 
router.get('/:user_id',
  databaseController.findUser,
  databaseController.getConnections,
  (req, res) => res.status(200).json(res.locals)
);

module.exports = router; 
