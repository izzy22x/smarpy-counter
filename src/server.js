import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 80;

const Counter = require('./api/models/counter');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:Lxiy728p825VjTrn@cluster0.ccjcb.mongodb.net/smarpy?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('Server started on port 80');