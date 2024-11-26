// let myAccountBalance = parseInt(document.getElementById(findSenderAccount).innerText); 

function debit() {
    var enterCustomerName = parseInt(document.getElementById("enterCusName").value);
    var enterDrAmount = parseInt(document.getElementById("enterAmountDr").value);

    var findCustomerAccount = enterCustomerName + "BankBalance";
    var finalAmountDr = parseInt(document.getElementById(findCustomerAccount).innerHTML) - enterDrAmount;
    document.getElementById(findCustomerAccount).innerText = finalAmountDr;
    alert(`Successful Transaction of Money !! ${enterDrAmount} is debited from ${enterCustomerName}`) ;


        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`${enterDrAmount} is debited from the recepient with Roll No. ${enterCustomerName} on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);

}


function credit() {
    var enterCusName = parseInt(document.getElementById("enterCustomerName").value);
    var enterCrAmount = parseInt(document.getElementById("enterAmountCr").value);

    var findCusAccount = enterCusName + "BankBalance";
    var finalAmountCr = parseInt(document.getElementById(findCusAccount).innerHTML) + enterCrAmount;
    document.getElementById(findCusAccount).innerHTML = finalAmountCr;
    alert(`Successful Transaction of Money !! ${enterCrAmount} is sent to ${enterCusName}`) ;


        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`${enterCrAmount} is credit to the recepient with Roll No. ${enterCusName} on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);

}

function sendMoney() {
    var enterName = parseInt(document.getElementById("senderRollNo.").value);
    var enterNameRec = parseInt(document.getElementById("recieverRollNo.").value);
    var enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > 800000) {
        alert("Insufficient Balance.")
    }
    else {
        var findSenderAccount = enterName + "BankBalance";
        var findRecieverAccount = enterNameRec + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findRecieverAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById(findSenderAccount).innerHTML) - enterAmount;
        document.getElementById(findSenderAccount).innerText = myAccountBalance;
        document.getElementById(findRecieverAccount).innerHTML = finalAmount;
        alert(`Successful Transaction of Money !! ${enterAmount} is sent to ${enterNameRec}`) ;


        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`${enterAmount} is sent to the recepient with Roll No. ${enterNameRec} from ${enterName} on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}


