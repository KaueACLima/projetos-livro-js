const form = document.querySelector("form");
const outRespostaValor = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  const valorPorMinuto = form.inValor.value
  const tempoDeUsoPorCliente = form.inTempo.value

  const valorAPagar = Math.ceil( tempoDeUsoPorCliente / 15) * valorPorMinuto

  outRespostaValor.innerText = `Valor a pagar R$: ${valorAPagar.toFixed(2)}`

  e.preventDefault()
})