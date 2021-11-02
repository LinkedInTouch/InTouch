const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //cors
  next();
});

app.get('/api', (req,res) => {
  console.log('req',req.query.code);
  res.locals.accessToken = req.query.code;
})

app.get('/api', (req,res) => {
  res.sendFile(path.resolve(__dirname,'../src/index.html'));
})
  

// app.post('https://www.linkedin.com/oauth/v2/accessToken', (req,res) => {
//   req.body = {
//     grant_type
//   }
// })

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
