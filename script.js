const heading = document.getElementById("text");
const speedOr = document.getElementById("speed");

const text = "Toto je největší Jirkův Zgarbák!"

let idletter = 1;

let delay = 500 / speedOr.value;


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


pozdrav();
printText();


