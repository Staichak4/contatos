
const {listarContatos} = require('./listarContatos')
function excluirContato(vetor, prompt, menu) {
    listarContatos(vetor, menu)
    if (vetor.length === 0) {
        console.log("Nenhum telefone cadastrado!")
    } else {
        numero = prompt('Digite o numero do telefone a ser removido: ')
        let index = parseInt(numero) - 1
        if (index >= 0 && index < vetor.length) {
            let contatoRemovido = vetor.splice(index, 1)
            console.log(`Contato ${contatoRemovido[contatoRemovido.length - 1].nome} removido!`)
        } else {
            console.log("Número inválido!")
        }
    }
    menu()
}

module.exports = {excluirContato}