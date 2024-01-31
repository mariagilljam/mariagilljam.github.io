// Hent canvas-elementet
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// Opprett en lineær gradient
let gradient = ctx.createLinearGradient(0, 0, 400, 0);
gradient.addColorStop(0, "red");    // Første fargepunkt
gradient.addColorStop(0.5, "green"); // Andre fargepunkt
gradient.addColorStop(1, "blue");   // Tredje fargepunkt

// Bruk gradienten som fyllstil
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, calculator.width, calculator.height);


let pluss = document.getElementById("pluss");
let minus = document.getElementById("minus");
let gange = document.getElementById("gange");
let dele = document.getElementById("dele");
let c = document.getElementById("C");
let erLik = document.getElementById("erLik");

pluss.style.backgroundColor = "#ff758f"; pluss.style.color = "black"; pluss.style.border = "2px solid black";
    minus.style.backgroundColor = "#ff758f"; minus.style.color = "black"; minus.style.border = "2px solid black";
    dele.style.backgroundColor = "#ff758f"; dele.style.color = "black"; dele.style.border = "2px solid black";
    gange.style.backgroundColor = "#ff758f"; gange.style.color = "black"; gange.style.border = "2px solid black";
    c.style.backgroundColor = "#c9184a"; c.style.color = "black"; c.style.border = "2px solid black";
    erLik.style.backgroundColor = "#ff8fa3"; erLik.style.color = "black"; erLik.style.border = "2px solid black";

    pluss.style.backgroundColor = "pink"; pluss.style.color = "white";
    minus.style.backgroundColor = "pink";
    dele.style.backgroundColor = "pink";
    gange.style.backgroundColor = "pink";
    c.style.backgroundColor = "pink";
    erLik.style.backgroundColor = "pink";