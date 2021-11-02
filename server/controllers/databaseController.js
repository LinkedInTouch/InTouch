const db = require('../models/databaseModels.js')
const url = require('url');

const databaseController = {};

///////// SQL STRING GENERATOR FUNCS /////////
// return SQL strings

// takes an object of key value pairs to insert as row into db table where key is name of column and value is associated value
const insertRow = (table, colsVals) => {
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
// takes a table and return all column names (fields) of that table
const getAllColumns = (table) => {
  return `FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ${table} ORDER BY ORDINAL_POSITION`
}
const editValue = (table, idCol, id, updateCol, newVal) => {
  return `UPDATE ${table} SET ${updateCol} = ${newVal} WHERE ${idCol} = ${id} RETURNING *`
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
    await db.query(insertRow('users', user_info));
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
    await db.query(insertRow('groups', group_info));
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
// given an objects with connection info, add connection
databaseController.addConnections = async (req, res, next) => {
  // expects object with keys _group_id, group_name, contact_freq and their associated values
  const connection_info = req.params.connection_info;

  try {
    await db.query(insertRow('connections', connection_info));
    next();
  }
  catch {
    next({
      log: 'Error in databaseController.addConnection',
      status: 500,
      message: {err: 'Error in databaseController.addConnection'},
    });
  }
};
// given a connection_id and some field/val to update, update connection properties
databaseController.editConnection = async (req, res, next) => {
  // expects object with the following keys/values { table: tablename, idCol: val, id: val, updateCol: val, newval: val, }
  const { table, idCol, id, updateCol, newVal } = req.params.update_info;
  
  try {
    await db.query(editValue(table, idCol, id, updateCol, newVal));
    next();
  }
  catch {
    next({
      log: 'Error in databaseController.editConnection',
      status: 500,
      message: {err: 'Error in databaseController.editConnection'},
    });
  }
};

///////// TABLE INFORMATION /////////
// given a table name, returns the columns (fields) of that table
databaseController.getColumns = async (req, res, next) => {
  const table = req.params.table;

  try {
    await db.query(getAllRows(table))
      .then(columns => {
        console.log(columns);
        res.locals.columns = columns;
      });
    next();
  }
  catch {
    next({
      log: 'Error in databaseController.getColumns',
      status: 500,
      message: {err: 'Error in databaseController.getColumns'},
    });
  }
};
