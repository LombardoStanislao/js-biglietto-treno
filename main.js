var kmPercorsi = prompt('Quanti km devi fare?');

var anniUtente = prompt('Quanti anni hai?');

var minorenne = 18;

var anziano = 65;

if (!isNaN(anniUtente)) {
  console.log('è un numero');
} else {
  console.log('Non è un numero');
}

var prezzoViaggio = (kmPercorsi * 0,21);

console.log(prezzoViaggio);

if (anniUtente <= minorenne ) {
  console.log(prezzoViaggio * 20 / 100);
}
