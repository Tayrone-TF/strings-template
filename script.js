//Prática 1
//concatenação
/*
function imprimeNomeECor(nome, cor) {
    const string = 'A cor favorita de ' + nome + ' é a cor ' + cor + '.'
    console.log(string)
}

const nomeInformado = prompt('Qual é o seu nome?')
const corInformado = prompt('Qual é a sua cor favorita')

//imprimeNomeECor(nomeInformado, corInformado)

//templates strings

const imprimirStringNomeECor = (nome, cor) => {
    const string = `A cor favorita de ${nome} é a cor ${cor}.`
    console.log(string)
}

imprimirStringNomeECor(nomeInformado, corInformado)
*/

//Prática 2  - mesmo código da pratica 1  adicionando citação

function imprimeNomeECor(nome, cor,citacao) {
    const string = 'A cor favorita de ' + nome + ' é a cor ' + cor + '. Sua citação favorita é: \n' + ' \"' + citacao + '\" '
    console.log(string)
}

//const nomeInformado = prompt('Qual é o seu nome?')
//const corInformado = prompt('Qual é a sua cor favorita')
//const citacaoInformada = prompt('Qual a sua citação favorita:')

//imprimeNomeECor(nomeInformado, corInformado, citacaoInformada)

//templates strings

const imprimirStringNomeECor = (nome, cor, citacao) => {
    const string = `Nome: ${nome} \nCor favorita: ${cor} \nCitação: \"${citacao}\"`
    console.log(string)
}

//imprimirStringNomeECor(nomeInformado, corInformado, citacaoInformada)

//Pratica 3 

function imprimirMaiusculo (nome){
    const nomeMaiusculo = nome.toUpperCase()
    console.log(nomeMaiusculo)
    console.log(nomeMaiusculo.length)
    console.log(nomeMaiusculo.includes('a') || nomeMaiusculo.includes('A'))
}

//imprimirMaiusculo(nomeInformado)

//EXERCICIO PARA PRATICAR

const verificaUsuario = (nomeUsuario, emailUsuario) => {
    const mensagem = `\"O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas vindas ${nomeUsuario}!\"`
    const quntCaracter = `${mensagem} A quantidade de caracteres presente no seu nome de usuário (${nomeUsuario}) é ${nomeUsuario.length}.`

    const mensagemComX = quntCaracter.replaceAll('R', 'X').replaceAll('r', 'x')

    console.log(quntCaracter)   
    console.log(mensagemComX)
    console.log(`O e-mail informado possue @? ${userEmail.includes('@')}`)
}

const userName = prompt('Qual o seu nome de usuário:')
const userEmail = prompt('Qual o seu e-mail:')

verificaUsuario(userName, userEmail)