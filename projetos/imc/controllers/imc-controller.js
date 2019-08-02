(function(document) {
    'use strict';

    document.getElementById('p-calcular').addEventListener('click', function(evento) {
        evento.stopPropagation();

        if (evento.target.localName === 'button') {
            var flag = true;

            if (!document.getElementById('nome').value) { flag = false; }
        }
    });
})(document);

/* function _calculaIMCCOntroller() {

  var pessoa = new Pessoa();

  pessoa.nome = document.getElementById('nome').value;
  pessoa.sexo = window.sexo;
  pessoa.idade = document.getElementById('idade').value;
  pessoa.altura = document.getElementById('altura').value;
  pessoa.peso = document.getElementById('peso').value;

  _calculaIMCModel(pessoa);

  if (pessoa.classificacao) {
    switch (pessoa.classificacao) {
      case 'abaixo do peso':
        break;
      case 'peso normal':
        document.getElementById('resultado').innerHTML = '<p>Parabéns, ' + pessoa.nome + ' seu IMC é <strong>' + pessoa.imc + 'kg/m²</strong> e você está dentro do peso adequado!</p>';
        break;
      case 'sobrepeso':
        break;
      case 'obesidade grau 1':
        break;
      case 'obesidade grau 2':
        break;
      case 'obesidade grau 3':
        break;
    }

    var tr = document.querySelectorAll('table tbody tr');

    for (var i = 0; i < tr.length; i++) {
      var descricoes = tr[i];
      var descricao = descricoes.querySelector('.descricao').textContent;

      if (descricao.toLowerCase() == pessoa.classificacao.toLowerCase()) {
        descricoes.className = 'destaque';
      }
    }
  }

} */