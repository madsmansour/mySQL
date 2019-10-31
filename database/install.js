const createDB = require('./database.js');
const createTable = require('./table.js');
const insert = require('./insert.js');
const mysql = require('mysql2');


async function f() {

    let promise1 = new Promise((resolve, reject) => {
        createDB();
        setTimeout(() => resolve("done1!"), 10000)
    });

    let promise2 = new Promise((resolve, reject) => {
        createTable();
        setTimeout(() => resolve("done2!"), 10000)
    });

    let promise3 = new Promise((resolve, reject) => {
        insert();
        setTimeout(() => resolve("done3!"), 20000)
    });


    await promise1; // wait till the promise resolves (*)
    await promise2; // wait till the promise resolves (*)
    await promise3; // wait till the promise resolves (*)
    console.log("Done!"); // "done!"
}

f();