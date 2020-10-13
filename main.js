var kmPercorsi = prompt('Quanti km devi fare?');

var anniUtente = prompt('Quanti anni hai?');

var minorenne = 18;

var anziano = 65;

if (!isNaN(anniUtente)) {
  console.log('è un numero');
} else {
  console.log('Non è un numero');
}

var prezzoViaggio = kmPercorsi * 0.21;

if (anniUtente <= minorenne ) {
  document.getElementById('costo') = ('Grazie allo sconto del 20% il prezzo del tuo biglietto è di: ' + prezzoViaggio - (prezzoViaggio * 20 / 100)
} else if (anniUtente >= anziano) {
  document.getElementById('costo') = ('Grazie allo sconto del 40% il prezzo del tuo biglietto è di: ' + prezzoViaggio - (prezzoViaggio * 40 / 100));
} else {
  document.getElementById('costo')= ('Il prezzo del tuo biglietto è di: ' + prezzoViaggio;
}
