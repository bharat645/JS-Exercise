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


// Exercise 5 — Queue Management

var customers = [
    "Aman",
    "Rahul",
    "Simran"
];
customers.push("Jashan")
console.log(customers);
customers.push("Karan")
console.log(customers);
customers.shift()
console.log(customers);
customers.unshift("Gurpreet")
console.log(customers);
customers.pop()
console.log(customers);


console.log("Total Wating Customers : ", customers.length)
console.log ("First Customers : ", customers[0])
console.log ("Last Customers : ", customers[3])



// Exercise 6 — Technology List

var technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
];


console.log (technologies.indexOf("React"));
console.log (technologies.indexOf("javaScript"));
console.log (technologies.indexOf("Python"));
console.log (technologies.slice(1,4))
