(function(window) {
    'use strict';

    window.pessoa = function Pessoa() {
        var nome = undefined;
        this.sobrenome = undefined;
        this.sexo = undefined;
        this.nascimento = undefined;
        this.email = undefined;

        this.getNome = function() {
            return nome;
        }

        this.setNome = function(novoNome) {
            if (!nome) {
                nome = novoNome;
            }
        }
    }
})(window);