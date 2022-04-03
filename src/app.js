const express = require('express');
const cors = require('cors');
const useRoute = require('./routes/user.routes');

require('dotenv-safe').config();
require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(useRoute);

module.exports = app;