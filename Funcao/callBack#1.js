const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a,b) {
    console.log("Função anônima : " + (b+1)+" " + a)
})


fabricantes.forEach(a => console.log("Arrow: " + a))