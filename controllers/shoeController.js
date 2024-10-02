const pool = require('../db/queries');
const asyncHandler = require('express-async-handler');
const {body, ValidationResult} = require('express-validator');

exports.get_all_shoes = asyncHandler(async (req, res, next) => {
    const shoes = await pool.getAllShoes();
    console.log(shoes);
    res.render('shoe_list', {title: 'All Shoes', shoe: shoes});
});

exports.get_single_shoe = asyncHandler(async (req, res, next) => {
    const shoe = await pool.getSingleShoe(req.params.id);
    console.log(shoe);
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
    console.log(name);
    console.log(price);
    console.log(stock);
    console.log(type);
    console.log(brand);
    await pool.insertShoe(name, price, stock, type, brand);
    return res.redirect('/allshoes');
});