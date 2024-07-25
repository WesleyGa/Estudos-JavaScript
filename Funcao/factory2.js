function criarProduto(nome, preco) {
    let desconto = 0.1;
    return {
        nome: nome,
        preco: preco * (1 - desconto)
    }
}

console.log(criarProduto("Camiseta", 99.90))