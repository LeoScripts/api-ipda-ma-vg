const express = require('express');

const port = 3333;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res) => {
  res.send('home teste');
});

app.get('/a',(req,res) => {
  res.send('a teste');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server running in ${port}`)
});
