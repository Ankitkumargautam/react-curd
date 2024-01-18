const express = require('express');
require('dotenv').config({ path: __dirname + '/.env' });
const { connectDB } = require('./config/db');
const empRoute = require('./route/empRoute');
const { errorHandling } = require('./middleware/errorMiddleware');

connectDB();
const app = express();

app.use(express.json()); //tell server to use json

const port = process.env.PORT;

//route
app.use('/api', empRoute);

//error handling
app.use(errorHandling);

app.listen('5000', () => {
  console.log(`Server started on ${port}`);
});
