function changetheme(){

    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
    localStorage.setItem("mytheme","enabled");
    }else{ localStorage.setItem("mytheme","disabled");}
}
 window.onload=function(){if(localStorage.getItem("mytheme")==="enabled"){document.body.classList.add("dark");}
    else{document.body.classList.remove("dark");}
}
document.querySelector('form').onsubmit = function(e) {

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;

    
    if (name == "" || email == "" || msg == "") {
        alert("Please Fill in All Reqiuired Fields");
        e.preventDefault(); 
    } 
    else if (!email.includes("@")) {
        alert("Please Enter a Valid ");
        e.preventDefault(); 
    } 
    else {localStorage.setItem("savedName", name);
    localStorage.setItem("savedEmail", email);
    localStorage.setItem("savedMsg", msg);
        
        document.querySelector('.success-msg').style.display = 'block';
        e.preventDefault(); 
    }
};