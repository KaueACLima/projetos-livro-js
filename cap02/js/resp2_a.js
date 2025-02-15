const form = document.querySelector("form");
const outRespostaMedicamento = document.querySelector("h2");
const outRespostaPromocao = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  const nomeDoMedicamento = form.inMedicamento.value;
  const precoDoMedicamento = Number(form.inPreco.value);

  const precoDaPromocaoDoMedicamento = Math.floor(precoDoMedicamento * 2);

  outRespostaMedicamento.innerText = `Promoção do ${nomeDoMedicamento}`
  outRespostaPromocao.innerText = `Leve 2 por apenas ${precoDaPromocaoDoMedicamento.toFixed(2)}`

  e.preventDefault()
})
