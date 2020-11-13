/**
 * Strings
 * São encadeamentos de caracteres
 * Podem ser concatenadas (juntar cadeias de caracteres)
 * Possuem propriedades e métodos
 * Acessamos propriedades e métodos das strings pela sintaxe de .
 * Propriedades são acessadas pelo seu nome
 * Métodos são acessados pelo seu nome seguido de () e podem necessitar ou não de argumentos
 */

// strings
console.log('hello world!');

const email = 'wellingtonfelixbhmg@hotmail.com';

console.log(email);

// concatenção de strings
const firstName = 'Wellington';
const lastName = 'Felix';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// acessando caracteres
console.log(fullName[6]);

// comprimento de uma string
console.log(fullName.length);

// métodos de string
const result = fullName.toLowerCase();

console.log(result);

const index = email.indexOf('@');

console.log(index);

/**
 * Métodos
 */

/**
 * Retorna o índice da última ocorrência de um caractere
 * @argument string caractere a se pesquisado
 */
console.log(`lastIndexOf: ${email.lastIndexOf('ol')}`);

/**
 * Retorna uma fatia da string
 * @argument number posição inicial desejada
 * @argument number posição final desejada (deve-se considerar um caractere a mais)
 */
console.log(`slice: ${email.slice(0, 10)}`);
console.log(`slice: ${email.slice(10, 15)}`);

/**
 * Substitui uma string
 * @argument string string que será substituída
 * @argument string nova string
 */
console.log(`replace: ${email.replace('wellington', 'palloma')}`);
