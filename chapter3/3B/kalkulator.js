const A = document.getElementById("a");
const B = document.getElementById("b");
const C = document.getElementById("c");

const BTN = document.getElementById("calculate");


//når vi trykker på knappen skal showdiscriminant skje
BTN.addEventListener("click", ShowDiscriminant);



function ShowDiscriminant(){
    //henter verdiene fra input
    let a = A.value;
    let b = B.value;
    let c = C.value;

    //regner ut diskriminanten
    let discriminant = b*b-4*a*c;
    //skriver den i consolen
    console.log(discriminant);

}