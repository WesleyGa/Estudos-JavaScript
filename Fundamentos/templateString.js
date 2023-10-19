const nome = 'Mariana';
const concatenacao = 'Ola ' + nome  + '!';
 

const template = `       
Olá
   ${nome} ! `; // na crase são considerados os espaços e é possivel quebrar linhas
   
   console.log(concatenacao, template); 
   console.log(`1 + 1 = ${1 + 1}`);

   const up = texto => texto.toUpperCase(); 
   console.log(`ola.... ${up('wesley')}!` ) // é possivel passar funções dentro da espressão ${}

    