Number.prototype.entre = function (inicio, fim) { /*O método entre adicionado ao protótipo de Number é útil para verificar rapidamente se
                                                   um número está dentro de um determinado intervalo, tornando o código mais legível e expressivo.*/
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Aluno 10 !!!');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota invalida');
    }
}

imprimirResultado(3.89);