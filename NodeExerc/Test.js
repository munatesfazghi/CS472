// const express = require('express');
// const app = express();

// // Middleware to log request time
// app.use((req, res, next) => {
//   console.log('Request received at:', new Date().toISOString());
//   next();
// });

// // Route handler 1
// app.get('/users', (req, res, next) => {
//   console.log('Route handler 1');
//   next();
// });

// // Route handler 2
// app.get('/users', (req, res, next) => {
//   console.log('Route handler 2');
//   //res.send("Hello World");
//   // next(); // Uncomment this line to go to the next request handler
//   next('route'); // Use this line to skip the next request handler and go to the next route
// });

// // Route handler 3
// app.get('/users', (req, res, next) => {
//   console.log('Route handler 3');
//   res.send("Hello Again!!!");
//  // next(new Error('Something went wrong')); // Go to error handler
// });

// // Error handler
// // app.use((err, req, res, next) => {
// //   console.error('Error:', err.message);
// //   res.status(500).send('Internal Server Error');
// // });

// // Start the server
// app.listen(8080, () => {
//   console.log('Server is running on port 8080');
// });

// 
// const express = require('express');
// const app = express();

// app.use(function (request, response, next) {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   next(); // Call next() to move to the next middleware or route handler
// });

// app.get('/', function (request, response) {
//   response.end('Welcome to the homepage!');
// });

// app.get('/about', function (request, response) {
//   response.end('Welcome to the about page!');
// });

// app.use(function (request, response) {
//   response.statusCode = 404;
//   response.end('Page not found: 404 Error');
// });

const express = require ('express'); 
const app = express () ;
app.post ('/data', function (reg, res) {
 res. send ('Wiki data is posted');})
app.get ( ' / ' , function(req, res) {
res.send('Wiki home');
})
app.get ('/docs', function (req, res){
res.send ('Documentation for this wiki');
}) ;


var server = app.listen(8080, function () {
  console.log('Server is running... http://localhost:8080/');
});
