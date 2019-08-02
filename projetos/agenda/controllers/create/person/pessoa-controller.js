(function(window, document) {
    'use strict';

    document.querySelector('form').addEventListener('submit', function(evento) {
        evento.stopPropagation();

        var flag = true;

        if (!document.getElementById('nome').value ||
            !document.getElementById('sobrenome').value ||
            !document.getElementById('sexo').value ||
            !document.getElementById('nascimento').value) { flag = false; }

        if (!flag) {
            evento.preventDefault();

            alert('Preencha todos os campos!');
        } else {
            evento.preventDefault();

            var pessoa = new window.Pessoa();

            pessoa.setNome(document.getElementById('nome').value);
            pessoa.setSobrenome(document.getElementById('sobrenome').value);
            pessoa.setSexo(document.getElementById('sexo').value);
            pessoa.setNascimento(document.getElementById('nascimento').value);

            validaPessoa(pessoa);
        }
    });
})(window, document);