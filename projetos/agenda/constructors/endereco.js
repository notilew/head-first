(function(window) {
    'use strict';

    window.endereco =
        function Endereco() {
            var tipo = undefined;
            var logradouro = undefined;
            var complemento = undefined;
            var numero = undefined;
            var cep = undefined;
            var referencia = undefined;
            var distrito = undefined;
            var localidade = undefined;
            var uf = undefined;

            this.getTipo =
                function() {
                    return tipo;
                }

            this.setTipo =
                function(novoTipo) {
                    tipo = novoTipo;
                }

            this.getLogradouro =
                function() {
                    return logradouro;
                }

            this.setLogradouro =
                function(novoLogradouro) {
                    logradouro = novoLogradouro;
                }

            this.getComplemento =
                function() {
                    return complemento;
                }

            this.setComplemento =
                function(novoComplemento) {
                    complemento = novoComplemento;
                }

            this.getNumero =
                function() {
                    return numero;
                }

            this.setNumero =
                function(novoNumero) {
                    numero = novoNumero;
                }

            this.getCep =
                function() {
                    return cep;
                }

            this.setCep =
                function(novoCep) {
                    cep = novoCep;
                }

            this.getReferencia =
                function() {
                    return referencia;
                }

            this.setReferencia =
                function(novaReferencia) {
                    referencia = novaReferencia;
                }

            this.getDistrito =
                function() {
                    return distrito;
                }

            this.setDistrito =
                function(novoDistrito) {
                    distrito = novoDistrito;
                }

            this.getLocalidade =
                function() {
                    return localidade;
                }

            this.setLocalidade =
                function(novaLocalidade) {
                    localidade = novaLocalidade;
                }

            this.getUf =
                function() {
                    return uf;
                }

            this.setUf =
                function(novaUf) {
                    uf = novaUf;
                }
        }
})(window);