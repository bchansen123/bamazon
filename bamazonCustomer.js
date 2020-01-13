var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database=process.env.DB_LOCATION
});

connection.connect(function(err){
    if(err) throw err;
    startBamazon();
});

function startBamazon() {
    inquirer.prompt({
        name: "logId",
        type: "input",
        message: "What is the product ID of the item you'd like to buy?"
    },
    {
        name: "countId",
        type: "input",
        message: "How many would you like?",
        validate: function(value) {
            if(isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }
)}.then(function(answer) {
    connection.query(
        "INSERT INTO products SET ?",
        {
            item_id: answer.logId,
            stock_quantity: answer.countId || 0
        },
        function(err) {
            console.log("Item(s) successfully added to cart");
            startBamazon();
        }
    )
})

