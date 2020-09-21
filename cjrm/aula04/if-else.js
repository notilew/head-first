// else e else if
const password = '123456789101112';

if (password.length >= 12) {
    console.log('a senha possui 12 ou mais caracteres.');
} else if (password.length >= 8) {
    console.log('a senha possui 8 ou mais caracteres.');
} else {
    console.log('a senha deve conter 8 ou mais caracteres.');
}

// operadores lógicos || e &&
if (password.length >= 12 && password.includes('1')) {
    console.log('senha é muito forte');
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
    console.log('senha é forte');
} else {
    console.log('senha é fraca');
}