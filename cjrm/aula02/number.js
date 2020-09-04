/**
 * Number
 * São números inteiros ou decimais
 * Os números decimais devem ser separados por .
 * Seguem a precedência da matemática
 * Podem ser concatenados com string e o resultado sempre será uma string
 */

// inteiros e decimais
const radius = 10;
const pi = 3.14;

// operadores aritméticos
const area = pi * radius ** 2;

// ordem de operações - parênteses, potenciação e raízes, multiplicação e divisão, adição e subtração
const crazyOperation = 5 * (10 - 3) ** 2;

// operadores de incremento e decremento
let postLikes = 10;

postLikes++;
postLikes--;

// operadores addition, subtraction, multiplication e division assignment
postLikes += 2;
postLikes -= 2;
postLikes *= 2;
postLikes /= 2;

// NaN - Not a Number
console.log(7 * 'Olá Mundo!');

// concatenação de string com número
const likesMessage = 'O post tem ' + postLikes + ' likes.';

console.log(likesMessage);