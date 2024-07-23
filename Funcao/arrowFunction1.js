let dobro = function(a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}


// Tira os parênteses se houver apenas um único parâmetro.
// sem as chaves eu tenho um retorno implícito
dobro = a => 2 * a;


console.log(dobro(5))