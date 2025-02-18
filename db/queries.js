const pool = require('./pool');

async function getAllShoes() {
    const {rows} = await pool.query(`SELECT shoe.id AS id, shoe.name AS name, price, stock, type.name AS type_name, brand.name AS brand_name  FROM shoe INNER JOIN 
        brand ON shoe.brand = brand.id INNER JOIN type ON shoe.type = type.id;`);
    return rows;
};

async function getSingleShoe(id) {
    const {rows} = await pool.query(`SELECT shoe.id AS id, shoe.name AS name, price, stock, type.name AS type_name, brand.name AS brand_name  FROM shoe INNER JOIN 
        brand ON shoe.brand = brand.id INNER JOIN type ON shoe.type = type.id WHERE shoe.id = ${id};`);
    return rows;
};

async function getSingleShoeName(id) {
    const {rows} = await pool.query(`SELECT shoe.id AS id, shoe.name AS name, price, stock, type.name AS type_name, brand.name AS brand_name  FROM shoe INNER JOIN 
        brand ON shoe.brand = brand.id INNER JOIN type ON shoe.type = type.id WHERE shoe.name LIKE '${id}';`);
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

async function getSingleBrandName(id) {
    const {rows} = await pool.query(`SELECT * FROM brand WHERE name LIKE '${id}';`); 
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

async function getSingleTypeName(id) {
    const {rows} = await pool.query(`SELECT * FROM type WHERE name LIKE '${id}';`);
    return rows;
};

async function getSingleTypeShoe(id) {
    const {rows} = await pool.query(`SELECT * FROM shoe WHERE type = ${id};`);
    return rows;
};

async function insertShoe(name, price, stock, type, brand) {
    await pool.query(`INSERT INTO shoe (name, price, stock, type, brand) VALUES($1, $2, $3, $4, $5)`, [name, price, stock, type, brand]);
};

async function insertBrand(name, origin) {
    await pool.query(`INSERT INTO brand (name, origin) VALUES($1, $2)`, [name, origin]);
};

async function insertType(name) {
    await pool.query(`INSERT INTO type (name) VALUES($1)`, [name]);
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

async function updateShoe(name, price, stock, type, brand, id) {
    await pool.query(`UPDATE shoe SET name = $1, price = $2, stock = $3, type = $4, brand = $5  WHERE id = $6`, [name, price, stock, type, brand, id]);
};

async function updateBrand(brand, origin, id) {
    await pool.query(`UPDATE brand SET name = $1, origin = $2 WHERE id = $3`, [brand, origin, id]);
};

async function updateType(name, id) {
    await pool.query(`UPDATE type SET name = $1 WHERE id = $2`, [name, id]);
};

async function getCountShoe() {
    const {rows} = await pool.query(`SELECT COUNT(*) AS shoe FROM shoe;`);
    return rows;
};

async function getCountType() {
    const {rows} = await pool.query(`SELECT COUNT(*) AS type FROM type;`);
    return rows;
};

async function getCountBrand() {
    const {rows} = await pool.query(`SELECT COUNT(*) AS brand FROM brand;`);
    return rows;
};

module.exports = {getAllShoes, getAllTypes, getAllBrands, 
    insertShoe, insertBrand, insertType, deleteBrand, 
    deleteShoe, deleteType, getSingleBrand, getSingleType, 
    getSingleShoe, getSingleTypeShoe, getSingleBrandShoe,
    updateShoe, updateBrand, updateType, getCountBrand, getCountShoe, getCountType,
    getSingleBrandName, getSingleShoeName, getSingleTypeName};