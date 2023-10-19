const prod1 = {}; // o par de chaves representa um objeto, forma literal de escrever um objeto.

prod1.nome = 'Celular Ultra mega'; // cria o atributo nome, do obejeto prod1 
prod1.preco = 4998.90;  // cria o atributo preco, do obejeto prod1. 
prod1['Desconto legal'] = 0.40; // Evitar atributos com espaço 

console.log(prod1); 

const prod2 = {               //Outra forma de criar um obejto 
    nome: "Camisa polo",
    preco: 79.80,

    obj :{       // È possivel ter uma estrutura aninhada de obejetos.
         
        blabla: 1,

        obj: {
            blablab : 2
        }
    }
};

console.log(prod2);