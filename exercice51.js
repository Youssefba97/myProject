let a1 = [7,33,16,62,3,21];
let k=2 ;
function tab(a, b) {
    return a - b;
  }
  a1.sort(tab);
console.log (a1[k-1])  
//---------------------------------//

let str="Structures de données et algorithmes"
let array=str.split (" ").reverse().join(" ")
    console.log (array) ;

 //---------------------------------//
 const array1 = [3,10,25];
 const array2 = [1,5,15,20];
 function tri(a, b) {
    return a - b;
  }
 const array3 = array1.concat(array2);
 array3.sort(tri);

 console.log(array3);
 //----------------------------------//
 let S = 0 ;

 let A = [1 ,5 ,7, 10, 19 ];
 mid = Math.floor(Math.max(...A)/2)
 for (let i = 0; i < A.length; i++) {
     
//  if (A[i]<mid) {
//      A[i]= mid
// }
S=S+(Math.abs(mid-A[i])) ; 

 }console.log (S);
