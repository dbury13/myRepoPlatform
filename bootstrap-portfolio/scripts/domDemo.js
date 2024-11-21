console.log(document);

function testTheDom(){
    console.log("inside test the dom");
    var nodes = document.getElementsByTagName("li");
    console.log(nodes);

    for (let node of nodes){
        console.log(node.textContent);
    }

    /*var checkingNode = document.getElementById("checking");
    console.log(checkingNode.textContent);
    //checkingNode.textContent = "Changed!";
    var balance = parseInt(checkingNode.textContent);
    balance+=100;
    checkingNode.textContent = balance;*/
}

function depositChecking(){
    var checkingNode = document.getElementById("checking");
    console.log(checkingNode.textContent);
    var checkingBalance= parseInt(checkingNode.textContent);
    checkingBalance+=100;
    checkingNode.textContent = checkingBalance;
}

function depositSavings(){
    var savingsNode = document.getElementById("savings");
    var savingsBalance = parseInt(savingsNode.textContent);
    savingsBalance+=100;
    savingsNode.textContent = savingsBalance;
    var newHeader = document.getElementById("tableHeader");
    newHeader.textContent = "Bank Accounts";
}

function emptySavings(){
    var savingsNode = document.getElementById("savings");
    var savingsBalance = parseInt(savingsNode.textContent);
    savingsBalance=0;
    savingsNode.textContent = savingsBalance;
    var newHeader = document.getElementById("tableHeader");
    newHeader.textContent = "Alert: Savings Empty";
}