const {listarContatos} = require('./listarContatos')
const {adicionarContato} = require('./adicionarContato')
const {atualizarContato} = require('./atualizarContato')
const {excluirContato} = require('./excluirContato')
const prompt = require('prompt-sync')();

let contatos = [
    { id: 1, nome: 'Alice', telefone: '1234-5678', email:
    'alice@example.com' },
    { id: 2, nome: 'Bob', telefone: '8765-4321', email:
    'bob@example.com' },
    { id: 3, nome: 'Carol', telefone: '5678-1234', email:
    'carol@example.com' }
    ];

function menu() {
    console.log(`Bem vindo ao menu!\n1. Adicionar contato\n2. Listar contatos\n3. Atualizar contatos\n4. Excluir contatos\n5. Sair`)
    opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        case '1':
            adicionarContato(contatos, prompt, menu)
            break;
        case '2':
            listarContatos(contatos, menu)
            menu()
            break;
        case '3':
            atualizarContato(contatos, prompt, menu)
            break;
        case '4':
            excluirContato(contatos, prompt, menu)
            break;
        case '5':
            console.log("Adeus.")
            break;
        default:
            console.log("Opção inválida.")
            menu()
            break;
    }
}

menu()

