const { Router } = require("express");
const UserController = require("../controller/UserController");

const useRoute = Router();

useRoute.post('/', UserController.store);

useRoute.get('/', UserController.read);

useRoute.delete('/', UserController.delete);

module.exports = useRoute;