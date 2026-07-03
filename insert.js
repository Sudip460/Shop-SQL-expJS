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

    const products = `
    INSERT INTO product(pname,category,price)
    VALUES
    ('iPhone 16','Mobile',89999),
    ('MacBook Air M4','Laptop',124999),
    ('Sony WH-1000XM5','Headphones',29999)
    `;

    con.query(products,function(err,result){
        if(err) throw err;
        console.log("Products Inserted");
    });

    const customers = `
    INSERT INTO customer(cname,address)
    VALUES
    ('Shah Rukh Khan','Mumbai'),
    ('Deepika Padukone','Bengaluru'),
    ('Virat Kohli','Delhi')
    `;

    con.query(customers,function(err,result){
        if(err) throw err;
        console.log("Customers Inserted");
    });

});