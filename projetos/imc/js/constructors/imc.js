var IMC =
  (function() {
    'use strict';

    function IMC() {

      this.resultado = 0;

      this.calculaIMC = function(peso, altura) {
        this.resultado = peso / (altura * altura);
      }

    }

    return IMC;
  })();