const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
require('dotenv-safe').config();
require('./database');

const useRoute = require('./routes/user.routes');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(useRoute);

module.exports = app;