let trykketEl = document.querySelector("#trykket");
let bodyeEl = document.querySelector("body");


bodyeEl.addEventListener("keydown",sjekkKnapp);

function sjekkKnapp(e) {
    trykketEl.innerText = "keykode:" + e.keyCode;
    if(e.keyCode === 87){
        spiller.style.top = "30vh";
    }else{
        spiller.style.top = "50vh";}
}