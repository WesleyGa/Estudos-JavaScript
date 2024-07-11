function soma(a, b, c){
    a = a !== undefined ? a : 0; // se a for diferente de undefined (0) retorna o valor a se não retorna 0
    b = 1 in arguments ? b : 0; // se o valor 1 estiver presente nos argumentos, retorna o valor de b, senão, retorna 0.
    c = isNaN(c) ? 0 : c; // se c for igual a 'NaN' retorna 0, senão, retorna o valor de C 
    return a + b + c;
}

console.log(soma(4), soma(2, 0, 2), soma(0,0,0));


// padrão do es2015

function soma2(a = 0, b = 0, c = 0){
    return a + b + c;
}

console.log(soma2(1,1,9))