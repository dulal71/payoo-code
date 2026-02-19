// document.getElementById("cashout-btn")
// .addEventListener("click" , function(){
  
    
// //1--get the agent number & validate
//     const agentNumber = document.getElementById("cashout-number");
//     cashoutNumber = agentNumber.value;
//     if(cashoutNumber.length !==11){
//         alert("Invalid Agent Number");
//         return;
//     }
   
// //2--get the amout & validate and convert to number
// const amount = document.getElementById("amount")
// cashoutAmount = amount.value;

// //3--get current balance & validate , convert to number
// const balance = document.getElementById("current-balance");
// currentBalance = balance.innerText;
//  //4--calculate new balance 
//  const newBalance = Number(currentBalance)-Number(cashoutAmount);

//  if(newBalance < 0){
//     alert("Invalid Amount");
//     return;
//  }
 
// //--5 get the pin and verify 
// const inputPin = document.getElementById("cashout-pin");
// cashoutPin = inputPin.value;
// if(cashoutPin === "1234"){
//     alert("cashout successful");
//     console.log(newBalance);
//     balance.innerText= newBalance;
    
// }else{
//     alert("Invalid pin");
//     return;
// }
// //--5-1 --> true == show alert set balance
// //5--5-2 -->false== show alert and return
// })


document.getElementById("cashout-btn")
.addEventListener("click",function(){
   const inputNumber = document.getElementById("cashout-number");
   const cashoutNumber = inputNumber.value;
   if(cashoutNumber.length !== 11){
    alert("Invalid Agent Number");
    return;
   }

   const inputAmount = document.getElementById("amount");
   const cashoutAmount = inputAmount.value;
   
   const balance = document.getElementById("current-balance");
   currentBalance = balance.innerText;
   const newBalance = Number(currentBalance) - Number(cashoutAmount);
   if(newBalance < 0){
    alert("Invalid Amount");
    return;
   }
   console.log(newBalance);

   const pin = document.getElementById("cashout-pin");
   const cashoutPin = pin.value;
   if(cashoutPin ==="1234"){
    alert("cashout successfull");
    balance.innerText = newBalance

   }else{
    alert("Invalid Pin");
   }
})