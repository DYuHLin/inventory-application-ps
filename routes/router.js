const express = require('express');
const shoe_controller = require("../controllers/shoeController");
const brand_controller = require("../controllers/brandController");
const type_controller = require("../controllers/typeController");

const router = express.Router();

router.get('/allshoes', shoe_controller.get_all_shoes);
router.get('/allbrands', brand_controller.get_brands);
router.get('/alltypes', type_controller.get_types);

module.exports = router;