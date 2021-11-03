const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const LinkedInCallback = require('react-linkedin-login-oauth2');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //cors
  next();
});

app.get('/linkedin', (req,res) => {
  console.log('req',req.query.code);
  res.locals.accessToken = req.query.code;
  // res.redirect
  // LinkedIn();
  // res.sendFile(path.resolve(__dirname,'../src/index.html'));
  // res.send(LinkedInCallback());
  res.send(res.locals.accessToken);
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: `Error in unknown middleware error ${err}` },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;






// app.get('/api', (req,res) => {
  
  
// })

// app.post('https://www.linkedin.com/oauth/v2/accessToken', (req,res) => {
//   req.body = {
//     grant_type
//   }
// })