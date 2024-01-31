// henter alle elementer med klassen number
const numberEls = document.querySelectorAll(".number");
// for hvert element i listen over elemtenter med klassen number
numberEls.forEach(numberEl => {
    // numberEl er det første, adnre, tredje elementet i listen (dette er en loop)
    numberEl.addEventListener("click", displayNumber2);
    // For hvert element, kall displayNumber2 funksjonen.
});

// Denne funksjonen blir kalt av en event, og får da en variabel e
function displayNumber2(e){
    let displayEl = document.getElementById("display");
    let newText = e.target.dataset.number;
    // e.target finner elementet vi trykket på.
    // e.target.dataset finner attributter som starter med "data-"
    // Våre numberEl ser sånn ut:
    // <button class="number" data-number="1">EN</button>
    // Her f.eks. får e.target.dataset.number verdien 1
    // newText her har derfor verdien 1. (for dette elementet)
    displayEl.value += newText;
    // tar teksten og legger til den nye 
}

const BTN = document.getElementById("colorButton");
let clickCount = 0;

BTN.addEventListener("click", function() {
    clickCount++;

    if(clickCount%2==0) {
        reverse();
    }
    else {
        changeColor();
    }
});

let calculator = document.getElementById("calculator");
let buttons = document.getElementById("buttons");
let display = document.getElementById("display");
let colorButton = document.getElementById("colorButton");
let pluss = document.getElementById("pluss");
let minus = document.getElementById("minus");
let gange = document.getElementById("gange");
let dele = document.getElementById("dele");
let c = document.getElementById("C");
let erLik = document.getElementById("erLik");
let text = document.getElementById("textForButton");
let text2 = document.getElementById("textForButton2");
let text3 = document.getElementById("textForButton3");


function changeColor(){
    
    calculator.style.background = "#800f2f"; calculator.style.border = "2px solid black";
    colorButton.style.background = "#800f2f74"; colorButton.style.border = "2px solid black"; 
    display.style.backgroundColor = "#ffb3c1"; display.style.color = "black"; display.style.border = "2px solid black";
    pluss.style.backgroundColor = "#ff758f"; pluss.style.color = "black"; pluss.style.border = "2px solid black";
    minus.style.backgroundColor = "#ff758f"; minus.style.color = "black"; minus.style.border = "2px solid black";
    dele.style.backgroundColor = "#ff758f"; dele.style.color = "black"; dele.style.border = "2px solid black";
    gange.style.backgroundColor = "#ff758f"; gange.style.color = "black"; gange.style.border = "2px solid black";
    c.style.backgroundColor = "#c9184a"; c.style.color = "black"; c.style.border = "2px solid black";
    erLik.style.backgroundColor = "#ff8fa3"; erLik.style.color = "black"; erLik.style.border = "2px solid black";
    document.body.classList.remove("animate"); 
    text.style.display = "none";
    text2.style.display = "block";
    text3.style.display = "none";

    
    numberEls.forEach(numberEl => {
        numberEl.style.backgroundColor = "#a4133c";
        numberEl.style.border = "2px solid black";
        numberEl.style.color = "black";
        //hver number element får egenskapen bakgrunnsfarge
    });
    
    
}
function reverse(){
    calculator.style.background = "linear-gradient(130deg, #fdffb6, #caffbf, #9bf6ff, #a0c4ff, #bdb2ff, #ffc6ff)"; calculator.style.border = "2px solid white"; 
    colorButton.style.background = "linear-gradient(130deg, #fdffb6, #caffbf, #9bf6ff, #a0c4ff, #bdb2ff, #ffc6ff)";  colorButton.style.border = "2px solid white"; 
    display.style.backgroundColor = "pink"; display.style.color = "white"; display.style.border = "2px solid white";
    pluss.style.backgroundColor = "pink"; pluss.style.color = "white"; pluss.style.border = "2px solid white";
    minus.style.backgroundColor = "pink"; minus.style.color = "white"; minus.style.border = "2px solid white";
    dele.style.backgroundColor = "pink"; dele.style.color = "white"; dele.style.border = "2px solid white";
    gange.style.backgroundColor = "pink"; gange.style.color = "white"; gange.style.border = "2px solid white";
    c.style.backgroundColor = "pink"; c.style.color = "white"; c.style.border = "2px solid white";
    erLik.style.backgroundColor = "pink"; erLik.style.color = "white"; erLik.style.border = "2px solid white";
    document.body.classList.add("animate");
    text2.style.display = "none";
    text3.style.display = "block";

    

    numberEls.forEach(numberEl => {
        numberEl.style.backgroundColor = "pink";
        numberEl.style.color = "white";
        numberEl.style.border = "2px solid white";
        //hver number element får egenskapen bakgrunnsfargen rosa
    });
}


// Legg til 'value' i tekstfeltet med ID "display"
function displayNumber(value) {
    document.getElementById("display").value += value;
}

// Tøm tekstfeltet med ID "display"
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Beregn resultatet av uttrykket i tekstfeltet "display" og vis det i tekstfeltet
function calculateResult() {
    // Hent uttrykket fra tekstfeltet
    const expression = document.getElementById("display").value;

    // Evaluer og regner på uttrykket og lagre resultatet
    const result = eval(expression);

    // Sett resultatet tilbake i tekstfeltet
    document.getElementById("display").value = result;
}