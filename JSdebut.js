var a = [11, 5, 16, 25, 66, 82];
while (!Number.isInteger(Math.sqrt(Math.max(...a)))) {
  var posmax = a.indexOf(Math.max(...a));
  a.splice(posmax, posmax + 1);
}
console.log(Math.max(...a));

/*-------------------------------------------*/

function facto() {
    var n = document.getElementById("input").value;
    var text = document.getElementById("text")
    n = parseInt(n);
    if (n>4) {
        text.innerText = "erreur"
    }
    console.log(n);
    
    var f = 0;
  console.log (f);
    for (let i = 1; i < n + 1; i++) {
      //console.log(i);
    
      f = f + i;
      
    }
    console.log(f);
}
