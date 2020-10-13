var kmPercorsi = prompt('Quanti km devi fare?');

document.getElementById('km').value = kmPercorsi

var anniUtente = prompt('Quanti anni hai?');

document.getElementById('age').value = anniUtente

var minorenne = 18;

var anziano = 65;

if (!isNaN(kmPercorsi) && !isNaN(anniUtente)) {
  console.log('è un numero');

  var prezzoViaggio = kmPercorsi * 0.21;

  console.log(prezzoViaggio);

  if (anniUtente < minorenne ) {

    var prezzoDaMostrare = prezzoViaggio - (prezzoViaggio * 20 / 100);

    document.getElementById('sconto').innerHTML = 'Grazie allo sconto del 20% il prezzo del tuo biglietto è di: '

    document.getElementById('costo').value = prezzoDaMostrare + '€';
  } else if (anniUtente >= anziano) {

    var prezzoDaMostrare = prezzoViaggio - (prezzoViaggio * 40 / 100);

    document.getElementById('sconto').innerHTML = 'Grazie allo sconto del 40% il prezzo del tuo biglietto è di: '

    document.getElementById('costo').value = prezzoDaMostrare + '€';
  } else {


    document.getElementById('costo').value = prezzoViaggio + '€';
  }

} else {
  console.log('Non è un numero');

  alert('Inserire solo numeri e non lettere')
}
