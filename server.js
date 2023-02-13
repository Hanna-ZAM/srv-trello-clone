const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override');
const userApiRoutes = require('./routes/api-post-routes');
const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;
const bodyParser =require ('body-parser')

const app = express();
const MONGO_URL='mongodb+srv://Hanna-ZAM:PASS789@cluster0.gzl4z8j.mongodb.net/clone-trello?retryWrites=true&w=majority'
const PORT = 3001;
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(successMsg('Connected to DB')))
  .catch((error) => console.log(errorMsg(error)));

app.listen(PORT, (error) => {
  error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${PORT}`));
});

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(methodOverride('_method'));



app.use(userApiRoutes);


