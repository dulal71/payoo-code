document.getElementById("bonus-btn")
.addEventListener("click",function(){
    const bonusCoupon = getValueFromInput("coupon");
    const bonus = 1000;
    if(bonusCoupon.toLowerCase() !== "katun26"){
        alert("Invalid Coupon");
        return;
    }
const currentBalance = getBalance();
    if(currentBalance >=30000){
 const newBalance = currentBalance + bonus;
    setBalance(newBalance);
    alert("Your bonus has been successfully added to your account.");

const history = document.getElementById("history");
const newHistory= document.createElement("div");
newHistory.innerHTML =`
 <div class="Transaction-card p-3 bg-base-100 ">
Add Bouns ${bonus} TAKA successfully at ${new Date()}

</div>
`;
history.appendChild(newHistory);
    }else {
    alert("You need at least 30000 balance in account  to get bonus.");
}
    
})