//* Buscar form do HTML
const frm = document.querySelector("form");
//* Buscar os h3
const outRespostas= document.querySelectorAll("h3");
const outPromocao = outRespostas[0];
const outValorDesconto = outRespostas[1];

frm.addEventListener("submit", (e) => {
  //* Busca o nome do produto
  const nomeDoProduto = frm.inProduto.value;
  //* Busca o preço do produto
  const valorDoProduto = frm.inValor.value;

  //* Calcula o desconto de 50%
  const valorPromocaoDoProduto = valorDoProduto / 2

  //* Calcula o valor a pagar já com o desconto aplicado
  const valorAPagarNaPromocao = (valorDoProduto * 2) + valorPromocaoDoProduto

    //* Adiciona o texo ao h3
  outPromocao.innerText = `${nomeDoProduto} - Promoção: Leve 3 por R$ ${valorAPagarNaPromocao.toFixed(2)}`

  outValorDesconto.innerText = `O 3º produto custa apenas R$: ${valorPromocaoDoProduto.toFixed(2)}`

    //* Previne de enviar o formulário
  e.preventDefault()
})

