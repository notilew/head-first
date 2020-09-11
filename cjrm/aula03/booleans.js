// Booleans e comparações
console.log(true, false, 'true', 'false');

// Métodos podem retornar booleanos
const email = 'wellington_bhmg@hotmail.com';
const includes = email.includes('wellington');
const names = ['wellington', 'palloma', 'maria'];
const arrIncludes = names.includes('palloma');

console.log('includes', includes);
console.log('arrIncludes', arrIncludes);

// Operadores de comparação
const age = 31;

console.log(age == 35);
console.log(age != 35);
console.log(age < 35);
console.log(age > 35);
console.log(age <= 35);
console.log(age >= 35);

const name = 'wellington';

/**
 * Em strings, o JavaScript considera as últimas letras do alfabeto sendo maiores que as primeiras
 * Em strings, o JavaScript considera as letras minúsculas maiores que as letras maiúsculas
 * Em strings, o JavaScript considera letras minúsculas diferente de letras maiúsculas
 */

console.log(name == 'palloma');
console.log(name == 'Palloma');
console.log(name > 'palloma');
console.log(name > 'Wellington');

/**
 * Utilizando comparações comuns == ou != o JavaScript converte o tipo do segundo valor da expressão para
 * o mesmo tipo do primeiro valor da expressão
 */

const number = 10;

console.log(number == 10);
console.log(number == '10');
console.log(number != 10);
console.log(number != '10');

/**
 * Para que haja a comparação de valor e tipo podemos utilizar os operadores === ou !===
 */

console.log(number === 10);
console.log(number === '10');
console.log(number !== 10);
console.log(number !== '10');
