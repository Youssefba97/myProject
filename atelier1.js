function calcul(){

 var    prompt
var x= document.getElementById("prix").value ;
    var ttc= x*118/100 ;
document.getElementById ("res").innerHTML = "Prix TTC : "+ttc;
}

//-------------------------------------------------//
function displayRadioValue() { 
    var ele = document.getElementsByName('destination'); 
      var check = 0 ;
    for(i = 0; i < ele.length; i++) { 
        if (ele[i].checked) 
     {   alert ("votre destination est :"+ ele[i].value) }
       else {check++ } 
    } 
    if (check == ele.length ) { alert('veuillez choisir une destination')   }
}
//--------------------ex4-----------------------------//
function verifyStar() 
{
    var checkNbr =document.getElementsByName('nbr')
    var correct = false ;
    for (let j = 0; j < checkNbr.length; j++)
    {
        if (checkNbr[j].checked)
     {
            if (checkNbr[j].value.charAt(checkNbr[j].value.length-1)=="*")
             {
                alert('Mauvaise reponse');
                correct=false ;
                break;
            } 
            else {
            if (checkNbr[j].value.charAt(checkNbr[j].value.length-1)!="*") {

                alert('Continuez a chercher');
                correct = false ;
                break ;
            }    
        } 
     }
        
    }
}
//--------------------ex7-----------------------------//

    function chercher() {
        var myText =document.getElementById('myText')
        var myNbr =document.getElementById('myNumber')
        
        var lettre = myText.value.charAt(myNbr.value)
        console.log(lettre);
        alert('La lettre est: '+lettre)
    }

//--------------------ex8-----------------------------//
function verifier() {
    var elem = document.getElementsByClassName('ex8'); 
    var reponse = 0 ;
    for(i = 0; i < elem.length; i++) { 
        if ((elem[i].checked) && (elem[i].value=="vrai")) {
               console.log(i)
                reponse++
                }
    } 
}