function placeOrder() {
    
}

function updateOrder() {
  var numberOfCakeDonuts = document.getElementById('number-cake-donuts').value;
  var numberOfGlazedDonuts = document.getElementById('number-glazed-donuts').value;
  var subtotal = calculateSubtotal(numberOfCakeDonuts, numberOfGlazedDonuts);
  var tax = calculateTaxRate(subtotal);
  var total = calculateTotal(subtotal, tax);

  document.getElementById('subtotal').value = subtotal.toFixed(2);
  document.getElementById('tax').value = tax.toFixed(2);
  document.getElementById('total').value = total.toFixed(2);
}

function calculateSubtotal(numberOfCakeDonuts, numberOfGlazedDonuts) {
  const PRICE_OF_DONUT = 0.50;
  
  return (parseInt(numberOfCakeDonuts) + parseInt(numberOfGlazedDonuts)) * PRICE_OF_DONUT;
}

function calculateTaxRate(subtotal) {
  const TAX_RATE = 0.70;
  
  return subtotal * TAX_RATE;
}

function calculateTotal(subtotal, tax) {
  return subtotal + tax;
}
