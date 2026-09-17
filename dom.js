// var students = [
//     { name: "Aman", marks: 85, course: "JavaScript" },
//     { name: "Simran", marks: 92, course: "React" },
//     { name: "Rahul", marks: 35, course: "JavaScript" },
//     { name: "Karan", marks: 76, course: "Node.js" },
//     { name: "Jashan", marks: 48, course: "React" }
// ];

// var studentContainer = document.getElementById("studentContainer");

// students.forEach(function(student) {

//     var card = document.createElement("div");

//     card.classList.add("student-card");

//     var result = student.marks >= 40 ? "Pass" : "Fail";


//     card.innerHTML = `
//         <h2>Name: ${student.name}</h2>
//         <p>Course: ${student.course}</p>
//         <p>Marks: ${student.marks}</p>
//         <p>Result: ${result}</p>
//     `;

//     studentContainer.appendChild(card);

// });

// var products = [
//     { name: "Laptop", price: 65000, stock: 5 },
//     { name: "Mouse", price: 1200, stock: 0 },
//     { name: "Keyboard", price: 2500, stock: 8 },
//     { name: "Monitor", price: 15000, stock: 0 },
//     { name: "Headphones", price: 3500, stock: 12 }
// ];

// var dashboard = document.getElementById("dashboard");
// var productsContainer = document.getElementById("products-container");

// var totalProducts = products.length;

// var availableProducts = products.filter(function(product) {
//     return product.stock > 0;
// }).length;

// var outOfStockProducts = products.filter(function(product) {
//     return product.stock === 0;
// }).length;

// var totalStock = products.reduce(function(total, product) {
//     return total + product.stock;
// }, 0);


// var total = document.createElement("p");
// total.textContent = "Total Products: " + totalProducts;

// var available = document.createElement("p");
// available.textContent = "Available Products: " + availableProducts;

// var outOfStock = document.createElement("p");
// outOfStock.textContent = "Out of Stock Products: " + outOfStockProducts;

// var stock = document.createElement("p");
// stock.textContent = "Total Stock: " + totalStock;

// dashboard.appendChild(total);
// dashboard.appendChild(available);
// dashboard.appendChild(outOfStock);
// dashboard.appendChild(stock);

// products.forEach(function(product) {

//     var card = document.createElement("div");

//     if (product.stock > 0) {
//         card.classList.add("available");
//     } else {
//         card.classList.add("out-of-stock");
//     }

//     var name = document.createElement("h2");
//     name.textContent = product.name;

    
//     var price = document.createElement("p");
//     price.textContent = "Price: " + product.price;

//     var productStock = document.createElement("p");
//     productStock.textContent = "Stock: " + product.stock;

//     var status = document.createElement("p");

//     if (product.stock > 0) {
//         status.textContent = "Status: In Stock";
//     } else {
//         status.textContent = "Status: Out of Stock";
//     }

//     card.appendChild(name);
//     card.appendChild(price);
//     card.appendChild(productStock);
//     card.appendChild(status);

//     productsContainer.appendChild(card);

// });

// Exercise 3 — Generate a Complete Table from Data

// var employees = [
//     { name: "Aman", department: "Development", salary: 35000 },
//     { name: "Simran", department: "Design", salary: 30000 },
//     { name: "Jashan", department: "Development", salary: 50000 },
//     { name: "Rahul", department: "HR", salary: 28000 }
// ];



// console.log (table)


// Exercise 4 — DOM Statistics Dashboard

// var marks = [78, 45, 92, 67, 34, 88, 56, 95, 41, 73];

// var heading = document.createElement("h2");

// heading.textContent = "Student Marks Dashboard";

// dashboard.appendChild(heading);

// var studentDashboard = document.getElementById("dashboard");
// var totalstudent = marks.length;

// var passed = marks.filter(function(mark) {
//     return mark > 40;
// });
// var failed = marks.filter(function(mark) {
//     return mark < 40;
// });

//  var totalmarks = marks.reduce(function(total, marks) {
//     return total + marks;
// }, 0);

// var average = totalmarks/marks.length

// var highestMark = Math.max(...marks);

// var lowestMark = Math.min(...marks);

// var mark80abv = marks.filter(function(mark) {
//     return mark > 80;
// }).length;

// var mark90abv = marks.filter(function(mark) {
//     return mark > 90;
// }).length;

// var summary = {
//   "Total Students": totalstudent,
//   "Passed": passed.length,
//   "Failed": failed.length,
//   "Average Marks": average,
//   "Highest Marks": highestMark,
//   "Lowest Marks": lowestMark,
//   "80+ Students": mark80abv,
//   "90+ Students": mark90abv
// };




// Object.entries(summary).forEach((entry)=> {

//   var paragraph = document.createElement("p");

//   paragraph.textContent = entry[0] + ": " + entry[1];

//   dashboard.appendChild(paragraph);

// });


// var studentHeading = document.createElement("h2");

// studentHeading.textContent = "Student Details";

// dashboard.appendChild(studentHeading);


// marks.forEach((mark, index) =>{

//   var paragraph = document.createElement("p");

//   var status = mark >= 40 ? "Pass" : "Fail";

//   paragraph.textContent =
//     "Student " + (index + 1) + ": " + mark + " - " + status;

//   dashboard.appendChild(paragraph);

// });

// Exercise 5 — Dynamic Navigation Menu

// var menuItems = [
//     { title: "Home", url: "index.html" },
//     { title: "About", url: "about.html" },
//     { title: "Services", url: "services.html" },
//     { title: "Contact", url: "contact.html" }
// ];

// var navbar =document.getElementById("navbar") 

// var navlist =document.createElement("navlist")
//  var navitem =document.createElement("navitem")
// console.log (navbar)



// Exercise 6 — Existing DOM Cleanup and Modification


var course = document.querySelectorAll("#course"); 

console.log (course)