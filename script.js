// Exercise 1 — Console Practice
// console.log("Welcome to JavaScript")
// console.log("My name is Bharat")
// console.log("I am learning JavaScript")
// console.log("Java Script is a progromming language")
// console.log("I will become a frontend developer")


// Exercise 2 — Variables & Console :


// 1 var firstName

// var firstName = " Bharat";
// var lastName = " Singh";
// var age = " 25";
// var city ="Ludhiana";
// var country =" India"


// console.log("First Name:", firstName);
// console.log("Last Name:", lastName);
// console.log("Age:", age);
// console.log("City:", city);
// console.log("Country:", country);


// // 2 var first_name

// var first_name = " Bharat";
// var last_name = " Singh";
// var age = " 25";
// var city ="Ludhiana";
// var country =" India"


// console.log("First Name:", firstName);
// console.log("Last Name:", lastName);
// console.log("Age:", age);
// console.log("City:", city);
// console.log("Country:", country);


// // 3 var first_name

// var first_name = " Bharat";
// var last_name = " Singh";
// var age = " 25";
// var city ="Ludhiana";
// var country =" India"


// console.log("First Name:", firstName);
// console.log("Last Name:", lastName);
// console.log("Age:", age);
// console.log("City:", city);
// console.log("Country:", country);


// Exercise 3 — Identifier Detective

// valid 
// var firstName = " Rahul";
// var first_name = " Ajay";
// var firstName2 = " Ram";
// var $firstName = " Bharat";
// var  FIRSTNAME= " Ajay";

// Not Valid

// var first Name = " Rahul";   
// (Space are not allow)

// var first-name = " Ajay";
// (hyphen(-) are not allow )

// var 23firstName = " Ram";
// (identifier name cannot start with number)

// var @firstName = " Bharat";
// (At symbol(@) are not allow)

// var  FIRSTNAME= " Ajay";

// var let = " Bharat";
// (Keyword cannot define the identifier name)


// Exercise 4 — Case Sensitivity Challenge

// var name = "Bharat";
// var Name = "Jashan";
// var NAME = "Singh";
// var nAmE = "Developer";

// console.log(name);
// console.log(Name);
// console.log(NAME);
// console.log(nAmE);

// 1. Are these four variables the same ?
//     Ans No these 4 variables are different because javaScript are Case Sensitivite.
  
// 2. What will happen if you write:
// console.log(name);
// console.log(Name);
// console.log(NAME);
// console.log(nAmE);

// Ans  javaScript are Case Sensitivite. Each variable will print its own value. 


// 3. What does this tell you about JavaScript identifiers?

// Ans JavaScript is case-sensitive, so identifiers with different uppercase and lowercase letters are treated as different identifiers

// Example 
// var city = "Ludhiana";
// var City = "Mohali";
// var CITY = "Chandigarh";

// console.log(city)
// console.log(City)
// console.log(CITY)


// Exercise 5 — Student Profile Challenge



// Student Information
// var firstName = "Bharat";
// var lastName = "Kumar";
// var age = 21;
// var gender = "Male";

// // Education Information
// var college = "CGC";
// var course = "BCA";

// // Location Information
// var city = "Abohar";
// var country = "India";

// // Student Profile
// console.log("=====================================");
// console.log("       STUDENT PROFILE");
// console.log("=====================================");

// console.log("First Name:", firstName);
// console.log("Last Name:", lastName);
// console.log("Age:", age);
// console.log("Gender:", gender);
// console.log("College:", college);
// console.log("Course:", course);
// console.log("City:", city);
// console.log("Country:", country);

// console.log("==============================");




// Lecture = 2 Datatype & typeof
 
// Exercise 1 — Identify Data Types

// var name = "Hello";
// var b = 100;
// var c = 99.99;
// var d = true;
// var e = false;
// var f;
// var g = null;

// console.log("value =",name);
// console.log("type=",typeof(name))


// console.log("value =",b);
// console.log("type=",typeof(b))


// console.log("value =",c);
// console.log("type=",typeof(c))

// console.log("value =",d);
// console.log("type=",typeof(d))


// console.log("value =",e);
// console.log("type=",typeof(e))


// console.log("value =",f);
// console.log("type=",typeof(f))


// console.log("value =",g);
// console.log("type=",typeof(g))





// Exercise 2 — Student Information

  

// var name = "Bharat";
// var age = 21;
// var is_student = true;
// var city = "Abohar";
// var  college= "cgc";
// var profile = null;


// console.log("Student name =",name);
// console.log("type=",typeof(name))


// console.log("Age =",age);
// console.log("type=",typeof(age))


// console.log("Is student =", is_student);
// console.log("type=",typeof(is_student))

// console.log("City =",city);
// console.log("type=",typeof(city))


// console.log("College =",college);
// console.log("type=",typeof(college))

// console.log("Profie picture =",profile);
// console.log("type=",typeof(profile))


// Exercise 3 — Find and Fix the Data Types
// question
// var age = "21";
// var price = "999.99";
// var isLoggedIn = "true";
// var studentName = 100;
// var phoneNumber = 9876543210;
// var city = true;
 
// 1 Identify which variables have incorrect data types.
// Answer

// All six variables have incorrect data types and need to be corrected according to the type of data they represent.

// Correct  values.

// var age = 21;
// var price = 999.99;
// var isLoggedIn = true;
// var studentName = "100";
// var phoneNumber = "9876543210";
// var city = "Chandigarh";

// // Print every variable
// console.log(age);
// console.log(price);
// console.log(isLoggedIn);
// console.log(studentName);
// console.log(phoneNumber);
// console.log(city);

// // Print data type of every variable
// console.log(typeof age);
// console.log(typeof price);
// console.log(typeof isLoggedIn);
// console.log(typeof studentName);
// console.log(typeof phoneNumber);
// console.log(typeof city);


// // Exercise 4 — Undefined vs Null

// var userName;  //undefined      
// // undefined: A variable is declared but no value is assigned to it.

// var profileImage = null;   //null
// // null: We intentionally assign "no value" or an empty value to a variable.

// var phoneNumber;    //undefined 
// var address = null;    //null

// // Print every variable

// console.log("Username", userName);
// console.log("Profile Image", profileImage);
// console.log("Phone number", phoneNumber);
// console.log("Address", address);

// // Print data type of every variable


// console.log("Type =",typeof (userName))
// console.log("type =",typeof( profileImage))
// console.log("type =", typeof(phoneNumber))
// console.log("type =", typeof(address))

// // the difference between undefined and null.


// // Main difference:
// // undefined = value is not assigned yet.
// // null = intentionally set to "no value".


// Exercise 5 — Product Information


// var productName = "iPhone";
// var price = 79999;
// var quantity = 2;
// var inStock = true;
// var discount = null;
// var productCode;
  
// Print every variable

// console.log("Product name =", productName)
// console.log("Price =", price)
// console.log("Quantity =", quantity)
// console.log("Instock =", inStock)
// console.log("discount =", discount)
// console.log("Product code =", productCode)

// Print data type of every variable

// console.log("Type =",typeof (productName))
// console.log("type =",typeof( price))
// console.log("type =", typeof(quantity))
// console.log("type =", typeof(inStock))
// console.log("type =",typeof( discount))
// console.log("type =", typeof(productCode))





// Exercise 6 — String or Number?

// var a = 100;
// var b = "100";
// var c = 50.5;
// var d = "50.5";
// var e = "5000";
// var f = 5000;

// //  print each value or types

// console.log("value =",a);
// console.log("type=",typeof(a))


// console.log("value =",b);
// console.log("type=",typeof(b))


// console.log("value =",c);
// console.log("type=",typeof(c))

// console.log("value =",d);
// console.log("type=",typeof(d))


// console.log("value =",e);
// console.log("type=",typeof(e))


// console.log("value =",f);
// console.log("type=",typeof(f))


// // Identify which values are numbers.

// // Ans Number: A number is a data type used to store numeric values, such as 10, 25.5, or 20.

// // Identify which values are strings.

// // String: A string is a data type used to store text or characters, written inside quotes.





// // Exercise 7 — Boolean Challenge

// var isLoggedIn = true;
// var isAdmin = false;
// var isStudent = false;
// var hasPaid = true;
// var isActive = false;

// Print every variable

// console.log("IsLoggedIn = ",  isLoggedIn);
// console.log("IsAdmin = ",  isAdmin);
// console.log("IsStudent = ", isStudent);
// console.log("HasPaid = ", hasPaid);
// console.log("IsActive = ",  isActive);


// // Print data type of every variable

// console.log("Type =",typeof (isLoggedIn));
// console.log("type =",typeof(isAdmin));
// console.log("type =", typeof(isStudent));
// console.log("type =", typeof(hasPaid));
// console.log("type =",typeof( isActive));

// // Exercise 8 — Employee Profile

// var employeeName = "Bharat";
// var employeeId = 234;
// var age = 21;
// var salary = 24500;
// var ispermenent = true;
// var department = "computer application";
// var profilePicture = null;

// // Print every variable

// console.log( "EmployeeName", employeeName);
// console.log( "EmployeeId", employeeId);
// console.log( "Age", age);
// console.log( "Salary", salary);
// console.log( "Is permenent", ispermenent);
// console.log( "department", department);
// console.log("Profile Picture", profilePicture);



// // // Print data type of every variable

// console.log("Type =",typeof (employeeName));
// console.log("type =",typeof(employeeId));
// console.log("type =", typeof(age));
// console.log("type =", typeof(salary));
// console.log("type =",typeof( ispermenent));
// console.log("type =",typeof( department));
// console.log("type =",typeof( profilePicture));


// Exercise 9 — BigInt & Symbol

// var normalNumber = 999999999;
// var bigNumber = 123456789012345678901234567890n;
// var uniqueId = Symbol("userId");

// // // Print every variable

// console.log( "NormalNumber", normalNumber);
// console.log( "BigNumber", bigNumber);
// console.log( "UniqueId", uniqueId);



// // // Print data type of every variable

// console.log("Type =",typeof (normalNumber));
// console.log("type =",typeof(bigNumber));
// console.log("type =", typeof(uniqueId));


// // Exercise 10 — Student Report Challenge

// var studentName = "Jashan";
// var age = 21;
// var course = "BCA";
// var college = "GGN";
// var englishMarks = 85;
// var mathsMarks = 92;
// var scienceMarks = 88;
// var computerMarks = 95;
// var isPassed = true;
// var result = "Pass";
// var profilePicture = null;

// // Part 1 — Print Values

// console.log("==============================");
// console.log("        Student Report");
// console.log("==============================");

// console.log("Student Name:", studentName);
// console.log("Age:", age);
// console.log("Course:", course);
// console.log("College:", college);
// console.log("English Marks:", englishMarks);
// console.log("Maths Marks:", mathsMarks);
// console.log("Science Marks:", scienceMarks);
// console.log("Computer Marks:", computerMarks);
// console.log("Passed:", isPassed);
// console.log("Result:", result);
// console.log("Profile Picture:", profilePicture);

// console.log("==============================");

// // Part 2 — Print Data Types

// console.log("Type = ",typeof (studentName));
// console.log("Type = ",typeof (age));
// console.log("Type = ",typeof (course));
// console.log("Type = ",typeof (college));
// console.log("Type = ",typeof (englishMarks));
// console.log("Type = ",typeof (mathsMarks));
// console.log("Type = ",typeof (scienceMarks));
// console.log("Type = ",typeof (computerMarks));
// console.log("Type = ",typeof (isPassed));
// console.log("Type = ",typeof (result));
// console.log("Type = ",typeof (profilePicture));

// // Part 3 — Type Verification

// // studentName     → string
// // age             → number
// // course          → string
// // college         → string
// // englishMarks    → number
// // mathsMarks      → number
// // scienceMarks    → number
// // computerMarks   → number
// // isPassed        → boolean
// // result          → string
// // profilePicture  → object

// // Part 4 — Interview Question

// // What is the difference between:
// // var age = 21;
// // and
// // var age = "21";
// // answer : Quotes " " make 21 a string. Without quotes, 21 is a number.
// // What will typeof return for both?

// // Answer:

// // 21 = number
// // "21" = string