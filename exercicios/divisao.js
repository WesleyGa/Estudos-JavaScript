const calculo1 = (dividendo, divisor) => {
    let resto = dividendo % divisor;
    return console.log(resto);
}


const calculo2 = function (dividendo, divisor) {
    let resto = dividendo % divisor;
    console.log(resto);
}

function calculo3(dividendo, divisor) {
    let resto = dividendo % divisor;

    console.log(resto);
    /* Retirei o 'return' porque aprendi que é redundante no contexto de exibir no console.
       O console.log já exibe o valor diretamente no console, 
       e o valor retornado por console.log é undefined. Portanto, 
       o return não traz nenhuma vantagem aqui*/
}

// Diferentes funçoes apenas para fixar 

calculo1(14, 3);
calculo2(16, 9);
calculo3(10, 3);