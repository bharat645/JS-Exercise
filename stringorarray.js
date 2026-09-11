// var text = "   JavaScript Development   ";

// console.log(text);
// console.log (text.trim());
// console.log (text.trim().length)
// console.log (text.length);
// console.log (text.toUpperCase())
// console.log (text.toLowerCase())
// console.log (text[0])
// console.log(text[text.length-1]);
// console.log(text.includes("Script"))
// console.log(text.indexOf("Development"))

// // Exercise 2 — Name Formatter

// var firstName = "aman";
// var lastName = "singh";

// var fullname = (firstName + " "+ lastName)
// console.log(fullname.toUpperCase()) ;

// // template literal.

// console.log(`My name is ${fullname}`);
// console.log(firstName.startsWith("a"));
// console.log(lastName.endsWith("h"));


// // Exercise 3 — Email Checker

// var email = "  aman@gmail.com  ";

// console.log(email.trim().indexOf("@"))
// console.log(email.trim().indexOf("gmail"))
// console.log(email.trim().endsWith(".com"))
// console.log(email.trim().startsWith("aman"))
// console.log(email.trim().indexOf("@"))
// console.log("Username : ",email.trim().slice(0,4))
// console.log("Domain : ",email.trim().slice(4,14))

// // Exercise 4 — Basic Student Array


// var students = [
//     "Aman",
//     "Jashan",
//     "Simran",
//     "Rahul"
// ];
// console.log (students[0]);
// console.log (students[3]);
// console.log (students.length)
// students[3]="Karan"
// console.log (students)
// students.push("Gurpreet")
// console.log(students)
// students.unshift("Arjun")
// console.log(students)


// // Exercise 5 — Queue Management

// var customers = [
//     "Aman",
//     "Rahul",
//     "Simran"
// ];
// customers.push("Jashan")
// console.log(customers);
// customers.push("Karan")
// console.log(customers);
// customers.shift()
// console.log(customers);
// customers.unshift("Gurpreet")
// console.log(customers);
// customers.pop()
// console.log(customers);


// console.log("Total Wating Customers : ", customers.length)
// console.log ("First Customers : ", customers[0])
// console.log ("Last Customers : ", customers[3])



// // Exercise 6 — Technology List

// var technologies = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node.js"
// ];


// console.log (technologies.includes("React"));
// console.log (technologies.indexOf("javaScript"));
// console.log (technologies.includes("Python"));
// console.log (technologies.slice(1,4))
// console.log (technologies.join("|"))


// // Exercise 7 —  slice() vs splice()

// var colors = [
//     "Red",
//     "Green",
//     "Blue",
//     "Yellow",
//     "Black"
// ];
// console.log("Original Array : ", colors);
// console.log ("new array : ",colors.slice (1,4));

// console.log(colors.splice(1,1));
// console.log (colors)

// // Difference between slice() and splice()

// // Use slice() when you want to read, display, or duplicate a section of data without risking changes to your original database or application state.
// // Use splice() when you need to explicitly delete an item, insert a new item mid-list, or rewrite an existing array in place

// // Exercise 8 — Product Cart

// var cart = [
//     "Laptop",
//     "Mouse",
//     "Keyboard"
// ];
// console.log (cart.push("Moniter"))
// console.log(cart.unshift("Headphone"))
// console.log (cart.splice(1,1))
// console.log(cart.includes("Laptop"))
// console.log(cart.indexOf("Keyboard"))
// console.log(cart.reverse());
// console.log(cart.join("->"));

// // Exercise 9 — Merge Student Groups

// var batchA = [
//     "Aman",
//     "Jashan",
//     "Simran"
// ];
// var batchB = [
//     "Karan",
//     "Rahul",
//     "Gurpreet"
// ];

// let batchc = batchA.concat(batchB)
    // console.log (batchc)
    // console.log (batchc.push("bharat"))
    // console.log (batchc.shift())
    // console.log(batchc.includes("Simran"))
    // console.log(batchc.indexOf("Rahul"))
// for(let i =0; i<batchc.length;i++){
//     console.log(batchc[i])

// }

//     console.log (batchc.join(" ,"))


// Exercise 10 — Complete Course Enrollment System

// var students = [
//     "Aman",
//     "Jashan",
//     "Simran",
//     "Rahul",
//     "Karan"
// ];

// console.log (students.push("Gurpreet","Arjun"))
// console.log(students)
// console.log (students.unshift("Harpreet"))
// console.log(students)
// console.log(students.shift())
// console.log(students.pop())


// console.log(students.includes("Simran","Jashan", "Rahul"))


// let selectedstudents= students.slice(0,3)

// console.log ("Original Student : ", students);
// console.log ("Selected students : ", selectedstudents)



// console.log(students.reverse())

//  for(let i =0; i< students.length; i++){
//     console.log ("student"+i+" : "+ students[i])
//  } 




// console.log ("================================")
// console.log ("       Course Enrollment Report")
// console.log ("================================")
 
// console.log (" Total Students : ", students.length)
// console.log (" First Student : ", students[0])
// console.log (" last Student : ", students[5])
// console.log (" Simran Exists : ", students.includes("Simran"))
// console.log (" Jashan Exists : ", students.includes("Jashan"))
// console.log ("Selected student : " , selectedstudents)
// console.log( "Reversed Students : ", students.reverse())
// console.log (" All students : ", students)

// console.log ("================================")
// console.log ("================================")






