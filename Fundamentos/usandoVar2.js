var numero = 1;
{
    var numero = 2; // Sobrescreveu, o valor da variavel passara a ser '2', dentro e fora do escopo.
    console.log('Dentro', numero);
}
cosole.log('Fora', numero);