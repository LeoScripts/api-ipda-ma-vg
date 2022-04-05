const { Router } = require("express");
const UserController = require("../controller/UserController");
const auth = require('../middlewares/auth');

const useRoute = Router();

useRoute.post('/',auth,UserController.store);

module.exports = useRoute;