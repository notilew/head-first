(function(window) {
  'use strict';

  function Salario() {

    const IRRF = 7.50;
    const INSS = 9.00;

    this.salarioBruto = 0;
    this.salarioLiquido = 0;
    this.numeroDependentes = 0;
    this.outrosDescontos = 0;
    this.totalSalario = 0;
    this.totalDescontos = 0;

    this.retornaIRRF = retornaIRRF;
    this.retornaINSS = retornaINSS;
    this.validaSalarioBruto = validaSalarioBruto;

    function retornaIRRF() {
      return IRRF;
    }

    function retornaINSS() {
      return INSS;
    }

    function validaSalarioBruto() {
      if (this.salarioBruto) {
        if (!isNaN(this.salarioBruto)) {
          return true;
        }
      }
    }

  }

  window.Salario = Salario;
})(window);