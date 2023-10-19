function imprimirSoma(a, b) {
    console.log(a + b);
};

imprimirSoma(10, 10);

// função para retorno

function soma(A, B = 0) { // 0 é o valor padrão.
    return A + B;
}

console.log(soma(2 + 1));
console.log(soma(2)); 
console.log(soma()); // Not a number. Para tratar o erro é preciso definir um padrão para a variavel 'A'. 