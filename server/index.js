const express = require('express');
const cors = require('cors'); // Import the cors package
const db = require("./config/dbconnection");
const createUser = require('./controllers/users/createUser');
const signin = require('./controllers/users/signin');
const checkDuplicateUsername = require('./middleware/verifyusername');

// Import the User model.
const UserModel = require("./models/users");

const bodyParser = require('body-parser')

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Use the cors middleware
app.use(cors({
  origin: 'http://localhost:3000', // Change this to your frontend's origin
  credentials: true,
}));



const initApp = async () => {
  console.log("Testing the database connection..");

  // Test the connection.
  try {
     await db.authenticate();
     console.log("Connection has been established successfully.");
     /**
      * Start the web server on the specified port.
      */

     // Syncronize the User model.
     UserModel.sync({ alter: true });

     app.listen(port, () => {
        console.log(`Server is running at: http://localhost:${port}`);
     });
  } catch (error) {
     console.error("Unable to connect to the database:", error.original);
  }
};

/**
* Initialize the application.
*/
initApp();

/**
* Testing endpoints.
*/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/** Endpoints **/

// Sign up endpoint
app.post('/api/auth/signup', checkDuplicateUsername, createUser);

// Sign in endpoint
app.post('/api/auth/sign', signin);