const { Router } = require("express");

const useRoute = Router();

useRoute.get('/', (req,res) => {
  res.send('home teste');
});

module.exports = useRoute;