function ordenarArray(array) {
    let t = array.length; // tamanho do array

    for (let i = 0; i < t - 1; i++) { // percorre o comprimento do array e cada vez que 'i' aumenta, significa que mais um elemento foi colocado na posição correta no final do array.
        console.log("I = " + i)

        for (let j = 0; j < t - i - 1; j++) { /*  diminui a quantidade de comparação de acordo com o loop externo,
                                                  porque os ultimos elementos (i) ja estão em ordem. */
            console.log("J = " + j)
            // Lógica da troca
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp;
            }
        }
        console.log("Troca " + (i + 1))
    }
    return array;
}
let array = [90, 29, 28, 20, 1];
let arrayOrdenado = ordenarArray(array);
console.log(arrayOrdenado)
