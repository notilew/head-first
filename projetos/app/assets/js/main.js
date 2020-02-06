function criaMensagem(classe, mensagem) {
    const p = document.createElement('p');

    p.textContent = mensagem;
    p.classList.add(classe);

    const div = document.querySelector('div#msg');

    div.innerHTML = '';
    div.appendChild(p);
}

function validaBase(base) {
    let validacao = true;

    if (base === 0 || Number.isNaN(base)) validacao = false;

    return validacao;
}

function validaAltura(altura) {
    let validacao = true;

    if (altura === 0 || Number.isNaN(altura)) validacao = false;

    return validacao;
}

function escopo() {
    const form = document.querySelector('div#aside form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const base = Number(e.target.querySelector('#base').value);
        const altura = Number(e.target.querySelector('#altura').value);

        if (!validaBase(base)) {
            criaMensagem('error', 'Valor da base inválido!');

            return;
        }
        
        if (!validaAltura(altura)) {
            criaMensagem('error', 'Valor da altura inválido!');

            return;
        }
    });
}

escopo();