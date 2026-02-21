document.getElementById("bonus-btn")
.addEventListener("click",function(){
    const bonusCoupon = getValueFromInput("coupon");
    
    if(bonusCoupon.toLowerCase() !== "katun26"){
        alert("Invalid Coupon");
        return;
    }
const currentBalance = getBalance();
    if(currentBalance >=30000){
 const newBalance = currentBalance + 1000;
    setBalance(newBalance);
    alert("Your bonus has been successfully added to your account.");
    }else {
    alert("You need at least 30000 balance in account  to get bonus.");
}
    
})