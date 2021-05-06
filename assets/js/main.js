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
    randomGeneratedNumbers.push(getRandomNumber(1, 10))
}
console.log(randomGeneratedNumbers);

//espongo i numeri pushati nell'array tramite alert

alert(randomGeneratedNumbers);

/* Da li parte un timer di 30 secondi. */
/* Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). */
//chiedo 5 volte all'utente di inserire il numero,
//impostando una lista dove verranno inseriti
var insertNumber;
var insertedNumbersList = [];
setTimeout(function () {
    //la funzione fa partire la richiesta di inserire un numero dopo 30 secondi
    for (var i = 0; i < 5; i++) {
        var insertNumber = Number(prompt("Inserisci un numero"));
        //i numeri vengono inseriti nella lista di numeri inseriti dall'utente
        insertedNumbersList.push(insertNumber)
    }
    console.log(insertedNumbersList);
    for (j = 0; j < randomGeneratedNumbers.lenght; j++) {
        var pcIndex = randomGeneratedNumbers[j]
    }
    console.log(pcIndex);
    for (y = 0; y < insertedNumbersList.length; y++){
        var myIndex = insertedNumbersList[i]
    }
    console.log(myIndex);

}, 5000)
/* Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
//paragono i 2 array creati precedentemente creando un loop per vedere il loro indice
