const pool = require('../db/queries');
const asyncHandler = require('express-async-handler');
const {body, ValidationResult} = require('express-validator');

exports.get_brands = asyncHandler(async (req, res, next) => {
    const brands = await pool.getAllBrands();
    res.render('brand_list', {title: 'Brands', brand: brands});
});

exports.get_single_brand = asyncHandler(async (req, res, next) => {
    const brand = await pool.getSingleBrand(req.params.id);
    const shoes = await pool.getSingleBrandShoe(req.params.id);
    console.log(brand)
    console.log(shoes)
    res.render('brand_detail', {title: 'Brand', brand: brand[0], shoes: !shoes ? [] : shoes});
});