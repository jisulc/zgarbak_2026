const heading = document.getElementById("text");
const speedOr = document.getElementById("speed");
const ageInput = document.getElementById("vek");
const adultText = document.getElementById("dospelec");
const nameInput = document.getElementById("jmeno");

const text = "Toto je největší Jirkův Zgarbák!"

let idletter = 1;

let delay = 500 / speedOr.value;

//počet dosažených bodů

let student1 = 125;
let student2 = 92;

//typ člověka
let adult = Boolean;

// jména studentů
let student1Name = nameInput.value;
let student2Name = "Pepa";

//maximální počet bodů
const maxPoints = 200;

//výpočet úspěšnosti v %
let result1 = (student1 / maxPoints) * 100;
let result2 = (student2 / maxPoints) * 100;

//výsledky do konzole

function vypisToConsole()   {
    console.log(`${student1Name} má úspěšnost ${result1}%`);    
    console.log(student2Name+ " má úspěšnost "+ result2 + "%");
}

function printText() {
    heading.innerText = text.slice(0, idletter);
    idletter++;

    setTimeout(printText,delay);

    //vyresetuje pořadí písmen

    if (idletter > text.length) {
        idletter = 1; 
    }

}

function pozdrav() {
    console.log("Ahoj Jirko, přeji ti krásný den!");
    setTimeout(pozdrav, 2000);

}

speedOr.addEventListener("input", function(event) {
    console.log(event.target.value);
    delay = 500 / event.target.value;
});

ageInput.addEventListener("input", function(event) {
    console.log(event.target.value);
    if (event.target.value >= 18) {
        adult = true;
        adultText.innerText = "Jsi dospělý/á.";
    } else {
        adult = false;
        adultText.innerText = "Je ti méně než 18 let.";
    }   
});


nameInput.addEventListener("change", function(event) {
 
    student1Name = event.target.value;
    vypisToConsole();   

});

let naDruhou = function(x) {
    return x * x;
}

console.log(naDruhou(5));


pozdrav();
printText();


