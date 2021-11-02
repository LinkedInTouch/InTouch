const db = require('../models/databaseModels.js')
const url = require('url');

const databaseController = {};


///////// SQL STRING GENERATORS /////////
// return SQL strings

// takes an object of key value pairs to insert as row into db table where key is name of column and value is associated value
const insertRowSQL = (table, colsVals) => {
  const cols = Object.keys(colsVals);
  const vals = [];
  
  cols.forEach(col => {
    vals.push(colsVals[col])
  });

  return `INSERT INTO ${table} (${cols}) VALUES (${vals})`
}

// takes a table and an id to search by
const findByValue = (table, col, val) => {
  return `SELECT * FROM ${table} WHERE ${col} = ${val}`;
}

// takes a table and returns all rows in that table
const getAllRows = (table) => {
  return `SELECT * FROM ${table} LIMIT 100`;  
}

///////// USERS /////////
// fields for users table:
  // _id
  // user_token
  // first_name
  // last_name
  // email_address
  // profile_picture
  // connections

// given a user_id, find a user --> 
databaseController.findUser = async (req, res, next) => {
  const user_id = req.params.user_id; // receive from front end

  try {
    await db.query(findByValue('users', '_id', user_id))
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
// given an object of properties/vals about a user --> 
databaseController.addUser = async (req, res, next) => {
  // expects object with keys _id, user_token, first_name, last_name, connections (optional: email_address, profile_picture)
  const user_info = req.params.user_info;

  try {
    await db.query(insertRowSQL('users', user_info));
    next();
  }
  catch {
    next({
      log: 'Error in databaseController.addUser',
      status: 500,
      message: {err: 'Error in databaseController.addUser'},
    });
  }
};
// given a user_id, get all that users connections // TODO: parse connections so frontend receives an array?
databaseController.getConnections = async (req, res, next) => {
  // const user_id = req.params.user_id; // will eventually need to parse connections based on user logged in

  try {
    await db.query(getAllRows(connections))
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

///////// GROUPS /////////
// fields for groups table:
  // _group_id
  // group_name
  // contact_freq

// given a group id, find that group and pass the row back to front end --> SELECT * FROM "public"."groups" WHERE _group_id = PASS IN GROUP ID
databaseController.findGroup = async (req, res, next) => {
  const group_id = req.params.group_id; // receive from front end

  try {
    await db.query(findByValue(groups, _group_id, group_id))
      .then(groupData => {
        console.log(groupData);
        res.locals.groupData = groupData;
      });
    // what happens when the group isn't found in the db??
    next();  
  }
  catch {
    next({
      log: 'Error in databaseController.findGroup',
      status: 500,
      message: {err: 'Error in databaseController.findGroup'},
    });
  }
};
// given an obj of properties/vals about a group --> INSERT INTO groups (_group_id, group_name, contact_freq) VALUES (4000, 'High Priority', 'Monthly')
databaseController.addGroup = async (req, res, next) => {
  // expects object with keys _group_id, group_name, contact_freq and their associated values
  const group_info = req.params.group_info;

  try {
    await db.query(insertRowSQL('groups', group_info));
    next();
  }
  catch {
    next({
      log: 'Error in databaseController.addGroup',
      status: 500,
      message: {err: 'Error in databaseController.addGroup'},
    });
  }
};
// get all groups in db --> SELECT * FROM "public"."groups" LIMIT 100
databaseController.getGroups = async (req, res, next) => {

  try {
    await db.query(getAllRows(groups))
      .then(groups => {
        console.log(groups);
        res.locals.connections = groups;
      });
    next();
  }
  catch {
    next({
      log: 'Error in databaseController.getGroups',
      status: 500,
      message: {err: 'Error in databaseController.getGroups'},
    });
  }
};

///////// CONNECTIONS /////////
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
// given a connection_id, find a connection
databaseController.findConnection = async (req, res, next) => {
  const connection_id = req.params.connection_id; // receive from front end

  try {
    await db.query(findByValue(connections, _connection_id, connection_id))
      .then(connectionData => {
        console.log(connectionData);
        res.locals.connectionData = connectionData;
      });
    // what happens when the connection isn't found in the db??
    next();  
  }
  catch {
    next({
      log: 'Error in databaseController.findConnection',
      status: 500,
      message: {err: 'Error in databaseController.findConnection'},
    });
  }
};

// given an array of objects with connection info, add connection(s)

// given a connection_id and some field/val to update, update connection properties
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



// To list the column names of a table:
  // SELECT COLUMN_NAME
  // FROM INFORMATION_SCHEMA.COLUMNS
  // WHERE TABLE_NAME = 'Your Table Name'
  // ORDER BY ORDINAL_POSITION
