const createDB = require('./createdatabase');
const createTable = require('.mySQL_table.js');
const insert = require('./mySQL_insert.js');
const mysql = require('mysql2');


const setup = async function() {
    createDB();
    const table = await createDB();
    table.createTable();
    const insert = await createTable();
    insert.insert();
} 
setup();

