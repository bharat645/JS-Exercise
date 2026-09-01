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

// Print data type of every variable and typeof .

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

// Print data type of every variable and typeof .

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






// // operators Exercise

// // Exercise 1 — Advanced Salary Calculator

// var basicSalary = 60000;
// var bonus = 12000;
// var allowance = 8000;
// var tax = 7500;
// var insurance = 2500;

// var grossSalary = basicSalary + bonus + allowance;
// var totalDeductions = tax + insurance;
// var netSalary = grossSalary - totalDeductions;

// console.log("Gross Salary:", grossSalary);
// console.log("Total Deductions:", totalDeductions);
// console.log("Net Salary:", netSalary);

// console.log(netSalary > 60000);
// console.log(grossSalary < 75000);
// console.log( tax > insurance);
//  console.log(finalAmount >= 50000 && finalAmount <= 80000);




// ## Exercise 2 — Shopping Cart


// var productPrice = 2499;
// var quantity = 4;
// var discount = 1200;
// var deliveryCharge = 150;
// var walletBalance = 10000;

// var subtotal = productPrice * quantity;
// var discountPrice = subtotal - discount;
// var finalPrice = discountPrice;
// var RemainingBalance = walletBalance - finalPrice;

// console.log("subtotal =", subtotal);
// console.log("discountPrice =", discountPrice);
// console.log("finalPrice =", finalPrice+deliveryCharge);
// console.log("RemainingBalance =", RemainingBalance);


// console.log(subtotal > 5000);           
// console.log(finalPrice < walletBalance); 
// console.log(quantity >= 3);              
// console.log(finalPrice < 10000);         
// console.log(discount === 1200);   


// ## Exercise 3 — Student Result Analyzer

// var english = 82;
// var maths = 91;
// var science = 76;
// var computer = 95;
// var punjabi = 88;


// var Totalmarks = english+maths+science+computer+punjabi;
// var percentage = (Totalmarks/500)*100;
// var average = (english+maths+science+computer+punjabi)/5;

// console.log("total marks=",Totalmarks);
// console.log("percentage",percentage);
// console.log("average",average)

// // Then create expressions to check:
// console.log("Percentage >= 80=",percentage >= 80)
// console.log("Maths > English=",maths > english)
// console.log("Computer > 90=",computer > 90)
// console.log("All marks >= 40=", english>=40 && maths >=40 && science >=40 && computer >=40 && punjabi >=40 )
// console.log("At least one subject > 90=", english>90 || maths >90  || science >90|| computer >90|| punjabi >90 )
// console.log( percentage = (60 / 90) * 100);
// var result = percentage >= 60 
//     ? "Student is eligible for scholarship"
//     : "Student is not eligible for scholarship";
//     console.log("Result",result)


    // # Exercise 4 — Advanced Comparison Challenge


// var a = 10;
// var b = "10";
// var c = 20;
// var d = "20";

// console.log("a == b=",a == b) 
// console.log("a === b:",a === b)
// console.log("a != b:",a != b)
// console.log("a !== b:",a !== b)

// console.log("c == d:",c == d)
// console.log("c === d:",c === d)
// console.log("c != d:",c != d)
// console.log("c !== d:",c !== d)

// console.log("a < c:",a < c)
// console.log("a <= c:",a <= c)
// console.log("a > c:",a > c)
// console.log("a>= c:",a >= c)


// ## Exercise 5 — Bank Transaction System



// var balance = 50000;
// var deposit = 15000;
// var withdrawal = 12000;
// var transfer = 10000;


// console.log(balance += deposit);      
// console.log(balance -= withdrawal);    
// console.log(balance -= transfer);      

// console.log("Final Balance:", balance);


// console.log(balance > 50000);

// console.log(balance >= 40000);

// console.log(withdrawal < deposit);

// console.log(balance >= 20000);

// console.log(balance >= 40000 && balance <= 70000);

// var status = balance >= 40000 ? "Healthy Balance" : "Low Balance";

// console.log(status);





// ## Exercise 6 — Employee Bonus Eligibility

// var salary = 85000;
// var experience = 6;
// var performanceScore = 87;
// var attendance = 95;

// console.log("Salary: ",salary >= 50000 )
// console.log("Experience: ", experience >= 5 )
// console.log("Performance: ", performanceScore >= 80)
// console.log("Attendance: ", attendance >= 90 )

// console.log(salary >= 50000 && experience >= 5)
// console.log(performance >= 80 && attendance >= 90)
// console.log(experience >= 5 || performanceScore >= 90)

// var Employee = performanceScore >= 80 ? "Bonus Eligible" : "Bonus Not Eligible";
// console.log(Employee)


// ## Exercise 7 — Electricity Bill

// var units = 450;
// var rate = 8;
// var fixedCharge = 150;
// var discount = 200;

// var energycost = units*rate
// var TotalBeforeDiscount = (units*rate)+fixedCharge 
// FinalBill= (units*rate)+fixedCharge-discount

// console.log(energycost) 
// console.log(TotalBeforeDiscount )
// console.log(FinalBill)


// console.log("Units > 300:", units > 300)
// console.log("Units >= 400:",units >= 400)
// console.log("FinalBill > ₹3,000:", FinalBill > 3000)
// console.log("Discount < fixedCharge:", discount < fixedCharge )
// console.log(units >= 200 && units <= 500);
//  var expensive = units >= 450  ? "are u eligible for discount " : " not eligible for discount"
// console.log(expensive)


// ## Exercise 8 — Movie Ticket System
// var ticketPrice = 250;
// var numberOfTickets = 5;
// var convenienceFee = 30;
// var discount = 100;
// var walletBalance = 2000;

// var ticketCost = ticketPrice * numberOfTickets;
// console.log("Ticket Cost:", ticketCost); 

// console.log("Convenience Fee:", convenienceFee); 

// console.log("Discount:", discount); 

// var finalAmount = ticketCost + convenienceFee - discount;
// console.log("Final Amount:", finalAmount); 

// var remainingBalance = walletBalance - finalAmount;
// console.log("Remaining Balance:", remainingBalance); 

// console.log(numberOfTickets >= 5);
// console.log(finalAmount <= walletBalance); 
// console.log(finalAmount > 1000); 
// console.log(discount > 0); 
// console.log( finalAmount <= walletBalance && numberOfTickets >= 1); 

// var canBuy =
//     finalAmount <= walletBalance && numberOfTickets >= 1
//         ? "Customer Can Buy"
//         : "Customer Cannot Buy";

// console.log(canBuy); 

// # Exercise 9 — Advanced Operator Precedence


// console.log(10 + 20 * 3); 
// // 20* 3 +10 
// // 70

// console.log((10 + 20) * 3);
// // 30*3
// // 90

// console.log(100 / 5 + 10 * 2);
// // 100/5 + 10*2
// // 20+ 20
// // 40

// console.log(100 / (5 + 5) * 2);
// // 100/ 10 *2
// // 10*2
// // 20

// console.log(2 ** 3 * 4);
// // 32

// console.log(10 + 5 * 2 ** 3);
// // 50

// console.log((10 + 5) * 2 ** 2);
// // 60

// console.log(100 - 20 / 5 * 2);
// // 92

// console.log(50 % 7 + 3 * 4);
// // 13
// console.log(2 ** 3 + 4 * 5 - 10 / 2);
// // (2 ** 3 + 4 * 5 - 5)
// // (8 + 4 * 5 - 5)
// // (8 + 20 - 5)
// // 28 -5
// // 22


// var a = 10;

// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);
// console.log(a);

// 10
// 12
// 12
// 10
// 10

// var x = 5;

// console.log(x++);
// console.log(x++);
// console.log(++x);
// console.log(x--);
// console.log(--x);
// console.log(x);

// 5
// 6
// 8
// 8
// 6
// 6

// Explain exactly when the variable changes in:

// x++  this is the post increment
// ++x  this is the pre increment
// x--  this is the post decrement 
// --x  this is the pre decrement

// ## Exercise 11 — Multi-Condition Product System


// var price = 3500;
// var quantity = 3;
// var stock = 10;
// var customerBalance = 15000;
// var isMember = true;

// // Calculate 
// var totalPrice = price * quantity;

// console.log("Total Price:", totalPrice);


// console.log("Quantity is greater than 2:", quantity > 2);

// console.log("Stock is sufficient:", stock >= quantity);

// console.log("Customer has sufficient balance:", customerBalance >= totalPrice);

// console.log("Customer is a member:", isMember);

// console.log("Total is greater than ₹5,000:", totalPrice > 5000);

// // Condition 1
// var canPurchase = (stock >= quantity) && (customerBalance >= totalPrice);

// console.log("Customer can purchase:", canPurchase);

// //  Condition 2
// var specialBenefit = isMember && totalPrice > 5000;

// console.log("Special Benefit:", specialBenefit);
// //  Condition 3

// var noBenefit = !(isMember && totalPrice > 5000);

// console.log("Customer does NOT receive benefit:", noBenefit);


// ## Exercise 12 — Car Finance Calculator
// var carPrice = 1600000;
// var downPayment = 400000;
// var loanAmount = 1100000;
// var monthlyEMI = 25000;
// var months = 60;


// var TotalEMIAmount= monthlyEMI*months;
// console.log(TotalEMIAmount)
// console.log("Total Cost of Car:", carPrice);

// console.log( downPayment > 300000)
// console.log( loanAmount > 1000000)
// console.log( monthlyEMI > 20000)
// console.log( monthlyEMI > 20000)
// console.log( loanAmount ===1100000)
// console.log( TotalEMIAmount > carPrice)
// console.log( months >= 60)
// console.log( monthlyEMI > 20000)


//  var iscarsuitable =
//     carPrice<= TotalEMIAmount
//         ? "yes Car is financially suitable"
//         : "no Car is financially suitable";

// console.log(iscarsuitable); 



// // ## Exercise 13 — Login System Without `if`

// var correctUsername = "admin";
// var correctPassword = "12345";

// var enteredUsername = "admin";
// var enteredPassword = "12345";

// var usernameMatch = enteredUsername === correctUsername;


// var passwordMatch = enteredPassword === correctPassword;

// var loginSuccessful = usernameMatch && passwordMatch;

// console.log("Username Match:", usernameMatch);
// console.log("Password Match:", passwordMatch);
// console.log("Login Successful:", loginSuccessful);

// var loginSuccessful=  enteredUsername === correctUsername && enteredPassword === correctPassword
// ? "you are loginSuccessful" : "Invalid Credentials"

// console.log(loginSuccessful)


// ## Exercise 14 — E-Commerce Order Analyzer

// var productPrice = 2999;
// var quantity = 4;
// var discount = 1500;
// var shipping = 200;
// var walletBalance = 15000;
// var isPremiumMember = true;


// var subtotal = productPrice*quantity
// console.log( "subtotal:", subtotal)
// var discountAmount= subtotal-discount
// console.log ( "discounted Amount:",discountAmount)
// var shippingAmount = shipping*quantity
// console.log(" shipping", shippingAmount )
// var finalAmount = discountAmount+ shippingAmount
// console.log ( "finalAmount", finalAmount)

// console.log("Remaining Wallet Balance:", walletBalance- finalAmount
// )

// Then create Boolean expressions for:


// console.log(subtotal > 10000)
// console.log(quantity >= 4)
// console.log(discount > 1000)
// console.log(isPremiumMember)

// console.log("Wallet balance sufficient:", walletBalance >= finalAmount);

// console.log (quantity >= 3 && isPremiumMember)
// console.log (subtotal > 10000 || isPremiumMember)
// console.log (walletBalance && quantity >= 1)
// console.log(! isPremiumMember)
// ? "you are loginSuccessful" : "Invalid Credentials"
//  console.log(finalAmount >= 5000 && finalAmount <= 15000);

// var orderstatus = finalAmount >= 5000 ? "Order Can Be Placed" : "Insufficient Balance";

// console.log(orderstatus);


// # Exercise 15 —

// ## Build a Complete Online Purchase Calculator


// var productPrice = 4999;
// var quantity = 3;

// var discount = 2000;
// var shipping = 250;

// var walletBalance = 20000;

// var isMember = true;
// var hasCoupon = true;

// var availableStock = 10;

// // ### Part 1 — Calculations

// var subtotal = productPrice*quantity;
// console.log("subtotal: ", subtotal);
  
// var discountAmount = discount*quantity
// console.log("discountAmount: ", discountAmount);

// var shippingCharge = shipping*quantity
// console.log("shippingCharge: ", shippingCharge);

// var finalAmount = subtotal- discountAmount+shippingCharge;
// console.log("finalAmount:", finalAmount)

// var remainingBalance = walletBalance-finalAmount;
// console.log("Remaining Balance", remainingBalance)

// // ### Part 2 — Assignment Operators


// subtotal -= discountAmount;

// console.log("After discount:", subtotal);


// subtotal += shippingCharge;

// console.log("After shipping:", subtotal);


// walletBalance -= finalAmount;

// console.log("Remaining wallet balance:", walletBalance);


// // ### Part 3 — Comparisons


// console.log("Subtotal > ₹10,000:", subtotal > 10000)
// console.log("Quantity >= 3:", quantity >= 3)
// console.log("Available stock >= quantity:", availableStock >= quantity)
// console.log("Discount > ₹1,000:", discount > 1000)
// console.log("Wallet balance >= final amount:",walletBalance >= finalAmount)
// console.log("Final amount < ₹15,000:", finalAmount < 15000)

// // ### Part 4 — Logical Operators

// var stockAvailable = availableStock >= quantity;
// var balanceAvailable = walletBalance >= finalAmount;
// var discountAvailable = discount > 0;

// console.log("Stock Available:", stockAvailable);
// console.log("Balance Available:", balanceAvailable);
// console.log("Discount Available:", discountAvailable);


// var canPurchase = stockAvailable && balanceAvailable;

// console.log("Can Purchase:", canPurchase);

// var specialCustomer = isMember && hasCoupon;

// console.log("Special Customer:", specialCustomer);


// var notMember = !isMember;

// console.log("Not Member:", notMember);

// // ### Part 5 — Ternary Operator

// var purchaseStatus = stockAvailable && balanceAvailable ? "Purchase Successful" : "Purchase Failed";

// console.log(purchaseStatus);

// // ### Part 6 — Increment / Decrement
// var orderCount = 10;
// var stock = 50;
// var quantity = 3;

// orderCount++;

// stock -= quantity;

// console.log("Order Count:", orderCount);
// console.log("Stock:", stock);



// // ### Part 7 — Operator Precedence

// var result1 = 1000 + 500 * 2 - 200 / 2;
// console.log(result1);

// var result2 = (1000 + 500) * 2 - 200 / 2;
// console.log(result2);



// // ### Part 8 — Final Output

// console.log("====================================")
// console.log("         ONLINE ORDER SYSTEM   ")
// console.log("====================================")
// console.log("Product Price:", productPrice)
// console.log("Quantity:",quantity)

// console.log("Subtotal:", subtotal)
// console.log("Discount:",discount)
// console.log("Shipping:", shipping)
// console.log("Final Amount:",finalAmount)
// console.log("Wallet Balance:",walletBalance)

// console.log("Remaining Balance:",remainingBalance)

// console.log("Stock Available:",stockAvailable)
// console.log("Member:",isMember)

// console.log("Coupon Available:", hasCoupon)
// console.log("Can Purchase:", canPurchase)

// console.log("Special Customer:", specialCustomer)

// console.log("Purchase Status:",purchaseStatus)
// console.log("Remaining balance:", remainingBalance)
// console.log("====================================")












// conditional statements

// 

// var age = 19;
// if (age >= 18){
//     console.log("Eligible to Vote")
// }else{
//     console.log("Not Eligible to Vote")
// }

// // Exercise 2 — Positive, Negative or Zero

// var number = -25;
// if(number >=0){
//     console.log("Positive Number")
// }
// else if(number < 0){
// console.log("Negative Number")
// }
// else {
//     console.log("zero")
// }

// Exercise 3 — Even or Odd


// var number = 47;

// if(number %2 == 0){
// console.log("even number")
// }
// else{
// console.log("odd number")
// }

// Exercise 4 — Student Grade Calculator

// var marks = 57;
// if (marks>=90 && marks < 100){
//     console.log("Grade A++")
// }else if (marks>=80 && marks < 90){
//     console.log("Grade A")
// }else if (marks>=70 && marks < 80){
//     console.log("Grade B")
// }else if (marks>=60 && marks < 70){
//     console.log("Grade C")
// }else if (marks>=50 && marks <60){
//     console.log("Grade D")
// }else{
//     console.log("Sorry You are fail")
// }


// Exercise 5 — Largest of Three Numbers





// var a = 45;
// var b = 89;
// var c = 97;

// if (a > b && a > c) {
//     console.log(a + " is the largest number");
// } else if (b > a && b > c) {
//     console.log(b + " is the largest number");
// } else {
//     console.log(c + " is the largest number");
// }

// Challenge

// var a = 60;
// var b = 60;
// var c = 60;

// if (a > b && a > c) {
//     console.log(a + " is the largest number");
// } else if (b > a && b > c) {
//     console.log(b + " is the largest number");

// }else if (a==b&& b==c){
//     console.log("Both are equal")
// }

// else  {
//     console.log(c + " is the largest number");
// }


// Exercise 6 — Login System


// var correctUsername = "adminl";
// var correctPassword = "123459";
// var enteredUsername = "admin";
// var enteredPassword = "123459";

// if (correctUsername===enteredUsername&& correctPassword===enteredPassword){
//     console.log("Login Successful")}

// else if (correctUsername!==enteredUsername && correctPassword!==enteredPassword){
// console.log("Invalid Username and Password")
// }

//  else if (correctUsername !== enteredUsername) {
//     console.log("Invalid Username");
// }
// else if (correctPassword !== enteredPassword) {
//     console.log("Invalid Password");
// }


// Exercise 7 — Employee Bonus System

// var salary = 50000;
// var experience = 6;
// var performanceScore = 95;

// if (experience >= 5 && performanceScore >= 80){
//     if(performanceScore >= 90 ){
//       console.log("→ Excellent Bonus")
//     }
//     else if(performanceScore >= 80){
//         console.log("→ Standard Bonus")
//     }
// }
// else{
//     console.log("Not Eligible for Bonus")
// }

// Exercise 8 — Driving Eligibility System
// var age = 18;
// var hasLicense = false;
// var isSuspended = false;

// if (age >= 18 && hasLicense && !isSuspended) {
//     console.log("Allowed to Drive");
// }
// else if (age < 18) {
//     console.log("Too Young to Drive");
// }
// else if (!hasLicense) {
//     console.log("Driving License Required");
// }
// else if (isSuspended) {
//     console.log("License Suspended");
// }



// Exercise 9 — E-Commerce Discount 
// var purchaseAmount = 12000;
// var isMember = true;
// var hasCoupon = true;

// if (purchaseAmount >= 15000) {
//     mainDiscount = purchaseAmount * 20 / 100;
// } 
// else if (purchaseAmount >= 10000 && purchaseAmount < 15000) {
//     mainDiscount = purchaseAmount * 15 / 100;
// } 
// else if (purchaseAmount >= 5000 && purchaseAmount < 10000) {
//     mainDiscount = purchaseAmount * 10 / 100;
// } 
// else {
//     mainDiscount = 0;
// }

// if (isMember === true) {
//     memberDiscount = purchaseAmount * 5 / 100;
// }

// if (hasCoupon === true) {
//     if (purchaseAmount >= 5000) {
//         couponDiscount = 500;
//     }
// }

// var totalDiscount = mainDiscount + memberDiscount + couponDiscount;
// var finalAmount = purchaseAmount - totalDiscount;

// console.log("Purchase Amount:", purchaseAmount);
// console.log("Main Discount:", mainDiscount);
// console.log("Member Discount:", memberDiscount);
// console.log("Coupon Discount:", couponDiscount);
// console.log("Total Discount:", totalDiscount);
// console.log("Final Amount:", finalAmount);

// Exercise 10 — Student Scholarship System

var marks = 88;
var attendance = 92;
var familyIncome = 400000;
var hasDisciplinaryAction = false;

if