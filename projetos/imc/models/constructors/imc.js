var IMC =
  (function() {
    'use strict';

    function IMC() {

      this.imc = 0;
      this.tabela = [];

      this.calculaIMC = function(peso, altura) {
        var imc = 0;

        imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

        this.imc = parseFloat(imc.toFixed(1));
      }

      this.inicializaArrayTabela = function() {
        this.tabela = [
          18.5,
          24.9,
          29.9,
          34.9,
          39.9,
          40.0
        ];
      }

      this.retornaIndiceDaTabela = function() {
        if (this.tabela.length === 0) {
          this.inicializaArrayTabela();
        }

        for (var i = 0; i <= this.tabela.length; i++) {
          if (this.imc <= this.tabela[i]) {
            return i;
          }
        }
      }

    }

    return IMC;
  })();