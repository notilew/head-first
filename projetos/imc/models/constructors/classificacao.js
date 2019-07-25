var Classificacao =
    (function() {
        'use strict';

        function Classificacao() {

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

            this.retornaDescricaoDaClassificacao = function(posicao) {
                if (this.descricao.length === 0) {
                    this.inicializaArrayDescricao();
                }

                for (var i = 0; i <= this.descricao.length; i++) {
                    if (posicao == i) {
                        return this.descricao[i];
                    }
                }
            }

        }

        return Classificacao;
    })();