const db = require('../models/databaseModels.js')
const url = require('url');

const databaseController = {};

databaseController.findUser = async (req, res, next) => {
  const user_id = req.params.user_id; // receive from front end
  const queryString = `SELECT * FROM users WHERE _id = ${user_id}`

  try {
    await db.query(queryString)
      .then(userData => {
        console.log(userData);
        res.locals.userData = userData;
      });
    // what happens when the user isn't found in the db??
    next();  
  }
  catch {
    next({
      log: 'Error in databaseController.findUser',
      status: 500,
      message: {err: 'Error in databaseController.findUser'},
    });
  }
};

// TODO: parse connections so frontend receives an array?
databaseController.getConnections = async (req, res, next) => {
  // const user_id = req.params.user_id; // will eventually need to parse connections based on user logged in
  const queryString = `SELECT * FROM "public"."connections" LIMIT 100 WHERE`

  try {
    await db.query(queryString)
      .then(connections => {
        console.log(connections);
        res.locals.connections = connections;
      });
    next();
  }
  catch {
    next({
      log: 'Error in databaseController.getConnections',
      status: 500,
      message: {err: 'Error in databaseController.getConnections'},
    });
  }
};

// GROUPS
// add group to db
// INSERT INTO groups (_group_id, group_name, contact_freq) VALUES (4000, 'High Priority', 'Monthly')
// fields for groups table:
  // _group_id
  // group_name
  // contact_freq

// USERS
// add user to db
// INSERT INTO users (_id, first_name, last_name, email_address) VALUES (1000, 'lu', 'pin', 'lupe@in.com')
// fields for users table:
  // _id
  // user_token
  // first_name
  // last_name
  // email_address
  // profile_picture
  // connections

// CONNECTIONS
// edit connection in db (returns row that was updated)
  // update quality rating
    // UPDATE connections
    // SET quality = PUT QUALITY NUMBER HERE
    // WHERE _connection_id = PUT ID OF CONNECTION YOU WANT TO UPDATE HERE
    // RETURNING *;

  // update notes
    // UPDATE connections
    // SET notes = PUT NOTES HERE
    // WHERE _connection_id = PUT ID OF CONNECTION YOU WANT TO UPDATE HERE
    // RETURNING *;

  // update group
    // UPDATE connections
    // SET group_id = PUT NEW GROUP ID NUMBER HERE
    // WHERE _connection_id = PUT ID OF CONNECTION YOU WANT TO UPDATE HERE
    // RETURNING *;

// add connection in db
// INSERT INTO 
//   connections (
//     _connection_id,
//     first_name,
//     last_name,
//     email_address,
//     group_id,
//     profile_picture,
//     notes,
//     quality,
//     user_id
//   ) 
//   VALUES (
//     100,
//     'frank',
//     'smith',
//     'franksmith@email.com',
//     4000,
//     'someprofilepicurl.com',
//     'met Frank at db networking event, expert in SQL',
//     3,
//     1000
//   )
// fields for connections table:
  // _connection_id
  // first_name
  // last_name
  // email_address
  // group_id
  // profile_picture
  // notes
  // quality
  // user_id


// To list the column names of a table:
  // SELECT COLUMN_NAME
  // FROM INFORMATION_SCHEMA.COLUMNS
  // WHERE TABLE_NAME = 'Your Table Name'
  // ORDER BY ORDINAL_POSITION
