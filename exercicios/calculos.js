function calculos(n1 = 0, n2 = 0) {
    let soma = n1 + n2;
    let subtracao = n1 - n2;
    let multiplicacao = n1 * n2;
    let divisao = n1 / n2;
    return console.log(`Soma: ${soma}\n subtração: ${subtracao}\n multiplicação: ${multiplicacao}\n divisão: ${divisao.toFixed(2)}`)
}

calculos(2, 3);