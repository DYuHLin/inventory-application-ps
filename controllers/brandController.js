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
    res.render('brand_detail', {title: 'Brand', brand: brand[0], shoes: !shoes ? [] : shoes});
});

exports.get_create_brand = asyncHandler(async (req, res, next) => {
    const brand = await pool.getAllBrands();
    res.render('brand_form', {title: 'CreateBrand', brand: brand});
});

exports.create_brand = asyncHandler(async (req, res, next) => {
    const {name, origin} = req.body;
    const check = await pool.getSingleBrandName(name);
    if(check.length == 0){
        await pool.insertBrand(name, origin);
        return res.redirect('/allbrands');
    } else {
        return res.redirect('/allbrands');
    };   
});

exports.get_delete_brand = asyncHandler(async (req, res, next) => {
    const brand = await pool.getSingleBrand(req.params.id);
    const shoes = await pool.getSingleBrandShoe(req.params.id);
    return res.render('brand_delete', {title: 'BrandDelete', brand: brand[0], shoes: !shoes ? [] : shoes});
});

exports.delete_brand = asyncHandler(async (req, res, next) => {
    await pool.deleteBrand(req.body.brandid);
    return res.redirect('/allbrands');
});

exports.get_update_brand = asyncHandler(async (req, res, next) => {
    const brand = await pool.getSingleBrand(req.params.id);
    return res.render('brand_form', {title: 'EditBrand', brand: brand[0]});
});

exports.brand_update = asyncHandler(async (req, res, next) => {
    await pool.updateBrand(req.body.name, req.body.origin, req.params.id);
    return res.redirect('/allbrands');
});