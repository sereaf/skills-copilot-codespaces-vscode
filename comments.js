// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample comments data
let comments = [
  { id: 1, text: "This is the first comment" },
  { id: 2, text: "This is the second comment" },
];

// Route to get all comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Route to add a new comment
app.post("/comments", (req, res) => {
  const newComment = req.body;
  newComment.id = comments.length + 1; // Simple ID generation
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
