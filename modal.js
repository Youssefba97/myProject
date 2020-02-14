// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




function validate() {
    var pass = document.getElementById("copw").value;
    var mail = document.getElementById("coemail").value;

    
    var user = JSON.parse(localStorage.getItem("user")) || [];
    //pw = localStorage.getItem ("password")
    
    console.log(user[0].email);    console.log(user[0].password);

    var loginMail= false ;
    var loginPw = false ;
   // email = localStorage.getItem("e-mail")
   for (let i = 0; i < user.length; i++) {
    
    if(mail == user[i].email) {
        loginMail = true ;
        if (pass == user[i].password) {    
            loginPw = true ;
            localStorage.setItem("con_user",JSON.stringify(user[i]));
            // window.location.href = "http://127.0.0.1:5500/afficher.html"
            break ;
        }
    
    }  
}   
if (loginMail == true && loginPw == true) {
    alert ("you are logged in")
                window.open  ("http://127.0.0.1:5500/afficher.html","_blank")

} 
else alert ("please verify your e-mail or pw")
}

