//machine-->id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


//machine -->2
function getBalance (){
    const balanceElement =document.getElementById("current-balance");
    const balance = balanceElement.innerText;
    console.log("current Balance", Number(balance));
    return Number(balance);

}


//machine-->3
function setBalance(value){
    const balanceElement = document.getElementById("current-balance");
balanceElement.innerText= value;
}

function showOnly(id){
    //get all section
    const addMoney = document.getElementById("Add-Money");
    const cashOut = document.getElementById("cashout");
    const Transaction = document.getElementById("history");
    const transfer = document.getElementById("Transfer-Money")
    const bouns = document.getElementById("Get-bonus");
    const payBills =document.getElementById("pay-bill");
// console.log(`add money-${addMoney} , cashout-${cashOut}`);   
// HTMLElement = HTML ট্যাগের JavaScript অবজেক্ট  
//getElementById() → HTMLElement দেয়      
// এটা object

//shobika hide kora daw

addMoney.classList.add("hidden");
cashOut.classList.add("hidden");
Transaction.classList.add("hidden");
transfer.classList.add("hidden");
 bouns.classList.add("hidden");
 payBills.classList.add("hidden");

 // id wala element ta k tumi dako                                                        

 const selected = document.getElementById(id);                                                           
   selected.classList.remove("hidden"); 
}