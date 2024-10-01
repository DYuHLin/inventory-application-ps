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