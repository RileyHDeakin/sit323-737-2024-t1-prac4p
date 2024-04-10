//importing the Express.js framework
const express = require('express');
//setting 'app' to the instance of the express application
const app = express();
//creating a const with port number to listen to
const port = 3000;

//mounting to the static file using a path to index.html
app.use(express.static('public'));

// Route for handling GET requests to the root endpoint '/'
app.get('/', (req, res) => {
// Sending index.html file located in the 'public' directory
  res.sendFile(__dirname + '/public/index.html');
});

//setup route for handling GET requests to the /additione endpoint
app.get('/addition', (req, resp)=>{
    //check if query paratmers num1 and num2 are valid
    if(!req.query.num1 || !req.query.num2) {
       // Sending a 400 Bad Request status with an error message if querys are invalid
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }
    // Parsing num1 and num2 from query parameters to float
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    //add num1 and num2 and send result back to client as html
    const result = num1 + num2;
    resp.send(`<h1>${result}</h1>`);
});

//setup route for handling GET requests to the /subtraction endpoint
app.get('/subtraction', (req, resp)=>{
  // Checking if query parameters num1 and num2 are valid
    if(!req.query.num1 || !req.query.num2) {
      // Sending a 400 Bad Request status with an error message if querys are invalid
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }
   //Parsing num1 and num2 from query parameters to float
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Subtracting num2 from num1 and sending result back to client as HTML
    const result = num1 - num2;
    resp.send(`<h1>${result}</h1>`);
});

// Setup route for handling GET requests to the '/multiplication' endpoint
app.get('/multiplication', (req, resp)=>{
    // Checking if query parameters num1 and num2 are valid
    if(!req.query.num1 || !req.query.num2) {
      // Sending a 400 Bad Request status with an error message if querys are invalid
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }
    // Parsing num1 and num2 from query parameters to float
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Multiplying num1 and num2 and sending result back to client as HTML
    const result = num1 * num2;
    resp.send(`<h1>${result}</h1>`);
});

// Setup route for handling GET requests to the '/division' endpoint
app.get('/division', (req, resp)=>{
    // Checking if query parameters num1 and num2 are valid
    if(!req.query.num1 || !req.query.num2) {
        // Sending a 400 Bad Request status with an error message
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }
    // Parsing num1 and num2 from query parameters to float
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Dividing num1 by num2 and sending result back to client as HTML
    const result = num1 / num2;
    resp.send(`<h1>${result}</h1>`);
});

// Configuring server to listen to the set port number then logging a message
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
