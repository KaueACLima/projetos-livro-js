//* adiciona pacote para entrada de dados
const prompt = require("prompt-sync")()
//* lê os números
const num1 = Number(prompt("1º Número: "))
const num2 = Number(prompt("2º Número: "))
//* calcula a soma
const soma = num1 + num2
//* exibe o resultado
console.log(`Soma é: ${soma}`)