function classificarTriangulo(a, b, c) {

    if (a === b && b === c) {
        return "Equilátero"
    } else if (a === b || b === c || a === c) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

console.log(classificarTriangulo(10, 10, 10));
console.log(classificarTriangulo(7, 7, 2));
console.log(classificarTriangulo(9, 7, 3)); 