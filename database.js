const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SPD460"
});

con.connect(function(err){
    if(err) throw err;

    console.log("Connected Successfully!");

    con.query("CREATE DATABASE IF NOT EXISTS shopping_db", function(err,result){
        if(err) throw err;

        console.log("Database Created");
    });
});