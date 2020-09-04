/**
 * Arrays
 * São uma lista de dados relacionados entre si
 * Podem ser de qualquer tipo de dados
 * Pode conter tipos de dados diferentes
 */

// Declaração
const heroes = ['Batman', 'Catwoman', 'Iron Man'];

heroes[2] = 'Spider Man';

console.log(heroes);

const ages = [31, 25, 39, 40];

console.log(ages[0]);

/**
 * Métodos
 */

/**
 * Retorna uma string com todos os elementos do array separados por vírgula ou outro separador
 * @argument string separador
 */
console.log(`join: ${heroes.join()}`);
console.log(`join: ${heroes.join(' - ')}`);

/**
 * Retorna o índice da primeira ocorrência de um elemento no array
 * @argument number/string valor do elemento que deseja saber o índice
 */
console.log(`indexOf: ${ages.indexOf(25)}`);

/**
 * Retorna a concatenação de dois arrays
 * @argument object array que será concatenado
 */
console.log(`concat: ${heroes.concat(['Superman', 'Wolverine'])}`);

/**
 * Adiciona novas posições no array
 * @argument all valor a ser adicionado
 */
console.log(`push: ${heroes.push('Cyclops', 'Hulk')}`);

/**
 * Remove a última posição de um array
 */
console.log(`pop: ${heroes.pop()}`);