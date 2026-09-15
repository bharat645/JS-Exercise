// var students = ["Aman", "Jashan", "Simran", "Rahul", "Karan"];

// students.forEach((student) => {
//     console.log ("Students : "+student)
// })

// Exercise 2 — forEach() Number Information

// var numbers = [10, 20, 30, 40, 50];
  

// numbers.forEach(function(number){
//     console.log ("index", number)

// })



// Exercise 3 — map() Double Numbers

// var numbers = [2, 4, 6, 8, 10];

// var multi = numbers.map((Number) =>{
//     return Number*2
// })
// console.log( "new array" + multi);
// console.log ("old array"+ numbers);


// Exercise 4 — map() Convert Names

// var names = ["aman", "jashan", "simran", "rahul"];


// var newarray = names.map((name)=>{
//     return name.toUpperCase
// })

// console.log (" new : ", newarray);
// console.log (" old : " , names)

// Exercise 5 — filter() Even Numbers


// var numbers = [11, 20, 33, 40, 55, 60, 72, 81];

// var evennumber = numbers.filter((number) =>{
//     return number % 2 ===0
// })
// console.log (evennumber)


// // Exercise 6 — filter() Passing Marks


// var marks = [35, 78, 42, 29, 91, 55, 38, 88];

// var pass = marks.filter (( mark ) =>{
//     return mark > 40
// })
// var fail = marks.filter ((marks) =>{
//     return marks < 40
// })
// console.log ("Passed students marks :" + pass);
// console.log ('fail students marks :' +fail)

// // Exercise 7 — find() First Match


// var salaries = [18000, 22000, 28000, 35000, 42000, 55000];

// var firstsalary = salaries.find  (( salary ) =>{
//     return salary > 30000
// })

// var secondsalary = salaries.find  (( salary ) =>{
//     return salary > 50000
// })

// console.log ("first salary greater than ₹30,000. : "+ firstsalary)
// console.log ("second salary greater than ₹50,000. : " + secondsalary)


// Exercise 8 — find() Name Search


// var students = [
//     "Aman",
//     "Jashan",
//     "Gurpreet",
//     "Simran",
//     "Karan"
// ];

// var largerlenth = students.find((student) =>{
//     return student.length >6

// })
// console.log (" First long Name " + largerlenth);

// Exercise 9 — some() Eligibility

// var ages = [12, 15, 17, 16, 21, 14];

// var eligible = ages.some((age)=>{
//     return age >18
// })

// console.log (" Is any adult Present? : " + eligible)


// Exercise 10 — every() Passing System

// var marks = [55, 72, 48, 91, 67];

// var passed = marks.every((mark)=>{
//     return mark >= 40
// })

// console.log (passed)


// Exercise 11 — some() vs every()

// var numbers = [12, 24, 36, 48, 60];

// var divideby5 = numbers.some((number) =>{
//     return  number % 5 ===0
// })
// var divideby2 = numbers.every((number) =>{
//     return  number % 2 ===0
// })
// var greater50 = numbers.some((number) =>{
//     return  number>50
// })
// var greater10 = numbers.some((number) =>{
//     return  number>10
// })
// console.log ("Is any number divisible by 5? : "+ divideby5 )
// console.log ("Are all numbers divisible by 2? : " +divideby2)
// console.log ("Is any number greater than 50? : "+greater50 )
// console.log ("Are all numbers greater than 10? : " +greater10 )

// Exercise 12 — reduce() Total Cart Value

// var prices = [1200, 850, 2300, 499, 1500];
//  var discount = 500;

// var total = prices.reduce((sum ,price) =>{
//     return sum +price
// },0)

// console.log ("Total Cart Value:" + total);
// var finalamount = total- discount
// console.log (" Discount : 500")
// console.log ("final Amount : ", finalamount)

// Exercise 13 — reduce() Largest Number

// var numbers = [45, 89, 23, 145, 67, 201, 99];
// var smallestNumber = numbers.reduce((sums, number) => {
//     return number < sums ? number : sums;
// },);

// console.log("Smallest Number:", smallestNumber); 


// var smallestNumber = numbers.reduce((sums, number) => {
//     return number < sums ? number : sums;
// },);

// console.log("Largest Number:", smallestNumber); 
// Expected Output: Smallest Number: 23

// Expected Output: Smallest Number: 23


// Exercise 14 — sort() Numbers

// var numbers = [100, 5, 75, 25, 200, 1, 50];

// var ascending = numbers.sort ((a, b)=>{
//     return a - b
// })
// console.log ("Ascending Order",ascending)
// var descending = numbers.sort ((a, b)=>{
//     return b - a
// })
// console.log ("Descending Order",descending)


// Exercise 15 — Sort Student Names

// var students = [
//     "Simran",
//     "Aman",
//     "Rahul",
//     "Jashan",
//     "Karan",
//     "Gurpreet"
// ];

// students.sort()
// console.log (students)
// students.sort().reverse()
// console.log (students)

// Exercise 16 — Salary Analysis

// var salaries = [
//     18000,
//     25000,
//     32000,
//     45000,
//     28000,
//     60000,
//     75000,
//     22000
// ];

// var greater30000  = salaries.filter((salary)=>{
//     return salary >=30000
// })
 
// var salaryincrease = salaries.map((salary) =>{
//     return salary* 10/100 
// })

// var above50K = salaries.find ((salary)=>{
//     return salary >50000
// })
// var earn70K = salaries.some ((salary)=>{
//     return salary >70000
// })
// var earn15k = salaries.every ((salary) =>{
//     return salary >15000
// })
// var total = salaries.reduce ((sum ,salary) =>{
//     return sum + salary;
// },0)

// var ascendingsalary = salaries.sort((a,b)=>{
//     return a-b;
// })
// console.log (greater30000)
// console.log (salaryincrease)
// console.log (above50K)
// console.log (earn70K)
// console.log (earn15k)
// console.log (total)
// console.log (ascendingsalary)


// Exercise 17 — Marks Analysis

// var marks = [
//     45,
//     78,
//     92,
//     35,
//     88,
//     67,
//     29,
//     95,
//     56,
//     81
// ];


// var passedmarks =marks.filter((mark) =>{
//     return mark >=40
// })
// var Failedmarks =marks.filter((mark) =>{
//     return mark < 40
// })
// var topper =marks.filter((mark) =>{
//     return mark >=80
// })

// var bonus = marks.map((mark) =>{
//     return mark +5
// })
// var firstposition = marks.filter((mark)=>{
//     return mark>=90
// })
// var studentscore = marks.some((mark)=>{
//     return mark>=95
// })
// var studentpass = marks.every((mark)=>{
//     return mark>= 40
// })

// var total = marks.reduce(( sum,mark) =>{
//     return sum + mark ;
// },0 )

//
// var averageMarks = totalMarks / marks.length;
// console.log("Average marks: " + averageMarks);
// var marksascending = marks.sort((a,b) =>{
//     return a - b
// });

// var marksdescending = marks.sort((a,b) =>{
//     return b - a
// });

// console.log(passedmarks);
// console.log(Failedmarks);
// console.log(topper)
// console.log(bonus)
// console.log(firstposition)
// console.log(studentscore)
// console.log(studentpass)
// console.log(total)
// console.log(averagemarks)
// console.log (marksascending)
// console.log (marksdescending)


// Exercise 18 — E-Commerce Price Analyzer

// var prices = [
//     299,
//     1499,
//     799,
//     2499,
//     499,
//     3499,
//     999,
//     1999
// ];


// var costing = prices.every((price)=>{
//     return price >1000
// })
// console.log (costing)

//  var discount = prices.map((price) =>{
//     return price * 10/100
// })
// console.log (discount)

// var largestcost = prices.find((price) =>{
//     return price > 2000;
// })
// console.log (largestcost)


// var cost3k = prices.some((price) =>{
//     return price > 3000;
// })
// console.log (cost3k);


// var cost1k = prices.every((price) =>{
//     return price > 3000;
// })
// console.log (cost1k);


// var totalvalue = prices.reduce (( sum,price)=>{
//     return sum + price
// },0)
// console.log (totalvalue)

// var averageprice = totalvalue / prices.length;
// console.log("Average price : " + averageprice);

//  var priceascending = prices.sort((a,b) =>{
//     return a - b
// });
// console.log (priceascending)
// var pricedescending = prices.sort((a,b) =>{
//     return b - a
// });
// console.log (pricedescending)

// let finalamount = (totalvalue-discount)
// console.log (finalamount)

// Exercise 19 — Employee Performance System


// var performanceScores = [
//     45,
//     82,
//     91,
//     67,
//     38,
//     76,
//     95,
//     88,
//     59,
//     73
// ];


// var highscore = performanceScores.filter ((performanceScore) =>{
//     return performanceScore >=75
// })


// var lowscore = performanceScores.filter ((performanceScore) =>{
//     return performanceScore <=40
// })

// var bonus = performanceScores.map((performanceScore)=>{
//     return performanceScore + 5
// })

// var firstscore = performanceScores.find((performanceScore) =>{
//     return performanceScore >90
// })

// var employeescore = performanceScores.some((performanceScore) =>{
//     return performanceScore <40
// })

// var allemployeescore = performanceScores.every((performanceScore) =>{
//     return performanceScore >=35
// })
//  var totalscore= performanceScores.reduce(( sum,performanceScore)=>{
//     return sum + performanceScore;
//  },0)

// var sortscore = performanceScores.sort((a,b)=>{
//     return a-b
// })
// var averagescore = totalscore / performanceScores.length;


// console.log ("================================")
// console.log ("      PERFORMANCE REPORT  ")
// console.log ("================================")
//  console.log("Total Employees: " +performanceScores.length)
// console.log("Average score :  " + averagescore);

// console.log ("High Performers: "+ highscore)
// console.log ("Poor Performers: "+lowscore)
// console.log ("First Excellent Score: "+firstscore);
// console.log ("Any Poor Performance: "+ employeescore);
// console.log ("Everyone >= 35: "+ allemployeescore);
// console.log ("Scores High → Low: " +sortscore)
// console.log ("================================")


// Exercise 20 — Complete Student Analytics System

var marks = [
    78,
    45,
    92,
    67,
    34,
    88,
    56,
    95,
    41,
    73,
    29,
    84,
    61,
    95,
    52
];

marks.forEach((mark)=>{
    console.log ("student :" + mark )
    if ( mark >=40){
        console.log ("Pass ")
    }
    else {
        console.log ("fail")
    }
    
})


var passedstudent = marks.filter((mark)=>{
    return  mark >40 
})
// console.log ("passed students : ", passedstudent);



var failstudent = marks.filter((mark)=>{
    return  mark <40 
})
// console.log ("Fail students : ", failstudent);


var above80 = marks.filter((mark)=>{
    return  mark >80 
})
// console.log ("80+ students : ", above80);



var above90 = marks.filter((mark)=>{
    return  mark >90 
})
// console.log ("90+  students : ", above90);


var below50 = marks.filter((mark)=>{
    return  mark <50 
})
// console.log ("below 50 students : ", below50);

// Part C — map()

var grace = marks.map((mark)=>{
    return  mark + 5 
})
// console.log ("after grace students : ", grace);


// Part D — find()

var firststudent = marks.find((mark)=>{
    return  mark >90; 
})
// console.log ("First student with 90+ marks : ", firststudent);

var firstfailstudent = marks.find((mark)=>{
    return  mark <40; 
})
// console.log ("First  failed student : ", firstfailstudent);

var above95 = marks.find((mark)=>{
    return  mark >=95; 
})
// console.log ("First student with 90+ marks : ", firststudent);


// Part E — some()

var score95 = marks.some((mark)=>{
    return mark >95
})
// console.log (score95)
var anyfail = marks.some((mark)=>{
    return mark <40
})
// console.log (anyfail)
var below30 = marks.some((mark)=>{
    return mark <30
})
// console.log (below30)

// Part F — every()

var atleast25 = marks.every((mark)=>{
    return mark >25
})
// console.log (atleast25)
var anyonepass = marks.every((mark)=>{
    return mark >40
})
// console.log (anyonepass)
var validmarks  = marks.every((mark)=>{
    return mark<0 && mark >=100
})
// console.log (validmarks)

// Part G — reduce()


var totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
// console.log("Total marks: " + totalMarks);

var averageMarks = totalMarks / marks.length;
// console.log("Average marks: " + averageMarks);

var smallestNumber = marks.reduce((sums, mark) => {
    return mark < sums ? mark : sums;
},);

console.log("Smallest Number:", smallestNumber); 


var largestNumber = marks.reduce((sums, mark) => {
    return mark > sums ? mark : sums;
},);

console.log("Largest Number:", largestNumber); 

// Part H — sort()

 var marksascending = marks.sort((a,b)=>{
    return a-b
})
// console.log (marksascending)

 var marksdescending = marks.sort((a,b)=>{
    return b-a
})
// console.log (marksdescending)


// Part I — Method Chaining
var result = marks.filter(mark => mark >= 60)
.map(mark => mark + 5); 
// console.log(result);

console.log ("====================================")
console.log ("    STUDENT ANALYTICS REPORT  ")
console.log ("====================================")

console.log (" Total student :" + marks.length )
console.log ("passed students : ", passedstudent.length);
console.log ("Fail students : ", failstudent.length);
console.log("Average marks: " + averageMarks);

console.log ("80+ students : ", above80.length);
console.log ("90+  students : ", above90.length);
console.log("Smallest Number:", smallestNumber); 
console.log("Largest Number:", smallestNumber); 



console.log ("Any Student Failed: "+anyfail)
console.log ("Everyone Passed: "+ anyonepass)
console.log ("All Marks Valid: "+validmarks)



console.log ("Original Marks: "+ marks)
console.log ("Marks Low → High: "+ marksascending)
console.log ("Marks High → Low: " + marksdescending)


console.log ("After Grace Marks:" + grace)