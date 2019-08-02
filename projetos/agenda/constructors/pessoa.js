(function(window) {
    'use strict';

    window.pessoa =
        function Pessoa() {
            var nome = undefined;
            var sobrenome = undefined;
            var sexo = undefined;
            var nascimento = undefined;

            this.getNome =
                function() {
                    return nome;
                }

            this.setNome =
                function(novoNome) {
                    nome = novoNome;
                }

            this.getSobrenome =
                function() {
                    return sobrenome;
                }

            this.setSobrenome =
                function(novoSobrenome) {
                    sobrenome = novoSobrenome;
                }

            this.getSexo =
                function() {
                    return sexo;
                }

            this.setSexo =
                function(novoSexo) {
                    sexo = novoSexo;
                }

            this.getNascimento =
                function() {
                    return nascimento;
                }

            this.setNascimento =
                function(novoNascimento) {
                    nascimento = novoNascimento;
                }
        }
})(window);