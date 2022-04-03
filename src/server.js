const express = require('express');
require('dotenv-safe').config();
const cors = require('cors')
const useRoute = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(useRoute);

app.listen(process.env.PORT, () => {
  console.log(`server running in ${process.env.PORT}`)
});
