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
//  var tablecontainer =document.getElementById("tableContainer")
// var table =document.createElement("table")
// var thead =document.createElement("thead")
// var headerRow =document.createElement("tr")
// var headers =[
//     "Sr No.",
// "Name",
// "Department",
// "Salary",
// "Salary Category"
// ];

// headers.forEach(function(header) {
//     var th =document.createElement("th")
//     th.innerText=header
//     headerRow.appendChild(th)

// })
// thead.appendChild(headerRow)
// table.appendChild(thead)
// tablecontainer.appendChild(table)

// var tbody=document.createElement("tbody")
// employees.forEach(function(employee,index) {
//     console.log(index)
//     var row = document.createElement("tr")
//     var td= document.createElement("td")
//     td.innerText =index + 1;
//         var name= document.createElement("td")
//         name.innerText=employee.name
//              var depat= document.createElement("td")
//         depat.innerText=employee.department
//              var salary= document.createElement("td")
//         salary.innerText=employee.salary
//                      var Category= document.createElement("td")
//                      if (employee.salary >=50000){
//                         Category.innerText="High"
//                      }
//                     else if (employee.salary>30000){
//                         Category.innerText="Medium"
                        
//                     }
//                     else{
//                         Category.innerText="Low"
//                     }


// row.appendChild(td)
// row.appendChild(name)
// row.appendChild(depat)
// row.appendChild(salary)
// row.appendChild(Category)

// tablecontainer.appendChild(row)

          

// })

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
// var ul= document.createElement("ul")
// ul.classList.add("navlist")
// menuItems.forEach((menuItem)=>{
//     var li = document.createElement("li")
// li.classList.add("navitem")
// var a =document.createElement("a")
//  a.classList.add("navlink")

// a.innerText = menuItem.title;
//  a.href = menuItem.url;

//     if (menuItem.title === "Contact") {
//         a.setAttribute("target", "_blank");
//     }

//     li.appendChild(a);

//     ul.appendChild(li);
    
// });

// navbar.appendChild(ul);




// Exercise 6 — Existing DOM Cleanup and Modification


// let courses = document.querySelectorAll(".course");


// courses.forEach(function(course) {
//     course.classList.add("course-card");
// });

// courses.forEach(function(course) {
//     let heading = course.querySelector("h2");

//     if (heading.textContent === "Old Course") {
//         course.remove();
//     }
// });

// courses.forEach(function(course) {
//     let heading = course.querySelector("h2");
//     let status = course.querySelector("p");

//     if (heading.textContent === "JavaScript") {
//         status.textContent = "Completed";
//     }
// });

// let newCourse = document.createElement("div");

// newCourse.classList.add("course", "course-card");

// newCourse.innerHTML = `
//     <h2>React</h2>
//     <p>Upcoming</p>
// `;

// let course=document.getElementById("courses")
// course.appendChild(newCourse);


// let remainingCourses = document.querySelectorAll(".course");

// console.log("Total Courses:", remainingCourses.length);


// remainingCourses.forEach(function(course) {
//     console.log(course.textContent.trim());
// });


// Exercise 7 — Nested Company Structure


// var companydetails = {
//     name: "NetSquare Softwares",
//     departments: [
//         {
//             name: "Development",
//             employees: ["Aman", "Jashan", "Karan"]
//         },
//         {
//             name: "Design",
//             employees: ["Simran", "Gurpreet"]
//         },
//         {
//             name: "HR",
//             employees: ["Rahul"]
//         }
//     ]
// };
// var company = document.getElementById("company");
// var heading =document.createElement("h2")
// heading.innerText =companydetails.name
// company.appendChild(heading)


// companydetails.departments.forEach(function(department) {
// var div= document.createElement("div")
// var h2= document.createElement("h2")
// h2.innerText =  department.name

// var ul= document.createElement("ul")
// department.employees.forEach(function(employee) {
//     var li= document.createElement("li")
// li.innerText =  employee
// ul.appendChild(li)
// })
// div.appendChild(h2)
// div.appendChild(ul)

// company.appendChild(div)
// })

// var totalemployee = companydetails.departments.reduce((total, department) => {
//     return total + (department.employees.length);
// }, 0);


// var totalstock= document.createElement("h2")
// totalstock.innerText=" company detail"
// company.appendChild(totalstock)

// var countdepartment= document.createElement("p")
// countdepartment.innerText = "Total Departments: " +companydetails.departments.length

// var totalemp= document.createElement("p")
// totalemp.innerText = " Total Employees : " +totalemployee

// company.appendChild(countdepartment)
// company.appendChild(totalemp)



// Exercise 8 — Profile Generator with Nested Objects


// var user = {
//     name: "Aman Singh",
//     age: 24,
//     email: "aman@gmail.com",
//     address: {
//         city: "Ludhiana",
//         state: "Punjab",
//         country: "India"
//     },
//     skills: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "React"
//     ]
// };

// let profile = document.getElementById("profile");

// let name = document.createElement("h1");

// name.textContent = user.name;

// profile.appendChild(name);


// let age = document.createElement("p");

// age.textContent = "Age: " + user.age;

// profile.appendChild(age);


// let email = document.createElement("p");

// email.textContent = "Email: " + user.email;

// profile.appendChild(email);


// let addressSection = document.createElement("section");


// let addressHeading = document.createElement("h2");

// addressHeading.textContent = "Address:";
// addressSection.appendChild(addressHeading);
// let addressText = document.createElement("p");

// addressText.textContent =
//     user.address.city + ", " +
//     user.address.state + ", " +
//     user.address.country;

// addressSection.appendChild(addressText);

// profile.appendChild(addressSection);

// var skills = document.createElement("section");
// skills.className = "skills";

// var ul = document.createElement("ul");

// user.skills.forEach(function(skill) {
//     var li = document.createElement("li");
//     li.textContent = skill;
//     ul.appendChild(li);
// });

// skills.appendChild(ul);
// profile.appendChild(skills);



// Exercise 9 — Render Only Selected Data

// var products = [
//     { name: "Laptop", price: 65000, stock: 5 },
//     { name: "Mouse", price: 1200, stock: 0 },
//     { name: "Keyboard", price: 2500, stock: 10 },
//     { name: "Monitor", price: 15000, stock: 3 },
//     { name: "Headphones", price: 3500, stock: 0 },
//     { name: "Webcam", price: 4500, stock: 6 }
// ];


// var productcontainer = document.getElementById("products-container");

// var product = products.filter((product) => {
//     return product.stock > 0;
// });
// var finalproduct = products.filter((product) => {
//     return product.price > 2000;
// });
// finalproduct.forEach(function(product) {
// var card= document.createElement("div")
// var name= document.createElement("h2")
// name.innerText = "product name :" +product.name

// var price= document.createElement("p")
// price.innerText = "product Price :" +product.price

// var stock= document.createElement("p")
// stock.innerText = "stock :" +product.stock

// card.appendChild(name)
// card.appendChild(price)
// card.appendChild(stock)

// productcontainer.appendChild(card)



// })
// var totalInventry = finalproduct.reduce((total, product) => {
//     return total + (product.stock*product.price);
// }, 0);


// var totalstock= document.createElement("h2")
// totalstock.innerText=" Total Stock"
// productcontainer.appendChild(totalstock)

// var count= document.createElement("p")
// count.innerText = "Products Displayed: " +finalproduct.length

// var value= document.createElement("p")
// value.innerText = "stock :" +totalInventry

// productcontainer.appendChild(count)
// productcontainer.appendChild(value)


// Exercise 10 — Complete Dynamic Course Dashboard

// var students = [
//     {
//         name: "Aman",
//         course: "JavaScript",
//         marks: 78,
//         attendance: 85
//     },
//     {
//         name: "Simran",
//         course: "React",
//         marks: 92,
//         attendance: 95
//     },
//     {
//         name: "Rahul",
//         course: "JavaScript",
//         marks: 34,
//         attendance: 72
//     },
//     {
//         name: "Karan",
//         course: "Node.js",
//         marks: 88,
//         attendance: 60
//     },
//     {
//         name: "Jashan",
//         course: "React",
//         marks: 55,
//         attendance: 90
//     }
// ];

// var appdiv = document.getElementById("app");


// var totalstudent = students.length;

// var passed = students.filter((student) => {
//     return student.marks > 40;
// });
// var failed = students.filter((student) => {
//     return student.marks < 40;
// });

// var totalmarks = students.reduce((total, student) => {
//     return total + student.marks;
// }, 0);

// var average = totalmarks / students.length
// var totalmarks = students.reduce((total, student) => {
//     return total + student.attendance;
// }, 0);

// var averageAttandance = totalmarks / students.length


// var summary = {
//     "Total Students": totalstudent,
//     "Passed": passed.length,
//     "Failed": failed.length,
//     "Average Marks": average,
//     "Average Attandance": averageAttandance

// };

// Object.entries(summary).forEach((entry) => {

//     var paragraph = document.createElement("p");

//     paragraph.textContent = entry[0] + ": " + entry[1];

//     dashboard.appendChild(paragraph);

// });

// var adddiv = document.getElementById("app");

// students.forEach((student) => {

//     var card = document.createElement("div");

//     card.classList.add("student-card");

//     var result = student.marks >= 40 ? "Pass" : "Fail";
//     var attresult = student.attendance >= 75 ? "Eligible" : "Not eligible";



//     card.innerHTML = `
//         <h2>Name: ${student.name}</h2>
//         <p>Course: ${student.course}</p>
//         <p>Marks: ${student.marks}</p>
//         <p>Atttandance: ${student.attendance}</p>
//         <p>Result: ${result}</p>
//         <p>Eligible: ${attresult}</p>

//     `;

//     adddiv.appendChild(card);

// });


// var courese= document.createElement("h2")
// courese.innerText="Classes"
// adddiv.appendChild(courese)

// var Eligible = students.filter((student) => {
//     return student.attendance > 75;
// });
// var noteligible = students.filter((student) => {
//     return student.attendance < 40;
// });

// var adddiv = document.getElementById("app");

// var classes = {
//     "Passed": passed.length,
//     "Failed": failed.length,
//     "Eligible": Eligible.length,
//     "not eligible": noteligible.length

// };

// Object.entries(classes).forEach((entry) => {

//     var paragraph = document.createElement("p");

//     paragraph.textContent = entry[0] + ": " + entry[1];

//     appdiv.appendChild(paragraph);

// });

// // Part D — Top Performer

// var courese= document.createElement("h2")
// courese.innerText="Top Performer"
// adddiv.appendChild(courese)
// var topStudent = students.reduce((highest, current) => 
//   current.marks > highest.marks ? current : highest
// );

// Object.entries(topStudent).forEach((entry) => {

//     var paragraph = document.createElement("p");

//     paragraph.textContent = entry[0] + ": " + entry[1];

//     appdiv.appendChild(paragraph);

// });

// // Part E — Course Statistics
// var appdiv = document.getElementById("app");

// var courese= document.createElement("h2")
// courese.innerText="Course Statistics"
// adddiv.appendChild(courese)
// var JavaScript = students.filter((student) => {
//     return student.course === "JavaScript" ;
// });
// var React = students.filter((student) => {
//     return student.course ==="React";
// });

// var nodejs = students.filter((student) => {
//     return student.course ==="Node.js";
// });


// var courseStatistics = {
//     "JavaScript Students:": JavaScript.length,
//     "React Students:": React.length,
//     "Node.js Students:": nodejs.length,
    

// };

// Object.entries(courseStatistics).forEach((entry) => {

//     var paragraph = document.createElement("p");

//     paragraph.textContent = entry[0] + ": " + entry[1];

//     adddiv.appendChild(paragraph);

// });





// var products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mobile", price: 20000 },
//     { name: "Headphones", price: 2000 },
//     { name: "Keyboard", price: 1500 }
// ];

// var product = document.querySelector("#products-container")
//  var ul= document.createElement("ul")
//  products.forEach((product) =>{
//         var li= document.createElement("li")
//         li.classList.add("product-item")
//     var h2= document.createElement("h2")
//     h2.innerText="Product name "+product.name
//     var p = document.createElement("p")
//     p.innerText="Product price "+product.price

// li.appendChild(h2)
// li.appendChild(p)
// ul.appendChild(li)


//  })
//  product.appendChild(ul)


// var images = [
//     { src: "laptop.jpg", alt: "Laptop" },
//     { src: "mobile.jpg", alt: "Mobile" },
//     { src: "watch.jpg", alt: "Watch" }
// ];

// var gallery = document.querySelector("#gallery")
// var li =document.createElement("li")
//  images.forEach((image) =>{
//     var img =document.createElement("img")
//     img.setAttribute("src",image.src)
//         img.setAttribute("alt",image.alt)
// img.classList.add("gallery")

// gallery.appendChild(img)

//  })

// var students = [
//     { name: "Bharat", course: "BCA" },
//     { name: "Rahul", course: "MCA" },
//     { name: "Aman", course: "B.Tech" }
// ];

// var student1 = document.querySelector("#students")
// students.forEach((student)=>{
//     var div= document.createElement("div")
//     div.classList.add("student-card")

//     div.innerText=student.name+ "--"+student.course
    
// student1.appendChild(div)
// })
// var buttons = [
//     { text: "Home", color: "blue" },
//     { text: "About", color: "green" },
//     { text: "Contact", color: "red" }
// ];


// var buttoncontainer = document.querySelector("#students")
// buttons.forEach((button)=>{
//     var btn = document.createElement("button")

// btn.innerText=button.text
// btn.classList.add("menu-button")
// btn.style.backgroundColor = button.color;

// buttoncontainer.appendChild(btn)
// })

// diff between  class name and classList

// let box = document.querySelector("#box");
// box.classList.add("new-box");
// box.classList.remove("active");

// box.classList.toggle("dark");

// console.log(box.classList.contains("box"));



// let btn = document.querySelector("#btn1")
// let body = document.querySelector("#body")


//  btn.addEventListener('click', function (){
// btn.style.backgroundColor = "blue";
//     body.style.backgroundColor = "red";

//  })

// let btn = document.querySelector('#btn')

// btn.addEventListener('click',function () {
// console.log("Button Clicked")
// })

// let heading = document.querySelector("#mainHeading")

// btn.addEventListener("click",function () {
//  btn.innerText= "button was clicked"

//  heading.classList.add("active")
// })

// let input =document.querySelector("#username")
// let output =document.querySelector("#output")
// input.addEventListener("input",function(e){
//     output.innerText="Username : "+e.target.value
// })

// let btn1= document.querySelectorAll("#btn1")
// let body= document.getElementsByName("body")
// btn1.addEventListener("click", function(){
//     body.style.backgroundColor = "red";


// })


// let btn = document.querySelector("#btn1")
// let body = document.querySelector("#body")


//  btn.addEventListener('click', function (){
// btn.style.backgroundColor = "gray";
//     body.style.backgroundColor = "red";

//  })

//  let btn2 = document.querySelector("#btn2")


//  btn2.addEventListener('click', function (){
// btn2.style.backgroundColor = "gray";
//     body.style.backgroundColor = "green";

//  })
//   let btn3 = document.querySelector("#btn3")


//  btn3.addEventListener('click', function (){
// btn3.style.backgroundColor = "gray";
//     body.style.backgroundColor = "blue";

//  })
// let buttons = document.querySelectorAll("#btn1");

// buttons.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         body.style.backgroundColor = e.target.value;
//     });
// });




function updateCart() {

    cartContainer.innerHTML = "";

   
    cartItems.innerText = cart.length;

    let total = 0;

    cart.forEach(function (product) {

        total = total + product.price;

        let cartItem = document.createElement("p");

        cartItem.innerText =
            product.name + " - " + product.price;

        cartContainer.appendChild(cartItem);
    });

    totalAmount.innerText = total;
}


clearCart.addEventListener("click", function () {

    cart = [];

    cartContainer.innerHTML = "";

    cartItems.innerText = "0";

    totalAmount.innerText = "0";
});