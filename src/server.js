const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 80;

const Counter = require('./api/models/counterModel');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('Server started on port 80');