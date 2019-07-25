function _calculaIMCModel(pessoa) {

  if (pessoa.peso && pessoa.altura) {
    var imc = new IMC();

    imc.calculaIMC(pessoa.peso, pessoa.altura);

    if (imc.imc) {
      classificacao.indice = imc.retornaIndiceDaTabela();

      classificacao.verificaClassificacao();

      return classificacao;
    }
  }

}