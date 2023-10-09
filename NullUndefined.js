const a  = {name: "teste"}; //Essa constante não possui o conteúdo do objeto, mas sim o endereço no qual esse objeto está localizado.

const b = a; /* A constante 'b' recebe o mesmo endereço ao qual 'a' aponta, 
              o que significa que ambas as constantes 'a' e 'b' estão apontando para o mesmo endereço de objeto. */

b.name = 'Wesley';

console.log(a);