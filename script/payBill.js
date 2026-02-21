document.getElementById("pay-money-btn")
.addEventListener("click",function(){
    console.log("btn was click");
    const addOption =getValueFromInput("add-option");
    if(addOption === "Select back"){
        alert("please select pay option");
        return;
    }
    const billerAcount = getValueFromInput("biller-account");
    if(billerAcount.length !== 11){
        alert("Invalid Biller number");
        return;
    }
    const currentBalance = getBalance();
const payAmount = getValueFromInput("pay-amount");
const amount = Number(payAmount);
if(amount > currentBalance){
    alert("Not enough Balance In your Account")
return;
}
const newBalance = currentBalance - amount;
const payPin = getValueFromInput("pay-money-pin");
if(payPin ==="1234"){
    alert( ` Pay ${amount}  TAKA successfully to  ${addOption}
 at ${new Date()}`)
    setBalance(newBalance);
    const history =document.getElementById("history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML= `
    <div class="Transaction-card p-3 bg-base-100 ">  
    Pay ${amount}  TAKA successfully to  ${addOption}
 at ${new Date()}
     </div>
    `;
   history.appendChild(newHistory);
}else{
    alert("Invalid Pin");
}
})