const prompt = require("prompt-sync")() //* adiciona o pacote ao programa
const pesoRaçaoEmKiloGrama = Number(prompt("Peso da Ração (KG): ")) //* lê os dados de entrada
const consumoDiarioRacaoEmGramas = Number(prompt("Consumo Diário (gr): "))

const pesoRaçaoEmGrama = pesoRaçaoEmKiloGrama * 1000

const duracaoDaRacao = Math.floor(pesoRaçaoEmGrama / consumoDiarioRacaoEmGramas)

const sobraDaRacao = pesoRaçaoEmGrama % consumoDiarioRacaoEmGramas

console.log(`Peso da Ração (kg): ${pesoRaçaoEmKiloGrama}`)
console.log(`Consumo Diário (gr): ${consumoDiarioRacaoEmGramas}`)
console.log(`Duração da Ração: ${duracaoDaRacao}`)
console.log(`Sobra da Ração: ${sobraDaRacao}`)

/*
    *Peso da Ração (kg): 2
    *Consumo Diário (gr): 300
    *Duração: 6 dias
    *Sobra: 200gr
*/