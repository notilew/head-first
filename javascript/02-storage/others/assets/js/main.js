function updateOrder() {
  const donutOrder = new DonutOrder();
  
  donutOrder.setNumberOfCakeDonuts = document.getElementById('num-cake-donuts').value;
  donutOrder.setNumberOfGlazedDonuts = document.getElementById('num-glazed-donuts').value;
  donutOrder.calculateSubtotal();
  donutOrder.calculateTax();
  donutOrder.calculateTotal();
  
  document.getElementById('subtotal').value = donutOrder.getSubtotal;
  document.getElementById('tax').value = donutOrder.getTax;
  document.getElementById('total').value = donutOrder.getTotal;
}
