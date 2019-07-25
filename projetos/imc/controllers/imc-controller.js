function _calculaIMCCOntroller() {

    var pessoa = new Pessoa();

    pessoa.nome = document.getElementById('nome').value;
    // pessoa.sexo = document.getElementById('sexo').value;
    pessoa.idade = document.getElementById('idade').value;
    pessoa.altura = document.getElementById('altura').value;
    pessoa.peso = document.getElementById('peso').value;

    _calculaIMCModel(pessoa);

    console.log(pessoa);
}