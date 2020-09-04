/**
 * Template String
 * Permite interpolar variáveis dentro de estrings
 * Permite criar templates HTML
 */

const title = 'É bolacha ou biscoito?';
const author = 'Wellington Felix';
const comments = 15;

// usando concatenação
const postMessage01 = 'O post "' + title + '", do ' + author + ', tem ' + comments + ' comentários.';

console.log(postMessage01);

// usando template string
const postMessage02 = `O post "${title}", do ${author}, tem ${comments} comentários`;

console.log(postMessage02);

// criando templates HTML
const html = `
    <h2>${title}</h2>
    <p>Autor: ${author}</p>
    <span>Este post tem ${comments} comentários</span>
`;

console.log(html);