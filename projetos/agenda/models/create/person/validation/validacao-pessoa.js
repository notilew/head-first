function validaPessoa(pessoa) {
    if (pessoa && typeof pessoa === 'object') {
        if (typeof pessoa.nome === 'string') {
            pessoa.nome = pessoa.nome.toLowerCase();
        }

        if (typeof pessoa.sobrenome === 'string') {
            pessoa.sobrenome = pessoa.sobrenome.toLowerCase();
        }
    }
}