String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

console.log('Teste'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5, 6].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {  // Feito apenas para entender alguns detalhes, não faça isso.
    return "Lascou tudo"
}

console.log('Escola Coder'.reverse()) // Será revertido o 'Lascou tudo'