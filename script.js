//login button Event handler

var loginBtn = document.getElementById("login");

loginBtn.addEventListener('click', function(){

    document.getElementById("login-area").style.display ="none";

    var trnArea = document.getElementById("trn-area");

    trnArea.style.display = "block";

})

//Deposit button event handler

var depositBtn = document.getElementById("addDeposit");

depositBtn.addEventListener('click', function(){

    const depositAmount = document.getElementById("depositAmount").value;

    const depositNumber = parseFloat(depositAmount);

    if (depositNumber<0) {

        alert("You have enter Negetive Amount ! Please Enter Positive Amount")
        
    } 

    else if(depositNumber>0){

        const currentDeposit = document.getElementById("currentDeposit").innerText;

    const currentDepositNumber = parseFloat(currentDeposit);

    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("currentDeposit").innerText = totalDeposit;

    document.getElementById("depositAmount").value = "";

    // increase Balance event handler

    const totalBalance = document.getElementById("totalBalance").innerText;

    const totalBalanceNumber = parseFloat(totalBalance);

    const newTotalBalance = depositNumber + totalBalanceNumber;

    document.getElementById("totalBalance").innerText = newTotalBalance;


    }


    else {

        alert("You have enter Wrong Amount")
        
    }

    

})

// Withdraw Button event handler 

var withdrawBtn = document.getElementById("addWithdraw");

withdrawBtn.addEventListener('click', function(){

    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    const totalWithdraw = document.getElementById('totalWithdraw').innerText;
    const totalWithdrawNumber = parseFloat(totalWithdraw);

    const totalBalance = document.getElementById("totalBalance").innerText;

    const totalBalanceNumber = parseFloat(totalBalance);

    if (withdrawAmountNumber < 0 ) {

        alert("You Entered Negative Amount! Please Enter positive Amount")
        
    }

    else if(withdrawAmountNumber>totalBalanceNumber){

        alert("You Don't Have Enough Money")


    }

    else if (withdrawAmountNumber>0 && withdrawAmountNumber<totalBalanceNumber){

        const newTotalWithdraw = withdrawAmountNumber + totalWithdrawNumber;

    document.getElementById('totalWithdraw').innerText = newTotalWithdraw;

    document.getElementById('withdrawAmount').value = "";

// decrease Balance event handler


    const newTotalBalance = totalBalanceNumber - withdrawAmountNumber;
    document.getElementById("totalBalance").innerText = newTotalBalance;

    }
    
    
    else {

        alert("You Enter Wrong Amount")
        
    }

    

    

})







