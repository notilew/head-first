function calculatePrice() {
  var income = document.getElementById('income').value;
  
  if (income !== '' && !isNaN(value)) {
    var price = income * 4;
  
    alert('You can buy a house up to $' + price);
  }
}