  
function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
  const contador = document.getElementById('contador-carrinho');
  if (contador) {
    contador.textContent = `(${totalItens})`;
  }
}
