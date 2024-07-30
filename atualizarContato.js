const {listarContatos} = require('./listarContatos')

function atualizarContato (vetor, prompt, menu) {
    listarContatos(vetor, menu)

if (vetor.length === 0) {
    console.log('Nenhum contato cadastrado!')
} else {
    let index = parseInt(prompt("Número do contato a ser atualizado: ") - 1)
    if (index >= 0 && index < vetor.length) {
        vetor[index].id = prompt("Novo id: ")
        vetor[index].nome = prompt("Novo nome: ")
        vetor[index].telefone = prompt("Novo telefone: ")
        vetor[index].email = prompt("Novo email: ")
        console.log('Contato atualizado com sucesso!')
    } else {
        console.log('Número inválido.')
    }

    
    }
    menu()
}

module.exports = {atualizarContato}