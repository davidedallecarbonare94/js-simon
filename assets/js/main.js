//Un alert() espone 5 numeri generati casualmente.
//Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/* Un alert() espone 5 numeri generati casualmente. */
//genero una funzione che mi permetta di creare numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber()
/* console.log(getRandomNumber(1, 10)); */

//creo un array che raccolga i numeri generati

var randomGeneratedNumbers = [];

//pusho i numeri finchè non diventano 5

while (randomGeneratedNumbers.length < 5) {
    randomGeneratedNumbers.push(getRandomNumber(1, 10000))
}
console.log(randomGeneratedNumbers);

//espongo i numeri pushati nell'array tramite alert

alert("Questi sono i numeri del pc: " + randomGeneratedNumbers);

/* Da li parte un timer di 30 secondi. */
/* Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). */
//chiedo 5 volte all'utente di inserire il numero,
//impostando una lista dove verranno inseriti
var insertNumber;
var insertedNumbersList = [];
var pcIndex;
var myIndex;

//la funzione fa partire la richiesta di inserire un numero dopo 30 secondi
setTimeout(function () {
    for (var i = 0; i < 5; i++) {
        var insertNumber = Number(prompt("Inserisci un numero"));
        //i numeri vengono inseriti nella lista di numeri inseriti dall'utente
        insertedNumbersList.push(insertNumber)
    } console.log(insertedNumbersList);
    //paragono la lista di numeri utente e la lista di numeri randomici
    var winner = false;
    for (j = 0; j < 5; j++) {
        console.log('array_utente ' + 'j: ' + insertedNumbersList[j]);
        console.log('array_random ' + 'j: ' + randomGeneratedNumbers[j]);
        /* Dopo che sono stati inseriti i 5 numeri, 
        il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
     if (insertedNumbersList[j] === randomGeneratedNumbers[j]) {
        winner = true;
    } else {
        winner = false
    }}
    if (winner == true) {
        alert("Complimenti! Hai vinto! I tuoi numeri: " + insertedNumbersList + "I numeri del pc: " + randomGeneratedNumbers);
    } else {
        alert("Peccato! Hai perso! I tuoi numeri: " + insertedNumbersList + "I numeri del pc: " + randomGeneratedNumbers);
    }
}, 30000)
/* Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
//paragono i 2 array creati precedentemente creando un loop per vedere il loro indice

