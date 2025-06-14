const prompt = require("prompt-sync")() //* adiciona o pacote ao programa
const valorDoSalario = Number(prompt("Salário: ")); //* lê os dados de entrada
const tempoTrabalhoEmpresa = Number(prompt("Tempo (em anos) ")); 

const tempoDeTrabalhoEmAnos = tempoTrabalhoEmpresa / 4; //* calcula o quadriênio
const acréscimoSalarioQuadriênios = ( valorDoSalario / 0.10) + valorDoSalario //* ... e acréscimo

console.log(`Deve receber ${tempoDeTrabalhoEmAnos} quadriênios \n Novo sálario: ${acréscimoSalarioQuadriênios.toFixed(2)}`) //* exibe a resposta

//* Saída esperada

/*
    *Salário R$: 4500
    *Tempo (anos): 10
    *Quadriênios: 2
    *Salário Final R$: 4590.00
*/