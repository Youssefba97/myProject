let a1 = [2,3,4];
let a2 = [1,6,7,8];
let k=4 ;
let j=0 ;
while (j<k) {
    if (a1[0]<a2[0]) { 
        for (let i = 0; i < a2.length; i++) {
            console.log (a1[0],a2[i]) 
            j++;
            if(j>=k) {
              break;
            }           
        }
        a1.splice(0,1)
    }
    else { 
        for (let i = 0; i < a1.length; i++)
        console.log (a2[0],a1[i]) 
            j++;
            if(j>=k) {
                break;
              }   
    }
    a2.splice(0,1)
}

