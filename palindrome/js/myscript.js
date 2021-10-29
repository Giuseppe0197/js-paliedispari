/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo. */


/* creiamo la variabile per far stampare in pagina il risultato */

let risultatoParola = document.getElementById("risultato");

/* creiamo un prompt per far inserire all'utente una parola */

const string = prompt("inserisci una parola per verificare che sia palindroma oppure no");

/* creiamo una funzione che stabilisce se la parola scritta dall'utente è palindroma oppure no */

function palindrome(){

    const parole = string.length;

    /* creiamo un ciclo per verificare se la parola è palindroma oppure no */

    for (let i = 0; i < parole; i++) {

        /* stabiliamo se la parola è palindroma */

        if (string[i] != string[parole - 1 -i]){

            /* andiamo a stampare sulla pagina il risultato */

            risultatoParola.innerHTML = `Non è palindroma`;

            return parole;

        }

    }

    /* andiamo a stampare sulla pagina il risultato */

    risultatoParola.innerHTML = `è palindroma`;

    return parole;

}

/* creiamo una costante che abbia il valore della funzione */

const verifica = palindrome(string);

/* facciamo un console log per verificare */

console.log(verifica);
