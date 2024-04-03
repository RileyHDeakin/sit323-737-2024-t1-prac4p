//importing the Express.js framework
const express = require('express');
//setting 'app' to the instance of the express application
const app = express();
//creating a const with port number to listen to
const port = 3000;

//mounting to the static file using a path to index.html
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

//setup route for handling GET requests to the /additione endpoint
app.get('/addition', (req, resp)=>{
    //check if query paratmers num1 and num2 are valid
    if(!req.query.num1 || !req.query.num2) {
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }
    //gets the num1 queary parameter and convert to float
    const num1 = parseFloat(req.query.num1);
    //gets the num2 queary parameter and convert to float
    const num2 = parseFloat(req.query.num2);

    //add num1 and num2 and send result back to client as html
    const result = num1 + num2;
    resp.send(`<h1>${result}</h1>`);
});

//setup route for handling GET requests to the /subtraction endpoint
app.get('/subtraction', (req, resp)=>{
    if(!req.query.num1 || !req.query.num2) {
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const result = num1 - num2;
    resp.send(`<h1>${result}</h1>`);
});

//setup route for handling GET requests to the /multiplaction endpoint
app.get('/multiplication', (req, resp)=>{

    if(!req.query.num1 || !req.query.num2) {
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const result = num1 * num2;
    resp.send(`<h1>${result}</h1>`);
});

//setup route for handling GET requests to the /division endpoint
app.get('/division', (req, resp)=>{

    if(!req.query.num1 || !req.query.num2) {
        resp.status(400).send(`<h1>Invalid numbers or numbers don't exist</h1>`);
    }

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const result = num1 / num2;
    resp.send(`<h1>${result}</h1>`);
});

//configures server to listen to the set port number then logs message
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});