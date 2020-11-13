// Function Declaration
function sayHi() {
    console.log('Oi');
}

sayHi();
sayHi();
sayHi();

// Function Expression
const showPizza = function () {
    console.log('Pizza');
};

showPizza();
showPizza();
showPizza();

// Observação: Uma function declaration pode ser declarada no topo ou qualquer lugar do arquivo que o JavaScript aplicará o conceito de "Hoisting" levantando essa função para o topo do arquivo, isso não acontece com uma function expression.


// Argumentos, Parâmetros e Default Parameters
const myFunc = function (firstName = 'Estrôncio', lastName = 'Almeida') {
    console.log(`Oi ${firstName} ${lastName}!`);
};

myFunc('Wellington', 'Felix');
myFunc('Wellington');
myFunc();

// Retornando Valores
const double = function (number) {
    return number * 2;
};

const showValue = function (value) {
    return `O resultado é: ${value}`;
}

const result = double(4);

console.log(showValue(result));


// funções x métodos

// função é declarada fora do escopo de um objeto e ao ser ivocada, não utiliza a notação de .
// métodos são funções, mas estão dentro do escopo de um objeto ou de um tipo de dado e ao ser ivocada, utiliza a notação de .