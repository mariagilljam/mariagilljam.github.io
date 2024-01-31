const travelDateEl = document.getElementById("reisedato");
let dateObject = new Date(travelDateEl.valueAsNumber);

let year = dateObject.getFullYear();
let month = dateObject.getMonth()+1;
let day = dateObject.getDay();

let bodyEl = Document.getElementById("body");
let bakgrunnsfargeEl = document.getElementById("bakgrunnsfarge");
let farge = bakgrunnsfargeEl.value;
bodyEl.style.backgroundColor = farge;