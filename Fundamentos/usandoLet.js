var numero = 1;
{
    let numero = 2; // O valor não sera sobrescrito porque o let tem escopo de bloco.
    console.log('Dentro = ', numero);
}
console.log('Fora = ', numero);

// let tem escopo global, de função e bloco. 