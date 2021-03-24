/*Consegna
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... 
(non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), 
del nuovo utente inserito sopra all'interno dell'array, 
dopo l'ordinamento alfabetico*/

//1.CHIEDI IL COGNOME ALL UTENTE.

var cognome = prompt("inserire il cognome.");

while(!isNaN(cognome)){
    var cognome = prompt("Devi inserire un cognome.");
}

//2. INSERIRE IL COGNOME IN UN ARRAY CON ALTRI COGNOMI.

var cognomi = ["bianchi", "neri", "rossi", "verdi", "gialli"];

cognomi.push(cognome);

//3. STAMPA LA LISTA IN ORDINE ALFABETICO.

cognomi.sort();

console.log(cognomi);

//4.SCRIVI ANCHE LA POSIZIONE UMANA DEL NOME INSERITO NELL ARRAY.

var posizione = cognomi.indexOf(cognome);

console.log(posizione + 1);


