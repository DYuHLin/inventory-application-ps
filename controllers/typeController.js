const pool = require('../db/queries');
const asyncHandler = require('express-async-handler');
const {body, ValidationResult} = require('express-validator');

exports.get_types = asyncHandler(async (req, res, next) => {
    const types = await pool.getAllTypes();

    res.render('type_list', {title: 'Types', type: types});
});