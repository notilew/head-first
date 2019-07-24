var Classificacao =
    (function() {
        'use strict';

        function Classificacao() {

            this.indice = undefined;
            this.classificacao = undefined;
            this.descricao = [];

            this.inicializaArrayDescricao = function() {
                this.descricao = [
                    'abaixo do peso',
                    'peso normal',
                    'sobrepeso',
                    'obesidade grau 1',
                    'obesidade grau 2',
                    'obesidade grau 3'
                ]
            }

            this.verificaClassificacao = function() {
                for (var i = 0; i <= this.descricao.length; i++) {
                    if (this.indice == i) {
                        this.classificacao = this.descricao[i];
                    }
                }
            }

        }

        return Classificacao;
    })();