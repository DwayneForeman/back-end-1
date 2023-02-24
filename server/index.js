// in order to get our server working we will need to use Node Package Manager to install two packages in TERMINAL.
//Use: npm i express cors

// Bring express into our project by capturing it with a variable:
const express = require("express");
// Bring cors into our project byr capturing it with a variable:
const cors = require("cors");
//Now we need we need to use teh new variable we just created and capture it in another variable with express INVOKED
//This variable will typically be named 'app'
const app = express();
//Now we need to setup our newly created server to accept json invoked. j son is a method of express hence, we use dot notation
app.use(express.json());
//Finally, we need to setup our newly created server to accept cores invoked.
app.use(cors());

//------------------------STEP 1 ------------------------------------
// in index.js, above the listen but below any middleware (app.use calls are middleware AKA API), create the follow GET endpoint and method as follows:

app.get("/api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
  res.status(200).send(friends);
});

//------------------------STEP 2 ------------------------------------
// Let’s add another endpoint and method that will tell us how the weather is today. on the next line, create another GET endpoint and method as follows:

app.get("/weather/:temperature", (req, res) => {
  const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
  res.status(200).send(phrase);
});

//OR WE COULD HAVE USED

/*

app.get("/weather/:temperature", (req, res) => {
  const { temperature } = req.params;

//This line above, extracts the temperature value from the req.params object using destructuring assignment. It's equivalent to const temperature = req.params.temperature;.

  const phrase = `<h3>It was ${temperature} today</h3>`;
  res.status(200).send(phrase);
});
*/

//Now we have to tell our sever which port to listen to so we can communicate front/backend
app.listen(4000, () => console.log("sever running on port 4000"));

/*
// in terminal, use the nodemon command to check that your server is working correctly so far
// nodemon server/index
//* We SHOULD see in our TERMINAL "sever running on port 4000". Remember, you will not see it on the browsers terminal/console because we are dealing with node the BACKEND
// We can also check teh backend on web by inputting http://localhost:4000/ in address bar

/* We already have nodemon installed globally and don't need to do it ever again BUT if we didn't here's how we'd do it

INSTALL NODEMON
- Globally for ALL projects: sudo nodemon npm install -g nodemon
- Locally for each individually project: npm install nodemon

*/

//------------------------LETS' TEST------------------------------------

/*
Launch the index.html file in your browser and test out your endpoints by clicking the “GET Friends List” button or by navigating to either http://localhost:4000/weather/hot or to http://localhost:4000/weather/cold
*/
