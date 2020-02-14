let nabilb = document.querySelector("#nabilb");
let nabil = document.querySelector("#nabil");
// let vnabil = 0 ;

nabilb.addEventListener("click",()=>{
    // vnabil ++ ;
    nabil.innerText ++;
    localStorage.setItem("res_nabil",nabil.innerText);
});

let kaisb = document.querySelector("#kaisb");
let kais = document.querySelector("#kais");

kaisb.addEventListener("click",()=>{
    kais.innerText ++;
    localStorage.setItem("res_kais",kais.innerText);
});
let abirb = document.querySelector("#abirb");
let abir = document.querySelector("#abir");

abirb.addEventListener("click",()=>{
    abir.innerText ++;
    localStorage.setItem("res_abir",abir.innerText);
});
function load() {
  nabil.innerText = localStorage.getItem("res_nabil");
  kais.innerText = localStorage.getItem("res_kais");
  abir.innerText =localStorage.getItem("res_abir");
}
let reset = document.querySelector("#reset");
reset.addEventListener("click",()=>{
    kais.innerText = 0;
    nabil.innerText = 0 ;
    abir.innerText = 0 ;
    localStorage.setItem("res_kais",0);
    localStorage.setItem("res_abir",0);
    localStorage.setItem("res_nabil",0);

});
