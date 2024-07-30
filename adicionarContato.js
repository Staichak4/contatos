
function adicionarContato(vetor, prompt, menu) {
    let id = prompt("Digite um id: ")
    let nome = prompt("Digite um nome: ")
    let telefone = prompt("Digite um telefone: ")
    let email = prompt("Digite um email: ")
    vetor.push({id, nome, telefone, email})
    console.log(`Telefone de ${nome} adicionado!`)
    menu()
}

module.exports = {adicionarContato}