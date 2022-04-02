const express = require('express');
const useRoute = require('./routes/user.routes');

const port = 3333;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(useRoute);

app.listen(process.env.PORT || 3333, () => {
  console.log(`server running in ${port}`)
});
