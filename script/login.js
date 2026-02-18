console.log("file conected");

document.getElementById("login-btn")
.addEventListener("click",function(){
    // console.log("login button clicked");
 
 
    //1- get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
   
   
    //2-get the pin input
 const inputPassword = document.getElementById("input-password");
    const password = inputPassword.value;
   

    //3-match pin & mobile number

    if(contactNumber === "01825248883" && password === "1234"){
        //3-1 true>> alert>> homepage
        
        alert("loging successfull");
        // window.location.replace("/home.html");
            window.location.assign("/home.html");
    }else{
//3-2 true>> alert > return
        alert("loing failed");
        return;
    }
    
    
})