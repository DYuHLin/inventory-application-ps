const express = require('express');
const shoe_controller = require("../controllers/shoeController");
const brand_controller = require("../controllers/brandController");
const type_controller = require("../controllers/typeController");

const router = express.Router();

router.get('/allshoes', shoe_controller.get_all_shoes);
router.get('/allbrands', brand_controller.get_brands);
router.get('/alltypes', type_controller.get_types);
router.get('/alltypes/single/:id', type_controller.get_single_type);
router.get('/allbrands/single/:id', brand_controller.get_single_brand);
router.get('/allshoes/single/:id', shoe_controller.get_single_shoe);

router.get('/alltypes/create', type_controller.get_create_type);
router.post('/alltypes/create', type_controller.create_type);

router.get('/allbrands/create', brand_controller.get_create_brand);
router.post('/allbrands/create', brand_controller.create_brand);

router.get('/allshoes/create', shoe_controller.get_create_shoe);
router.post('/allshoes/create', shoe_controller.create_shoe);

module.exports = router;