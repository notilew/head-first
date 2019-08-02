(function(window) {
    'use strict';

    window.Contato =
        function Contato() {
            var fixo = undefined;
            var movel = undefined;
            var comercial = undefined;
            var email = undefined;

            this.getFixo =
                function() {
                    return fixo;
                }

            this.setFixo =
                function(novoFixo) {
                    fixo = novoFixo;
                }

            this.getMovel =
                function() {
                    return movel;
                }

            this.setMovel =
                function(novoMovel) {
                    movel = novoMovel;
                }

            this.getComercial =
                function() {
                    return comercial;
                }

            this.setComercial =
                function(novoComercial) {
                    comercial = novoComercial;
                }

            this.getEmail =
                function() {
                    return email;
                }

            this.setEmail =
                function(novoEmail) {
                    email = novoEmail;
                }
        }
})(window);