const valor = "Global";

function minhaFuncao(){
    console.log(valor);
}
 function exec(){
    const valor = 'Local'
    minhaFuncao();
 }
// será impresso a valor Global porque a função carrega consigo o local onde ela foi definido
 exec();