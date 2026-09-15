// var student = {
//     name: "Aman",
//     age: 21,
//     city: "Ludhiana",
//     course: "JavaScript"
// };

// console.log ("name : " + student.name)
// console.log ("Age : " + student.age)
// console.log ("City : " + student.city)
// console.log ("course : " + student.course)

// Exercise 2 — Dot vs Bracket Notation

// console.log (student.name)  // dot notation only accepts static, valid JavaScript identifiers, 
// console. log (student["name"]); // bracket notation accepts any expression that evaluates to a string, allowing for dynamic property access

// console.log (student.city)
// console.log (student["city"])
 
// student.property = "course";

// console.log ( "Property : "+ student.property)



// Exercise 3 — Update Object Properties


// var employee = {
//     name: "Jashan",
//     salary: 30000,
//     department: "Development"
// };
// employee.salary=35000
// employee.department= "Frontend"
// console.log (employee)


// Exercise 4 — Add and Delete Properties

// var person = {
//     name: "Simran",
//     age: 23
// };
// person.City = "Mohali"
// person.email ="Simran@gmail.com"

// delete person.age

// console.log (person)


// Exercise 5 — Check Property Exists

// var product = {
//     name: "Laptop",
//     price: 65000,
//     brand: "Dell"
// };

// console.log ("price" in product)
// console.log ("discount" in product)
// console.log ("brand " in product)


// Exercise 6 — Nested Address Object

// var student = {
//     name: "Aman",
//     address: {
//         city: "Ludhiana",
//         state: "Punjab",
//         country: "India"
//     }
// };
//  console.log ("student Name : "+ student.name)
//  console.log ( "city : "+student.address.city)
//   console.log ( "State : "+student.address.state)
//    console.log ( "country : "+student.address.country)

//    student.address.city = "Mohali"

//    console.log (student)

// Exercise 7 — Object with Array

// var developer = {
//     name: "Karan",
//     skills: ["HTML", "CSS", "JavaScript", "React"]
// };
// console.log ("First skill : " +developer.skills[0])
// console.log ("second skill : " +developer.skills[3])
// console.log ("total skill : " +developer.skills)

// developer.skills[1] ="Tailwind"
// console.log (developer)

// Exercise 8 — Object Method

// var person = {
//     name: "Aman",

//       greet: function() {
//         console .log ( "Hello " + this.name)
//     }
// };
// person.greet()

// Exercise 9 — Employee Salary Method

// var employee = {
//     name: "Jashan",
//     salary: 40000,

//     showDetails: function() {
//        console.log (`${employee.name} earns ${employee.salary} per month`)
//     }
// };
// employee.showDetails()


// Exercise 10 — Calculator Object

// var calculator = {
//   number1: 50,
//   number2: 10,

//   add: function() {
//     return this.number1 + this.number2;
//   },

//   subtract: function() {
//     return this.number1 - this.number2;
//   },

//   multiply: function() {
//     return this.number1 * this.number2;
//   },

//   divide: function() {
//     return this.number1 / this.number2;
//   }
// };
// console.log (calculator.add())
// console.log (calculator.subtract())
// console .log(calculator.multiply())
//  console.log (calculator.divide())

// Exercise 11 — Loop Through Object

// var mobile = {
//     brand: "Apple",
//     model: "iPhone 15",
//     storage: "128GB",
//     price: 65000
// };
//  for (const key in mobile ){
//     console.log (`${key}: ${mobile[key]}`)
//  }

// Exercise 12 — Keys, Values and Entries


// var employee = {
//     name: "Aman",
//     age: 25,
//     department: "Development",
//     salary: 45000
// };
// console.log(Object.keys(employee))
// console.log (Object.values(employee))
// console.log (Object.entries(employee))


// Exercise 13 — Student List


// var students = [
//     {
//         name: "Aman",
//         marks: 85
//     },
//     {
//         name: "Simran",
//         marks: 92
//     },
//     {
//         name: "Rahul",
//         marks: 35
//     },
//     {
//         name: "Karan",
//         marks: 76
//     }
// ];

// var studentsdetail = students.map((student)=>{
//     return student.name +"-"+ student.marks
// })
// console.log (studentsdetail)
 
// Exercise 14 — forEach() with Objects

// students.forEach(function(student, index) {

//     let result;

//     if (student.marks >= 40) {
//         result = "Pass";
//     } else {
//         result = "Fail";
//     }

//     console.log("Student " + (index + 1) + ": " +student.name + " - " +student.marks + " - " +result
//     );

// });
// Exercise 15 — map() with Objects

// var students = [
//     { name: "Aman", marks: 85 },
//     { name: "Simran", marks: 92 },
//     { name: "Rahul", marks: 35 },
//     { name: "Karan", marks: 76 }
// ];

// var studentarr = students.map((student) =>{
//     return student.name
// })
// console.log (studentarr)

// var bonusmarks = students.map ((student)=>{
//  return student.marks+5
// })
// console.log(bonusmarks)

// // Exercise 16 — filter() Students
// var passedStudents = students.filter(function(student) {
// return student.marks >= 40;
// });
// console.log( passedStudents);

// var failedStudents = students.filter(function(student) {
// return student.marks < 40;
// });
// console.log(failedStudents);

// var topperStudents = students.filter(function(student) {
// return student.marks >= 80;
// });
// console.log(topperStudents);


// Exercise 17 — find() Student

// var students = [
//     { name: "Aman", marks: 85 },
//     { name: "Simran", marks: 92 },
//     { name: "Rahul", marks: 35 },
//     { name: "Karan", marks: 76 }
// ];

// // var simranStudents = students.find(function(student) {
// // return student.name[]
// // });
// // console.log(simranStudents);

// var above90 = students.find(function(student) {
// return student.marks >90
// });
// console.log(above90);

// var failedStudents = students.find(function(student) {
// return student.marks <40
// });
// console.log(failedStudents);

// Exercise 18 — Employee Management

// var employees = [
//     {
//         name: "Aman",
//         department: "Development",
//         salary: 35000
//     },
//     {
//         name: "Simran",
//         department: "Design",
//         salary: 30000
//     },
//     {
//         name: "Jashan",
//         department: "Development",
//         salary: 50000
//     },
//     {
//         name: "Rahul",
//         department: "HR",
//         salary: 28000
//     },
//     {
//         name: "Karan",
//         department: "Development",
//         salary: 42000
//     }
// ];

// employees.forEach((employee)=>{
//     console.log (employee)
// })

// var developmentemp = employees.filter(function(employee) {
// return employee.department==="Development";
// });
// console.log(developmentemp);



// var above40K = employees.find(function(employee) {
// return employee.salary >40000;
// });
// console.log(above40K);


// var atleast25k = employees.every(function(employee) {
// return employee.salary >25000;
// });
// console.log(atleast25k);

// var totalsalary= employees.reduce ((sum,employee)=>{
//     return sum +employee.salary
// },0)
// console.log (totalsalary)

// var averageSalary = totalsalary / employees.length;
// console.log (averageSalary)

// var mappingname = employees.map((employee)=>{
//     return employee.name
// })
// console.log (mappingname)

// // Exercise 19 — Product Inventory System

// var products = [
//     {
//         name: "Laptop",
//         price: 65000,
//         stock: 5
//     },
//     {
//         name: "Mouse",
//         price: 1200,
//         stock: 20
//     },
//     {
//         name: "Keyboard",
//         price: 2500,
//         stock: 0
//     },
//     {
//         name: "Monitor",
//         price: 15000,
//         stock: 8
//     },
//     {
//         name: "Headphones",
//         price: 3500,
//         stock: 12
//     }
// ];

// console.log (products)

// var productstock = products.filter((product)=>{
//     return product.stock >0
// })
// console.log (productstock)

// var priceabove50k = products.filter((product)=>{
//     return product.price>50000
// })
// console.log (priceabove50k)


// var findmoniter = products.find((product)=>{
//     return product.name="Moniter"
// })
// console.log (findmoniter)


// var productstock = products.some((product)=>{
//     return product.stock===0
// })
// console.log (productstock)

// var priceabove500 = products.every((product)=>{
//     return product.price>500
// })
// console.log (priceabove500)

//  var totalproduct= products.reduce ((sum,product)=>{
//     return sum +product.price
// },0)
// console.log (totalproduct)

// var productname = products.map((product)=>{
//     return product.name
// })
// console.log (productname)
// var discount = products.map((product)=>{
//       result= product.price * 10/100
//       return product.price -result 
// })
// console.log (discount)

// Exercise 20 — Complete Student Management System


// var students = [
//     {
//         name: "Aman",
//         age: 21,
//         city: "Ludhiana",
//         marks: 78
//     },
//     {
//         name: "Simran",
//         age: 22,
//         city: "Mohali",
//         marks: 92
//     },
//     {
//         name: "Rahul",
//         age: 20,
//         city: "Ludhiana",
//         marks: 34
//     },
//     {
//         name: "Karan",
//         age: 23,
//         city: "Chandigarh",
//         marks: 88
//     },
//     {
//         name: "Jashan",
//         age: 21,
//         city: "Ludhiana",
//         marks: 45
//     }
// ];

// students.forEach ((student)=>{
//     console.log (student)
// })

// var passedstudent = students.filter((student)=>{
//     return student.marks >40
// })
// // console.log (passedstudent)

// var citystudent = students.filter((student)=>{
//     return student.city==="Ludhiana"
// })
// // console.log (citystudent)

// var topperstudent = students.filter((student)=>{
//     return student.marks >=80
// })
// // console.log (topperstudent)

//  var findkaran = students.find((student)=>{
//     return student.name="Karan"
// })
// // console.log (findkaran)

// var firstfailstudent = students.find((student)=>{
//     return student.marks<40
// })
// // console.log (firstfailstudent)

// var marksabove90 = students.some((student)=>{
//     return student.marks>90
// })
// // console.log (marksabove90)

// var marksvalid = students.every((student)=>{
//     return student.marks>=0 && student.marks<=100
// })
// // console.log (marksvalid)

// var studentname = students.map((student)=>{
//     return student.name
// })
// // console.log (studentname)

// var studentnameormark = students.map((student)=>{
//     return student.name +"-"+ student.marks
// })
// // console.log (studentnameormark)


//  var totalmarks= students.reduce ((sum,student)=>{
//     return sum +student.marks
// },0)
// // console.log (totalmarks)

// var averageMarks = totalmarks / students.length;
// // console.log (averageMarks)

// var gracemark = students.map((student)=>{
//     return {
//      marks: student.marks + 5 > 100
//             ? 100
//             : student.marks + 5
// }
// })
// // console.log (gracemark)




// console.log ("====================================")
// console.log ("    STUDENT MANAGEMENT REPORT  ")
// console.log ("====================================")

// console.log ("Total Students:"+ students.length)
// console.log ("Passed student "+passedstudent.length)
// console.log ("fail studeents :",firstfailstudent)

// console.log ("Students From Ludhiana: ", citystudent)
// console.log ("80+ Students: ", topperstudent)

// console.log ("Any Student Scored 90+: ", marksabove90)
// console.log ("All Marks Valid: ", marksvalid)

// console.log ("Student Names: ", studentname )

// console.log ("====================================")
