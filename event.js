


let form = document.querySelector("#myForm");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmpassword = document.querySelector("#confirmpassword");
let age = document.querySelector("#age");
let city = document.querySelector("#city");

name.addEventListener("input", function () {
    if (name.value.trim() === "") {
        errorusername.innerText = "Name is required";
    } else {
        errorusername.innerText = "";
    }
});
email.addEventListener("blur", function () {
    if (name.value.trim() === "") {
        errorusername.innerText = "Name is required";
    }
});



form.addEventListener("submit", function (event) {

    event.preventDefault();

    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let confirmpasswordValue = confirmpassword.value.trim();
    let ageValue = Number(age.value);
    let cityValue = city.value.trim();
    let isValid= true

    if (nameValue === "") {
        errorusername.innerText = "Name is required";
        isValid=false;
    }

    if (!emailValue.includes("@")) {
        erroremail.innerText = "Invalid email";
        isValid=false
    }

    if (!emailValue.endsWith(".com")) {
        erroremail.innerText = "Email must end with .com";
        isValid=false
    }

    if (passwordValue.length < 8) {
        errorpassword.innerText = "Password must be at least 8 characters";
   isValid=false
    }

    let passwordPattern =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!passwordPattern.test(passwordValue)) {
        errorpassword.innerText =
            "Password must contain uppercase, lowercase, number, special character and 8 characters";
    }

    if (confirmpasswordValue !== passwordValue) {
        errorconfirmpassword.innerText = "Passwords do not match";
        isValid=false
    }


    if (ageValue < 18 || ageValue > 60) {
        errorage.innerText = "Age must be between 18 and 60";
        isValid=false
    }

    if (cityValue === "") {
        errorcity.innerText = "City is required";
        isValid=false
    }
    
         if (isValid) {
        result.innerText = "Successfully submitted the form";
    } else {
        result.innerText = "";
    }
    
});




// var products = [
//     { name: "Laptop", price: 65000 },
//     { name: "Mouse", price: 1200 },
//     { name: "Keyboard", price: 2500 },
//     { name: "Monitor", price: 15000 }
// ];

// var cart = [];

// let productsContainer = document.querySelector("#products");
// let cartContainer = document.querySelector("#cart");

// let cartItems = document.querySelector("#cartItems");
// let totalAmount = document.querySelector("#totalAmount");

// let clearCart = document.querySelector("#clearCart");


// products.forEach(function (product) {

//     let productDiv = document.createElement("div");

//     let productName = document.createElement("h3");
//     productName.innerText = product.name;

//     let productPrice = document.createElement("p");
//     productPrice.innerText = "price" + product.price;

//     let addButton = document.createElement("button");
//     addButton.innerText = "add to Cart";

//     addButton.addEventListener("click", function () {

//         cart.push(product);

//         updateCart();
//     });
//  clearCart.addEventListener("click", function () {

//         cart.pop(product);

//         updateCart();
//     });
//     productDiv.appendChild(productName);
//     productDiv.appendChild(productPrice);
//     productDiv.appendChild(addButton);

//     productsContainer.appendChild(productDiv);
// });
// function updateCart() {

//     cartContainer.innerHTML = "";

//     cartItems.innerText = cart.length;

//     let total = 0;

//     cart.forEach(function (product) {

//         total = total + product.price;

        
//     });

//     totalAmount.innerText = total;
// }




// let name = document.querySelector("#name");
// let emarks = document.querySelector("#englishmarks");
// let mmarks = document.querySelector("#mathmarks");
// let smarks = document.querySelector("#sciencemarks");
// let btn = document.querySelector("#resultbtn");
// let errorusername = document.querySelector("#errorusername"); 

// btn.addEventListener("click", function() {
//     let nameValue = name.value.trim();

//     let e = Number(emarks.value);
//     let m = Number(mmarks.value);
//     let s = Number(smarks.value);

//     if (nameValue === "") {
//         errorusername.innerText = "Name is required";
//         return;
//     } else {
//         errorusername.innerText = "";
//     }
//     if(e<0||e>100){
//         errorenglishmarks.innerText= "not valid"
//         return;
//     }
//     if(m<0||m>100){
//         errormathmarks.innerText= "not valid"
//         return;
//     }
//     if(s<0||s>100){
//         errorsciencemarks.innerText= "not valid"
//         return;
//     }
    


//     var total = e + m + s;
//     var average = total / 3;
//     var percentage = (total / 300) * 100;
//         var grade = "";
//     if (percentage > 90) {
//         grade = "A++";
//     } else if (percentage > 80) {
//         grade = "A";
//     } else if (percentage > 70) {
//         grade = "B";
//     } else if (percentage > 60) {
//         grade = "C";
//     } else if (percentage > 50) {
//         grade = "D";
//     } else {
//         grade = "F";
//     }
//     var finalresult = "";
//     if (e >= 40 && m >= 40 && s >= 40) {
//         finalresult = "Pass";
//     } else {
//         finalresult = "Fail";
//     }

//     btn.innerHTML = `
//         <h2>Student Result</h2>
//         Name: ${nameValue}<br>
//         English Marks: ${e}<br>
//         Math Marks: ${m}<br>
//         Science Marks: ${s}<br>
//         Total: ${total}<br>
//         Average: ${average}<br>
//         Grade: ${grade}<br>
//         Final Result: ${finalresult}<br>
//     `;
// });







// var employees = [
//     { name: "Aman", department: "Development", salary: 35000 },
//     { name: "Simran", department: "Design", salary: 30000 },
//     { name: "Jashan", department: "Development", salary: 50000 },
//     { name: "Rahul", department: "HR", salary: 28000 },
//     { name: "Karan", department: "Development", salary: 42000 }
// ];

// let name = document.querySelector("#name");
// let department = document.querySelector("#department");
// let salary = document.querySelector("#salary");
// let btn = document.querySelector("#search");
// let result = document.querySelector("#result");

// btn.addEventListener("click", function () {

//     var searchValue = name.value.toLowerCase().trim();
//     var selectedDept = department.value;
//     var minSalary = Number(salary.value) ;

//     var filteredEmployees = employees.filter(emp => {

//         var matchesName = emp.name.toLowerCase().includes(searchValue);

//         var matchesDept =
//             selectedDept === "All" ||
//             emp.department === selectedDept;

//         var matchesSalary = emp.salary >= minSalary;

//         return matchesName && matchesDept && matchesSalary;
//     });

//     result.innerHTML = "";

//     filteredEmployees.forEach(emp => {
//         result.innerHTML += `
//             <div>
//                 <h3>${emp.name}</h3>
//                 <p>Department: ${emp.department}</p>
//                 <p>Salary: ₹${emp.salary}</p>
//             </div>
//         `;
//     });

// });


// var tasks = [];

// var taskInput = document.querySelector("#taskInput");
// var priority = document.querySelector("#priority");
// var addBtn = document.querySelector("#addBtn");
// var taskList = document.querySelector("#taskList");

// var total = document.querySelector("#total");
// var completed = document.querySelector("#completed");
// var pending = document.querySelector("#pending");

// var error = document.querySelector("#error");


// addBtn.addEventListener("click", addTask);


// taskInput.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         addTask();
//     }
// });


// function addTask() {

//     var title = taskInput.value.trim();

//     if (title === "") {
//         error.innerText = "please enter a tasks";
//         return;
//     }


//     var task = {
//         title: title,
//         priority: priority.value,
//         completed: false
//     };

//     tasks.push(task);

//     taskInput.value = "";

//     displayTasks();
//     updateCounters();
// }


// function displayTasks() {

//     taskList.innerHTML = "";

//     tasks.forEach(function (task, index) {

//         var div = document.createElement("div");

//         var title = document.createElement("p");
//         title.innerText = task.title;

//         var priorityText = document.createElement("p");
//         priorityText.innerText =  task.priority;


//         var completeBtn = document.createElement("button");
//         completeBtn.innerText = "Complete";

//         completeBtn.addEventListener("click", function () {

//             task.completed = true;

//             displayTasks();
//             updateCounters();

//         });


//         var deleteBtn = document.createElement("button");
//         deleteBtn.innerText = "Delete";

//         deleteBtn.addEventListener("click", function () {

//             tasks.splice(index, 1);

//             displayTasks();
//             updateCounters();

//         });


//         div.appendChild(title);
//         div.appendChild(priorityText);
//         div.appendChild(completeBtn);
//         div.appendChild(deleteBtn);

//         taskList.appendChild(div);
//     });
// }


// function updateCounters() {

//     var completedCount =    0;

//     tasks.forEach(function (task) {

//         if (task.completed === true) {
//             completedCount++;
//         }

//     });

//     total.innerText = tasks.length;
//     completed.innerText = completedCount;
//     pending.innerText = tasks.length - completedCount;
// }


