{
    {
        {
            {
                var sera = "Wesley";
                console.log(sera);
            }
        }
    }
}
console.log(sera); // é possovel acessar o local de memoria, mesmo fora do bloco, quando é 'var'.

function teste() {
    var local = 123;
    console.log(local); // Quando é uma função, é possivel acessar a variavel apenas localmente.
}

// console.log(local); local is not defined, a variavel não é visivel fora da função.

teste();
