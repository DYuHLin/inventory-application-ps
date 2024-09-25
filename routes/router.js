const express = require('express');
const shoe_controller = require("../controllers/shoeController");

const router = express.Router();

router.get('/allshoes', shoe_controller.get_all_shoes);

module.exports = router;