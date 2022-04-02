const { Router } = require("express");

const useRoute = Router();

useRoute.post('/', (req,res) => {
  res.send('store');
});

useRoute.get('/', (req,res) => {
  res.send('read');
});

useRoute.delete('/', (req,res) => {
  res.send('delete');
});

module.exports = useRoute;