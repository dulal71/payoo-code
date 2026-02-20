document.getElementById("add-money-btn")
.addEventListener("click" ,function(){
  //1-->get bank account
  const bankAccount = getValueFromInput("add-bank");
//   console.log(bankAccount);
  if(bankAccount === "Select back"){
    alert("please select a bank");
    return;
  }

  //2--> get bank account number
  const accountNumber = getValueFromInput("account-number");
//   console.log(accountNumber);
  if(accountNumber.length != 11){
    alert("Invalid account Number");
    return
  }

  const amount = getValueFromInput("add-amount");
  const currentBalance = getBalance()
  const newBalance = currentBalance + Number(amount);
  const pin = getValueFromInput("add-money-pin");
//   console.log(pin);
  if(pin ==="1234"){
    alert(`Add Money Seccessfully 
    from ${ bankAccount} 
    at ${new Date()}`);
    setBalance(newBalance);
    //get history container 
   const history = document.getElementById("history-container") ;
    //new div create korbo
    const newHistory = document.createElement("div");

    //new div innerhtml add korbo
    newHistory .innerHTML=`
    <div class="Transaction-card p-3 bg-base-100 ">
    
 Add Money Seccessfully from ${ bankAccount} acc-no ${accountNumber}
 at ${new Date()}
</div>
    `;
    // history container e newdiv append korbo
    history.appendChild(newHistory);
  }else{
    alert("Invalid pin");
    return;
  }
})