
function tratarErroElancar(erro){
    throw new Error('...');
}

function nomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroElancar(e)
    }
}

const obj = { nome: 'Roberto' }
nomeGritado(obj)