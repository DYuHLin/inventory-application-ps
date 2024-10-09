const {Client} = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS type (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name VARCHAR(55));

CREATE TABLE IF NOT EXISTS brand (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name VARCHAR(55), origin VARCHAR(55));

CREATE TABLE IF NOT EXISTS shoe (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name VARCHAR(55), price FLOAT, stock INTEGER, type INTEGER REFERENCES type(id),  
brand INTEGER  REFERENCES brand(id));


INSERT INTO type (name) 
VALUES
  ('High-Top'),
  ('Low-Top'),
  ('Casual'),
  ('Mens'),
  ('Womans');

INSERT INTO brand (name, origin) 
VALUES
  ('Adidas, Germany'),
  ('Nike, USA'),
  ('Converse, USA'),
  ('Vans, USA'),
  ('Reebok, England');

INSERT INTO shoe (name, price, stock, type, brand) 
VALUES
  ('One-Stars, 400', 90, 2, 3),
  ('All-Stars, 300', 190, 1, 3),
  ('Answer 1, 350', 80, 2, 5),
  ('Superstar, 250', 300, 2, 1),
  ('Jordan 1, 900', 70, 2, 2);
`;

async function main(){
    console.log('seeding...')
    const client = new Client({
        connectionString: process.env.DB_STRING,
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('done')
};

main();