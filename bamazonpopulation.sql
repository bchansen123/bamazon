CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(127) NOT NULL,
price DECIMAL(7,2) NOT NULL,
stock_quantity INT (7)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("iPhone XS","Electronics",899.99,100),
("Throw Pillow","Home Decore",19.99,50),
("Shampoo","Bathroom",4.99,2000),
("Teddy Bear","Toys",7.99,10),
("Deodorant","Bathroom",5.59,72),
("Powerbeats Pro","Electronics",199.95,27),
("Yoga Mat","Workout Equipment",15.99,164),
("Pitch Perfect Trilogy","Movies",13.99,265),
("Wireless Charger","Electronics",34.99,12),
("Echo Dot","Electronics",34.99,10000);
