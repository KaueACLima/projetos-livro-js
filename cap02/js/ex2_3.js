const frm = document.querySelector("form")
const outResp1 = document.querySelector("#outResp1")
const outResp2 = document.querySelector("#outResp2")
const outResp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
  const nomeVeiculo = frm.inVeiculo.value
  const precoVeiculo = Number(frm.inPreco.value)
  const entradaValor = precoVeiculo / 2
  const parcelaVeiculo = precoVeiculo / 12

  outResp1.innerHTML = `Promoção: ${nomeVeiculo}`
  outResp2.innerHTML = `Entrada de R$: ${entradaValor.toFixed(2)}`
  outResp3.innerHTML = `+ 12x de R$: ${parcelaVeiculo.toFixed(2)}`

  e.preventDefault()
})