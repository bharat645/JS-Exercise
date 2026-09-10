var correctPin = 1234;
var balance = 50000;
var accountActive = true;
var dailyWithdrawalLimit = 250000;
var transactionCount = 0;
var minimumBalance = 2000;
var premiumCustomer = true;

function verifyPin(enteredPin) {

    if (enteredPin === correctPin) {
        return true
    }
    else {
        return false
    }

}
function checkBalance(balance) {
    console.log("current Balance " + balance)

}
function deposit(currentBalance, amount) {
    if (amount <= 0) {
        console.log("→ Invalid Deposit Amount")

    }
    else if (amount > 50000) {
        console.log("→ Maximum single deposit is ₹50,000")
    }
    else {
        currentBalance = currentBalance + amount;

        console.log("Deposit Successful");
        console.log("New Balance: " + currentBalance);
        transactionCount++;

        return currentBalance;

    }

}

function withdraw(currentBalance, amount) {

    if (amount <= 0) {
        console.log("Invalid Withdrawal Amount");
        return currentBalance;
    }

    else if (amount > dailyWithdrawalLimit) {
        console.log("Daily Withdrawal Limit Exceeded");
        return currentBalance;
    }

    else if (amount % 100 !== 0) {
        console.log("Please Enter Amount in Multiples of 100");
        return currentBalance;
    }

    let transactionFee = 0;


    if (amount > 10000 && premiumCustomer === false) {
        transactionFee = 50;
    }

    let totalDeduction = amount + transactionFee;

    if (totalDeduction > currentBalance) {
        console.log("Insufficient Balance");
        return currentBalance;
    }

    else if (currentBalance - totalDeduction < minimumBalance) {
        console.log("Transaction Declined");
        console.log("Minimum ₹2000 Balance Must Be Maintained");
        return currentBalance;
    }

    else {

        currentBalance = currentBalance - totalDeduction;

        console.log("Withdrawal Successful");
        console.log("New Balance:", currentBalance);

        if (transactionFee > 0) {
            console.log("Transaction Fee: " + transactionFee);
            console.log("Total Deduction: " + totalDeduction);
        }

        transactionCount++;

        return currentBalance;
    }
}

function getBalanceCategory(balance) {
    if (balance < 5000) {
        console.log("→ Very Low Balance")
        return balance
    }
    else if (balance <= 5000 || balance <=19999) {
        console.log("→ Low Balance")
        return balance
    }
    else if (balance <= 20000|| balance <= 49999 ) {
        console.log("→ Normal Balance")
        return balance
    }
    else if (balance <= 50000 || balance <= 99999) {
        console.log("→ Healthy Balance")
        return balance
    }
    else  {
        console.log("→ Premium Balance")
        return balance
    }

}
function calculator(firstnumber, secondnumber, operator) {
    switch (operator) {

        case 1:
            result = firstnumber + secondnumber;
            return result

        case 2:
            result= firstnumber - secondnumber;
            return result

        case 3:

            result= firstnumber * secondnumber;
            return result

        case 4:
            result= firstnumber / secondnumber;
            return result

        case 5:

            result=firstnumber % secondnumber;
            return result

        default:
            return "Invalid operator";
    }


}
function showTransactionCount(transactionCount) {
    console.log("transactionCount", (transactionCount))


}


console.log("====================================")
console.log("           WELCOME TO ATM")
console.log("====================================")
console.log("1. Login")
console.log("2. exit")
console.log("====================================")

let option = 1;
// for (let session = 1; session <= 2; session++) {
//     console.log("ATM Session " + session);
//     option = Number(prompt("Enter ATM Option:"));
switch (option) {
    case 1:
        if (accountActive === false) {
            console.log("Your Account is Inactive")
            console.log("Please Contact Your Bank")
        }
        let loginSuccessful = false;

        for (let attempt = 1; attempt < 3; attempt++) {

            let enteredPin = Number(prompt("Enter PIN:"));

            if (verifyPin(enteredPin)) {

                console.log("Login Successful");

                loginSuccessful = true;

                break;

            }
            else {

                console.log("Incorrect PIN");

                if (attempt < 3) {

                    console.log(
                        "Attempts Remaining: " + (3 - attempt)
                    );

                }
                else {
                    console.log("Account Blocked")
                    console.log("Too Many Incorrect Attempts")
                }

            }
        }



        if (loginSuccessful === true) {



            console.log("====================================")
            console.log("           ATM Menu")
            console.log("====================================")
            console.log("1. Check Balance")
            console.log("2. Deposit Money")
            console.log("3. Withdraw Mony")
            console.log("4. fast cash")
            console.log("5. Balance Category")
            console.log("6. Transaction count")
            console.log("7. mini calculator")
            console.log("8. logout")
            console.log("====================================")



            let menuoption;
            do {
                menuoption = Number(prompt("Enter the Menu option:"));
                if (menuoption < 1 || menuoption > 8) {
                    console.log("Invalid Option");
                    console.log("Please Select Again");

                    continue;
                }
                switch (menuoption) {


                    case 1:
                        console.log("Current Balance: ", balance)
                        break;
                    case 2:
                        let depositAmount = Number(
                            prompt("Enter Deposit Amount:")
                        );

                        balance = deposit(balance, depositAmount);
                        break;

                    case 3:
                        let WithdrawAmount = Number(
                            prompt("Enter Withdrawal Amount:")
                        );

                        balance = withdraw(balance, WithdrawAmount);
                        break;

                    case 4:

                        console.log("====================================")
                        console.log("           Fast Cash")
                        console.log("====================================")
                        console.log("1. 500 ")
                        console.log("2. 1000")
                        console.log("3. 2000")
                        console.log("4. 5000")
                        console.log("5. 10000")
                        console.log("====================================")


                        let fastoption = Number(prompt("Enter the fast cash option:"));

                        switch (fastoption) {
                            case 1:

                                balance = withdraw(balance, 500);
                                break;
                            case 2:

                                balance = withdraw(balance, 1000);
                                break;

                            case 3:
                                balance = withdraw(balance, 2000);
                                break;

                            case 4:
                                balance = withdraw(balance, 5000);
                                break;

                            case 5:
                                balance = withdraw(balance, 10000);
                                break;
                            default:
                                console.log("invalid Option")

                                break;
                        }
                        break;
                    case 5:
                        console.log("balance " + balance)
                        console.log("Category")
                        getBalanceCategory(balance)
                        break;

                    case 6:

                        console.log("Total Successful Transactions: " + transactionCount)
                        break;
                    case 7:
                        console.log("====================================")
                        console.log("           MINI CALCULATOR")
                        console.log("====================================")
                        console.log("1. Addition ")
                        console.log("2. Subtraction")
                        console.log("3. Multiply")
                        console.log("4. division")
                        console.log("5. modulus")
                        console.log("====================================")
                        let firstnumber = Number(prompt("Enter the first number:"));
                        console.log(" first number:", firstnumber)
                        let secondnumber = Number(prompt("Enter the second number:"));
                        console.log("second number:", secondnumber)
                        let operator = Number(prompt("Enter the operator:"));
                        console.log("operator:", operator)
                        let result = calculator(firstnumber, secondnumber, operator)
                        console.log("result :" + result)
                        break;


                    case 8:
                        console.log("====================================")
                        console.log("             SESSION SUMMARY")
                        console.log("====================================")
                        console.log("Final Balance : " + balance)
                        console.log("Successful Transactions : " + transactionCount)
                        console.log("Category")
                        getBalanceCategory(balance)
                        console.log(" Account Status : " + accountActive)
                        console.log("====================================")
                }
            } while (menuoption !== 8)
        }

        break;
    case 2:
        console.log("exit")
}
