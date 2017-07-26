var botao = document.querySelector('.abrirMenu');
var barra_lateral = document.querySelector('.barra_lateral');
botao.onclick = function() {
  barra_lateral.classList.toggle('ativo');
}

