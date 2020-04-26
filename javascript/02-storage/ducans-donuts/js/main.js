function placeOrder(form) {
  var name = document.getElementById('name').value;
  var numberOfCakeDonuts = document.getElementById('number-cake-donuts').value;
  var numberOfGlazedDonuts = document.getElementById('number-glazed-donuts').value;
  var minutes = document.getElementById('minutes-pickup').value;

  if (name == '') {
    alert('You need to provide a name before submitting the order!');
  } else if (numberOfCakeDonuts == '' || numberOfGlazedDonuts == '') {
    alert('You need to provide the number of cake or glazed donuts before submitting the order!');
  } else if (numberOfCakeDonuts == '0' && numberOfGlazedDonuts == '0') {
    alert('you need to provide at least the amount of one type of donut before submitting the order!');
  } else if (minutes == '' || isNaN(minutes)) {
    alert('You need to provide the number of minutes until collection before submitting the order!');
  } else {
    form.submit();
  }
}

function updateOrder() {
  const TAX_RATE = 0.0925;
  const DONUT_PRICE = 0.50;

  var numberOfCakeDonuts = parseDonuts(document.getElementById('number-cake-donuts').value);
  var numberOfGlazedDonuts = parseDonuts(document.getElementById('number-glazed-donuts').value);

  if (isNaN(numberOfCakeDonuts)) numberOfCakeDonuts = 0;
  if (isNaN(numberOfGlazedDonuts)) numberOfGlazedDonuts = 0;

  var subtotal = (numberOfCakeDonuts + numberOfGlazedDonuts) * DONUT_PRICE;
  var tax = subtotal * TAX_RATE;
  var total = subtotal + tax;

  document.getElementById('subtotal').value = '$' + subtotal.toFixed(2);
  document.getElementById('tax').value = '$' + tax.toFixed(2);
  document.getElementById('total').value = '$' + total.toFixed(2);
}

function parseDonuts(donutString) {
  var numberOfDonuts = parseInt(donutString);

  if (donutString.indexOf('dozen') != -1) {
    numberOfDonuts *= 12;
  }

  return numberOfDonuts;
}
