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

    const currentDeposit = document.getElementById("currentDeposit").innerText;

    const currentDepositNumber = parseFloat(currentDeposit);

    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("currentDeposit").innerText = totalDeposit;

    document.getElementById("depositAmount").value = "";









    


    


})





