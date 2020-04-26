class DonutOrder {

  constructor() {
    this.taxRate = Number(0.0925);
    this.donutPrice = Number(0.50);
    this.numberOfCakeDonuts = Number(0);
    this.numberOfGlazedDonuts = Number(0);
    this.subtotal = Number(0);
    this.tax = Number(0);
    this.total = Number(0);
  }

  get getTaxRate() {
    return this.taxRate;
  }

  get getDonutPrice() {
    return this.donutPrice;
  }

  get getNumberOfCakeDonuts() {
    return this.numberOfCakeDonuts;
  }

  set setNumberOfCakeDonuts(value) {
    this.numberOfCakeDonuts = Number.parseInt(value);
  }

  get getNumberOfGlazedDonuts() {
    return this.numberOfGlazedDonuts;
  }

  set setNumberOfGlazedDonuts(value) {
    this.numberOfGlazedDonuts = Number.parseInt(value);
  }

  get getSubtotal() {
    return this.subtotal.toFixed(2);
  }

  get getTax() {
    return this.tax.toFixed(2);
  }

  get getTotal() {
    return this.total.toFixed(2);
  }

  calculateSubtotal() {
    if (this.numberOfCakeDonuts || this.numberOfGlazedDonuts) {
      this.subtotal = (this.numberOfCakeDonuts + this.numberOfGlazedDonuts) * this.donutPrice;
    }
  }

  calculateTax() {
    if (this.subtotal) {
      this.tax = this.subtotal * this.taxRate;
    }
  }

  calculateTotal() {
    if (this.subtotal && this.tax) {
      this.total = this.subtotal + this.tax;
    }
  }

}