(function(window, document) {
    'use strict';

    window.addEventListener('load', function() {
        var calcular = document.getElementById('btn-calcular');

        calcular.addEventListener('click', calculaSalarioLiquido);

        function calculaSalarioLiquido(evento) {
            evento.stopPropagation();

            var salario = new Salario();

            console.log(salario);
        }
    });
})(window, document);