/**
 * Conversão Implícita de Dados
 * São conversões de dados que o próprio JavaScript realiza
 */

/**
 * Conversão Explícita de Dados
 * São conversões de dados que o próprio Desenvolvedor realiza
 */
let score = '100';

console.log(`tipo de score: ${typeof score} ${score + 1}`); // 1001

score = Number(score);

console.log(`tipo de score: ${typeof score} ${score + 1}`); // 101

const crazyConversion = Number('Maça');

console.log(crazyConversion); // NaN

const convertedNumber = String(97);

console.log(`tipo de convertedNumber: ${typeof convertedNumber} ${convertedNumber}`);

const booleanConversion = Boolean(10);

console.log(`tipo de booleanConversion: ${typeof booleanConversion} ${booleanConversion}`);

/**
 * Valores Falsy
 * - false
 * - 0
 * - "", '', ``
 * - null
 * - undefined
 * - NaN
 */

/**
 * Valores Truthy
 * - Qualquer valor que não é falsy
 */