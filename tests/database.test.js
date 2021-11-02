const {app, port} = require('../server/server.js')
const request = require('supertest')
const server = `http://localhost:${port}`;
const axios = require('axios')
const dbURI = 'postgres://paezbkru:tpHUcn1yXusoknF1OwQnCmS50TGCj5os@fanny.db.elephantsql.com/paezbkru'; // put some db endpoint here
const Users = require('../server/models/userModels');

// describe('try to add a new record to the database, then delete the record')