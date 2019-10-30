const createDB = require('./createdatabase');
const createTable = require('.mySQL_table.js');
const insert = require('./mySQL_insert.js');
const mysql = require('mysql2');


async function f() {

    let promise1 = new Promise((resolve, reject) => {
        createDB();
        setTimeout(() => resolve("done1!"), 1000)
    });

    let promise2 = new Promise((resolve, reject) => {
        createTable();
        setTimeout(() => resolve("done5!"), 5000)
    });

    let promise3 = new Promise((resolve, reject) => {
        insert();
        setTimeout(() => resolve("done3!"), 3000)
    });

    let result =  promise1; // wait till the promise resolves (*)
    result +=  promise2; // wait till the promise resolves (*)
    result += promise3; // wait till the promise resolves (*)
    console.log("Async " + result); // "done!"

    result = await promise1; // wait till the promise resolves (*)
    result += await promise2; // wait till the promise resolves (*)
    result += await promise3; // wait till the promise resolves (*)
    console.log("Syns " + result); // "done!"
}

f();
