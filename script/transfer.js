document.getElementById("send-btn")
.addEventListener("click" ,function(){
    const transferNumber = getValueFromInput("user-number");
   if(transferNumber.length !=11){
    alert("Invalid account Number");
    return;
   }
   const amount = getValueFromInput("Transfer-amount");
   const transferAmount = Number(amount)
   const currentBalance=getBalance ();
   const newBalance = currentBalance-transferAmount;
   if(transferAmount > currentBalance){
    alert("Insufficient balance");
    return;
   }
   const pin = getValueFromInput("Transfer-pin");
   if(pin === "1234"){
    alert("Transfer successfully");
    setBalance(newBalance);
//get history container 
   const history = document.getElementById("history-container") ;
    //new div create korbo
    const newHistory = document.createElement("div");

    //new div innerhtml add korbo
    newHistory .innerHTML=`
    <div class="Transaction-card p-3 bg-base-100 ">
 Transfer ${amount}  TAKA successfully to  ${transferNumber}
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