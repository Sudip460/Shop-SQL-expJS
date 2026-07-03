const mysql = require("mysql2");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SPD460",
    database:"shopping_db"
});

con.connect(function(err){

    if(err) throw err;

    console.log("Connected");

    let productTable = `
    CREATE TABLE IF NOT EXISTS product(
        pid INT AUTO_INCREMENT PRIMARY KEY,
        pname VARCHAR(50),
        category VARCHAR(30),
        price INT
    )`;

    con.query(productTable,function(err,result){
        if(err) throw err;
        console.log("Product Table Created");
    });

    let customerTable = `
    CREATE TABLE IF NOT EXISTS customer(
        cid INT AUTO_INCREMENT PRIMARY KEY,
        cname VARCHAR(50),
        address VARCHAR(50)
    )`;

    con.query(customerTable,function(err,result){
        if(err) throw err;
        console.log("Customer Table Created");
    });

});