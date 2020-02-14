let  ch = "##aaze##rtyu#iopqs###" ;
let  i = 0 ;
let a1 = ch.split("") ;
while (a1.find(i => i === '#')) {
for (let i = 0; i < a1.length; i++) {
    if ( i==0 &&  a1[i] === "#" ) {
        a1.splice (i,1);
        i--;
    }    
    else if (a1[i]==="#") {
        a1.splice(i-1,2);
        i--;
    }
}
}

ch = a1.join('');

console.log (ch)
