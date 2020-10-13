var kmPercorsi = prompt('Quanti km devi fare?');

var anniUtente = prompt('Quanti anni hai?');

var minorenne = 18;

var anziano = 65;

if (!isNaN(kmPercorsi) && !isNaN(anniUtente)) {
  console.log('è un numero');

  var prezzoViaggio = kmPercorsi * 0.21;

  console.log(prezzoViaggio);

  if (anniUtente < minorenne ) {

    var prezzoDaMostrare = prezzoViaggio - (prezzoViaggio * 20 / 100);

    document.getElementById('costo').innerHTML = 'Grazie allo sconto del 20% il prezzo del tuo biglietto è di: ' + prezzoDaMostrare + '€';
  } else if (anniUtente >= anziano) {

    var prezzoDaMostrare = prezzoViaggio - (prezzoViaggio * 40 / 100);

    document.getElementById('costo').innerHTML = 'Grazie allo sconto del 40% il prezzo del tuo biglietto è di: ' + prezzoDaMostrare + '€';
  } else {
    document.getElementById('costo').innerHTML = 'Il prezzo del tuo biglietto è di: ' + prezzoViaggio + '€';
  }

} else {
  console.log('Non è un numero');

  alert('Inserire solo numeri e non lettere')
}
