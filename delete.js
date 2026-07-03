const mysql = require("mysql2");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SPD460",
    database:"shopping_db"
});

con.connect(function(err){

    if(err) throw err;

    con.query(
        "DELETE FROM product WHERE pname='Sony WH-1000XM5'",
        function(err,result){

            if(err) throw err;

            console.log("Product Deleted");
        }
    );

    con.query(
        "DELETE FROM customer WHERE cname='Deepika Padukone'",
        function(err,result){

            if(err) throw err;

            console.log("Customer Deleted");
        }
    );

});

