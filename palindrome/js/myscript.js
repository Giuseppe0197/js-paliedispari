/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo. */


/* creiamo la variabile per far stampare in pagina il risultato */

let wordResult = document.getElementById("risultato");

/* creiamo un prompt per far inserire all'utente una parola */

const insertedWord = prompt("inserisci una parola per verificare che sia palindroma oppure no");

/* creiamo una funzione che stabilisce se la parola scritta dall'utente è palindroma oppure no */

function palindrome(){

    /* creiamo un ciclo per verificare se la parola è palindroma oppure no */

    for (let i = 0; i < insertedWord.length / 2; i++) {

        /* stabiliamo se la parola è palindroma */

        if (insertedWord[i] !== insertedWord[insertedWord.length - 1 -i]){

            /* andiamo a stampare sulla pagina il risultato */

            wordResult.innerHTML = `Non è palindroma`;

            return insertedWord.length;

        }

    }

    /* andiamo a stampare sulla pagina il risultato */

    wordResult.innerHTML = `è palindroma`;

    return insertedWord.length;

}

/* creiamo una costante che abbia il valore della funzione */

const verify = palindrome(insertedWord);

/* facciamo un console log per verificare */

console.log(verify);
