function _calculaIMCModel(pessoa) {

    if (pessoa.peso && pessoa.altura) {
        var imc = new IMC();

        pessoa.imc = imc.calculaIMC(pessoa.peso, pessoa.altura);

        if (pessoa.imc) {
            var classificacao = new Classificacao();

            pessoa.classificacao = imc.retornaIndiceDaTabela(pessoa.imc);

            pessoa.classificacao = classificacao.retornaDescricaoDaClassificacao(pessoa.classificacao);
        }
    }

}