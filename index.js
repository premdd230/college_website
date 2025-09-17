const express = require('express');
const path = require('path');

const app = express();
const PORT = 5500;

// Serve static files from the 'COLLEGE' folder
app.use(express.static(path.join(__dirname, 'COLLEGE')));

// Default route (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'COLLEGE', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});