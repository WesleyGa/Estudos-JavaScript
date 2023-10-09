const a  = {name: "teste"}; //Essa constante não possui o conteúdo do objeto, mas sim o endereço no qual esse objeto está localizado.

const b = a; /* A constante 'b' recebe o mesmo endereço ao qual 'a' aponta, 
              o que significa que ambas as constantes 'a' e 'b' estão apontando para o mesmo endereço de objeto. */

b.name = 'Wesley'; /* A partir de agora, o atributo name das constantes 'A' e 'B' será 'Wesley', uma vez que ambas 
                   estão apontando para o mesmo local de memoria." */

console.log(a); 

let c = 3; 

let d = c; 

d++;

console.log(d);  /* Neste caso, a variável 'd' não apontará para o mesmo local de memória da variável 'c', 
                 porque, é um valor primitivo da linguagem, ocorre uma cópia por valor.*/

console.log(c);

