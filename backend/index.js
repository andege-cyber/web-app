// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a port to listen on (can be 3000 or any available port)
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// A basic GET route that responds with "Hello World!" when accessed
app.get('/', (req, res) => {
  res.send('Hello World! This is your backend server responding.');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
