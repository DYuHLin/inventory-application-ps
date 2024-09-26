const pool = require('../db/queries');
const asyncHandler = require('express-async-handler');
const {body, ValidationResult} = require('express-validator');

exports.get_brands = asyncHandler(async (req, res, next) => {
    const brands = await pool.getAllBrands();
    res.render('brand_list', {title: 'Brands', brand: brands});
});