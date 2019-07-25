var Pessoa =
    (function() {
        'use strict';

        function Pessoa() {

            this.nome = undefined;
            this.sexo = undefined;
            this.idade = undefined;
            this.altura = undefined;
            this.peso = undefined;
            this.imc = 0;
            this.classificacao = undefined;

        }

        return Pessoa;
    })();