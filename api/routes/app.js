const express = require('express');
const app = express();

const summary = require('./middleware/summary');

// Set pretty json
app.set('json spaces', 2);

// Handle the summary endpoint
app.use('/api/summary', summary);

// Handle 404
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Error handling
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
