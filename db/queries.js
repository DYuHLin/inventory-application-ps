const pool = require('./pool');

async function getAllShoes() {
    const {rows} = await pool.query(`SELECT * FROM shoe INNER JOIN brand ON shoe.brand = brand.id INNER JOIN type ON shoe.type = type.id;`);

    return rows;
};

async function getAllBrands() {
    const {rows} = await pool.query(`SELECT * FROM brand;`);
    
    return rows;
};

async function getAllTypes() {
    const {rows} = await pool.query(`SELECT * FROM type;`);

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

module.exports = {getAllShoes, getAllTypes, getAllBrands, insertShoe, insertBrand, insertType, deleteBrand, deleteShoe, deleteType};