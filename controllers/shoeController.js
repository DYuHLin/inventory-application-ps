const pool = require('../db/queries');
const asyncHandler = require('express-async-handler');
const {body, ValidationResult} = require('express-validator');

exports.get_all_shoes = asyncHandler(async (req, res, next) => {
    const shoes = await pool.getAllShoes();
    res.render('shoe_list', {title: 'All Shoes', shoe: shoes});
});

exports.get_single_shoe = asyncHandler(async (req, res, next) => {
    const shoe = await pool.getSingleShoe(req.params.id);
    res.render('shoe_detail', {title: 'All Shoes', shoe: shoe[0]});
});

exports.get_create_shoe = asyncHandler(async (req, res, next) => {
    const shoe = await pool.getAllShoes();
    const brand = await pool.getAllBrands();
    const type = await pool.getAllTypes();
    res.render('shoe_form', {title: 'CreateShoe', shoe: shoe, brands: brand, types: type});
});

exports.create_shoe = asyncHandler(async (req, res, next) => {
    const {name, price, stock, type, brand} = req.body;
    await pool.insertShoe(name, price, stock, type, brand);
    return res.redirect('/allshoes');
});

exports.get_shoe_delete = asyncHandler(async (req, res, next) => {
    const shoe = await pool.getSingleShoe(req.params.id);
    return res.render('shoe_delete', {title: 'Delete Shoe', shoe: shoe[0]});
});

exports.delete_shoe = asyncHandler(async (req, res, next) => {
    await pool.deleteShoe(req.body.shoeid);
    return res.redirect('/allshoes');
});

exports.get_update_shoe = asyncHandler(async (req, res, next) => {
    const shoe = await pool.getSingleShoe(req.params.id);
    const brand = await pool.getAllBrands();
    const type = await pool.getAllTypes();
    return res.render('shoe_form', {title: 'UpdateShoe', shoe: shoe[0], brands: brand, types: type});
});

exports.shoe_update = asyncHandler(async (req, res, next) => {
    await pool.updateShoe(req.body.name, req.body.price, req.body.stock, req.body.type, req.body.brand, req.params.id);
    return res.redirect('/allshoes');
});