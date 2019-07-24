var formularioController =
    (function(document) {
        'use strict';

        function formularioController() {

            var pessoa = new Pessoa();

            pessoa.nome = document.getElementById('nome').textContent;
            pessoa.sexo = document.getElementById('sexo').textContent;
            pessoa.idade = document.getElementById('idade').textContent;
            pessoa.altura = document.getElementById('altura').textContent;
            pessoa.peso = document.getElementById('peso').textContent;

        }

        return formularioController;
    })(document);

/* var classificacao = new Classificacao();
var imc = new IMC();

classificacao.inicializaArrayDescricao();
imc.inicializaArrayTabela();

imc.calculaIMC(pessoa.peso, pessoa.altura);

classificacao.indice = imc.retornaIndiceDaTabela();
classificacao.verificaClassificacao();

console.log(classificacao);
console.log(imc); */

console.log(formularioController);