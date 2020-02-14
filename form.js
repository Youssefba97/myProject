
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//boucle


function saving() {

  var pass1 = document.querySelector(".pw").value;
  var mail = document.querySelector(".email").value;
  var fName = document.querySelector(".fName").value;
  var lName = document.querySelector(".lName").value;
  var age = document.querySelector(".age").value;
  var id = Math.floor((Math.random() * 1000));
  console.log(id);  // the id takes the value of age ??!!
  
  
  var loc = JSON.parse(localStorage.getItem("user")) || [];  
  
  var object = {
      email: mail,
      password: pass1,
      firstName : fName ,
      lastName : lName ,
      age : age ,
      id : id ,
  }
   loc.push(object);
   console.log(loc);
   
   localStorage.setItem("user",JSON.stringify(loc))

}


var pw = document.querySelector(".pw");
var email = document.querySelector(".email");
let signupbtn = document.querySelector(".signupbtn");
signupbtn.addEventListener("click",()=>{
    if (!comparepw()) {
      alert ("Wrong pw ")
    } else {
      alert ("Welcome ")
      // console.log(window.er);

        window.location.href="./modal.html"
   saving()
    // window.location.replace = "file:///C:/Users/Youssef/Desktop/5p/20-1/modal.html"
    }
   

});
function comparepw() {
  var pw1 = document.querySelector(".pw1");
  if (pw.value != pw1.value) {
    return false; 
  } else {
             return true;
  }
}
