const pool = require('../db/queries');
const asyncHandler = require('express-async-handler');
const {body, ValidationResult} = require('express-validator');

exports.get_types = asyncHandler(async (req, res, next) => {
    const types = await pool.getAllTypes();

    res.render('type_list', {title: 'Types', type: types});
});

exports.get_single_type = asyncHandler(async (req, res, next) => {
    const type = await pool.getSingleType(req.params.id);
    const shoes = await pool.getSingleTypeShoe(req.params.id);
    res.render('type_detail', {title: 'Type', type: type[0], shoes: !shoes ? [] : shoes});
});

exports.get_create_type = asyncHandler(async (req, res, next) => {
    const type = await pool.getAllTypes();
    return res.render('type_form', {title: 'CreateType', type: type});
});

exports.create_type = asyncHandler(async (req, res, next) => {
    console.log(req.body.typeshoe);
    const {typeshoe} = req.body;
    await pool.insertType(typeshoe);
    return res.redirect('/alltypes');
});

exports.get_delete_type = asyncHandler(async (req, res, next) => {
    const type = await pool.getSingleType(req.params.id);
    const shoes = await pool.getSingleTypeShoe(req.params.id);
    return res.render('type_delete', {title: 'TypeDelete', type: type[0], shoes: !shoes ? [] : shoes});
});

exports.delete_type = asyncHandler(async (req, res, next) => {
    await pool.deleteType(req.body.typeid);
    return res.redirect('/alltypes');
});