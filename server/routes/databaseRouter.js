const express = require('express');
const router = express.Router();

const databaseController = require('../controllers/databaseController');

// when sending a request to apiDatabase endpoint, find the user, then get the connections, 
// expect locals object with keys: userData (object), connections (array of objects), groups (array of objects) 
router.get('/:user_id',
  databaseController.findUser,
  databaseController.getConnections,
  databaseController.getGroups,
  (req, res) => res.status(200).json(res.locals)
);
// when getting a connection using a specific connection_id
// expect object with connection info
router.get('/connection/:connection_id',
  databaseController.findConnection,
  (req, res) => res.status(200).json(res.locals.connection)

);
// when editing a connection, req body must have following keys/values { table, idCol, id, updateCol, newval } 
// expect locals object with key connection (w/ connection that was updated);
router.post('/editconnection/:connection_id/',
  databaseController.editConnection,
  databaseController.findConnection,
  (req, res) => res.status(200).json(res.locals)
);
// when adding a connection to a group, req body must have { table: connections, idCol: _connection_id, id: connection_id, updateCol: group_id, newval: group_id }
// expect object with connection info
router.post('/addtogroup/:group_id/:connection_id',
  databaseController.editConnection,
  databaseController.addToGroup,
  databaseController.findConnection,
  (req, res) => res.status(200).json(res.locals)
);

module.exports = router; 
