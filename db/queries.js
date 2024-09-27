const pool = require('./pool');

async function getAllShoes() {
    const {rows} = await pool.query(`SELECT shoe.id AS id, shoe.name AS name, price, stock, type.name AS type_name, brand.name AS brand_name  FROM shoe INNER JOIN 
        brand ON shoe.brand = brand.id INNER JOIN type ON shoe.type = type.id;`);

    return rows;
};

async function getSingleShoe(id) {
    const {rows} = await pool.query(`SELECT shoe.id AS id, shoe.name AS name, price, stock, type.name AS type_name, brand.name AS brand_name  FROM shoe INNER JOIN 
        brand ON shoe.brand = brand.id INNER JOIN type ON shoe.type = type.id; WHERE shoe.id = ${id};`);

    return rows;
};

async function getAllBrands() {
    const {rows} = await pool.query(`SELECT * FROM brand;`);
    
    return rows;
};

async function getSingleBrand(id) {
    const {rows} = await pool.query(`SELECT * FROM brand WHERE id = ${id};`);
    
    return rows;
};

async function getSingleBrandShoe(id) {
    const {rows} = await pool.query(`SELECT * FROM shoe WHERE brand = ${id};`);
    
    return rows;
};

async function getAllTypes() {
    const {rows} = await pool.query(`SELECT * FROM type;`);

    return rows;
};

async function getSingleType(id) {
    const {rows} = await pool.query(`SELECT * FROM type WHERE id = ${id};`);

    return rows;
};

async function getSingleTypeShoe(id) {
    const {rows} = await pool.query(`SELECT * FROM shoe WHERE type = ${id};`);

    return rows;
};

async function insertShoe(name, price, type, brand) {
    await pool.query(`INSERT INTO shoe (name, price, type, brand) VALUES ($1)`, [name, price, type, brand]);
};

async function insertBrand(name, origin) {
    await pool.query(`INSERT INTO brand (name, origin) VALUES ($1)`, [name, origin]);
};

async function insertType(name) {
    await pool.query(`INSERT INTO type (name) VALUES ($1)`, [name]);
};

async function deleteShoe(params) {
    await pool.query(`DELETE FROM shoe WHERE id = ${params};`);
};

async function deleteType(params) {
    await pool.query(`DELETE FROM type WHERE id = ${params};`);
};

async function deleteBrand(params) {
    await pool.query(`DELETE FROM brand WHERE id = ${params};`);
};

module.exports = {getAllShoes, getAllTypes, getAllBrands, 
    insertShoe, insertBrand, insertType, deleteBrand, 
    deleteShoe, deleteType, getSingleBrand, getSingleType, 
    getSingleShoe, getSingleTypeShoe, getSingleBrandShoe};