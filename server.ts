import express, {Express, Request, Response} from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import mongoose from 'mongoose';
/*import ('dotenv').config();*/
import methodOverride  from 'method-override';
import {router } from './routes/api-post-routes';
const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;
import bodyParser  from 'body-parser'



const app:Express= express();
const MONGO_URL:string='mongodb+srv://Hanna-ZAM:PASS789@cluster0.gzl4z8j.mongodb.net/clone-trello?retryWrites=true&w=majority'
const PORT:number = 3001;
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(():void => console.log(successMsg('Connected to DB')))
  .catch((error:Error) => console.log(errorMsg(error)));

app.listen(PORT, ():void => {
  console.log(successMsg(`listening port ${PORT}`));
});


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*app.use(express.json());*/
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
mongoose.set('useFindAndModify', false);
app.use(methodOverride('_method'));



app.use(router);

