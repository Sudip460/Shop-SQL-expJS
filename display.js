const mysql = require("mysql2");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SPD460",
    database:"shopping_db"
});

con.connect(function(err){

    if(err) throw err;

    console.log("Products");

    con.query("SELECT * FROM product",function(err,result){
        if(err) throw err;

        console.table(result);
    });

    console.log("Customers");

    con.query("SELECT * FROM customer",function(err,result){
        if(err) throw err;

        console.table(result);
    });

});