/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */



/* creiamo le costanti per stampare succesivamente i risultati */

const pardisp = document.getElementById("paridispari");

const playerNum = document.getElementById("numerogiocatore");

const pcNum = document.getElementById("numerodelpc");

const totale = document.getElementById("sommadeinumeri");

const risultato = document.getElementById("stampa");

const vincitore = document.getElementById("winner");

/* creiamo un prompt per far scegliere all'utente pari o dispari */

let scelta = prompt("Scegli pari o dispari");

console.log(scelta);

checkChoice();

function checkChoice() {
    if (scelta === 'pari' || scelta === 'dispari') {

        pardisp.innerHTML = `Hai scelto: ${scelta}`;

    } else {

        scelta = prompt("Devi scegliere solo tra pari o dispari");
        
        checkChoice();

    }
}


/* creiamo un prompt per far scegliere un numero da 1 a 5 all'utente */

let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

console.log(numeroUtente);

checkNumber();

function checkNumber() {
    if (numeroUtente > 0 && numeroUtente < 6) {
    
        playerNum.innerHTML = `Hai scelto il numero: ${numeroUtente}`;
    
    } else {

        numeroUtente = parseInt(prompt("Devi scegliere solo tra 1 e 5!"));

        checkNumber();
    }

}



/* generiamo tramite una funzione il numero scelto dal compuetr (sempre da 1 a 5) */

function numeroPc() {

    return Math.floor(Math.random() * 5) + 1;

}

let numeroComputer = numeroPc();

console.log(numeroComputer);

pcNum.innerHTML = `Il computer ha generato il numero: ${numeroComputer}`;

/* facciamo la somma dei due numeri */

let sommaNumeri = numeroUtente + numeroComputer;

totale.innerHTML = `La somma dei numeri è: ${sommaNumeri}`;

/* andiamo a creare una funzione per stabilire se il numero è pari o dispari */

function pariodispari(){

    if (sommaNumeri % 2 === 0){

        risultato.innerHTML = `La somma dei numeri è: pari`;

        return `pari`;

    } else {

        risultato.innerHTML = `La somma dei numeri è: dispari`;

        return `dispari`;

    }

}

let risultatoSomma = pariodispari();

console.log(risultatoSomma);

/* andiamo a stampare il risultato del vincitore */

if (scelta == risultatoSomma){

    vincitore.innerHTML = `Complimenti hai vinto!`

} else {

    vincitore.innerHTML = `Ci dispiace, hai perso!`

}