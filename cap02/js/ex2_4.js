const frm = document.querySelector("form")
const outResp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  const quilo = frm.inQuilo.value
  const consumo = frm.inConsumo.value

  const valorAPagar = (quilo / 1000) * consumo
  outResp.innerText = `Valor a pagar R$: ${valorAPagar.toFixed(2)}`
  e.preventDefault()
})