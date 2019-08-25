(function(document) {
  'use strict';

  var calcular = document.getElementById('btn-calcular');

  calcular.addEventListener('click', calculaSalarioLiquido);

  function calculaSalarioLiquido(evento) {
    evento.stopPropagation();

    var salario = new Salario();

    salario.salarioBruto = document.getElementById('salario-bruto').getAttribute('value');
    salario.numeroDependentes = document.getElementById('numero-dependentes').getAttribute('value');
    salario.outrosDescontos = document.getElementById('outros-descontos').getAttribute('value');

    console.log(salario);
  }
})(document);