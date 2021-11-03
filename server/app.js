// const express = require('express'); 
// const router = require('./routes/router');
// const path = require('path');


// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, '../client')));
// app.set('view engine', 'js');

// app.get("/", (req, res) => {
//   res.status(200);
// });

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

// module.exports = app;