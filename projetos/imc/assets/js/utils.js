(function(window, document) {
    'use strict';

    document.querySelector('#btn-homen').addEventListener('click', function(evento) {
        evento.stopPropagation();

        window.sexo = 1;
    });

    document.querySelector('#btn-mulher').addEventListener('click', function(evento) {
        evento.stopPropagation();

        window.sexo = 2;
    });
})(window, document);