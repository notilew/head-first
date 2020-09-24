// for loop
const names = ['wellington', 'palloma', 'maria', 'jose'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// break e continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    const score = scores[i];

    if (score === 0) {
        continue; // pula uma iteração ignorando todo código abaixo do continue no bloco for
    }

    console.log(`sua pontuação: ${score}`);

    if (score === 100) {
        console.log(`parabéns, você atingiu a pontuação máxima.`);

        break; // para a execução do loop
    }
}