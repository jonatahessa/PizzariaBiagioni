function main() {
  document.querySelector("#broto").addEventListener("click", changeBroto);
  document.querySelector("#grande").addEventListener("click", changeGrande);
  document.querySelector("#familia").addEventListener("click", changeFamilia);
  document.querySelector("#massa").addEventListener("click", changeMassa);
  document.querySelector("#combinado").addEventListener("click", changeCombinado);
  document.querySelector("#sobremesa").addEventListener("click", changeSobremesa);
  document.querySelector("#bebida").addEventListener("click", changeBebida);

  document.querySelector("#buttoncardapio").addEventListener("click", cardapio);
  document.querySelector("#buttonnossacasa").addEventListener("click", nossacasa);
  document.querySelector("#buttonhome").addEventListener("click", home);
  document.querySelector("#buttonpromocoes").addEventListener("click", promocao);
  document.querySelector("#buttonlocalizacao").addEventListener("click", localizacao);
  document.querySelector("#buttoncontato").addEventListener("click", scrollcontato);
}

function changeBroto() {
  var broto = [], grande = [], familia = [];
  broto = document.querySelectorAll(".preco-broto");
  grande = document.querySelectorAll(".preco-grande");
  familia = document.querySelectorAll(".preco-familia");

  document.querySelector("#pizza-inteira").style.display = 'block';
  document.querySelector("#massas").style.display = 'none';
  document.querySelector("#combinados").style.display = 'none';
  document.querySelector("#bebidas").style.display = 'none';
  document.querySelector("#sobremesas").style.display = 'none';

  for (var i = 0; i < broto.length; i++) {
    broto[i].style.display = 'block';
    grande[i].style.display = 'none';
    familia[i].style.display = 'none';
  }
}

function changeGrande() {
  var broto = [], grande = [], familia = [];
  broto = document.querySelectorAll(".preco-broto");
  grande = document.querySelectorAll(".preco-grande");
  familia = document.querySelectorAll(".preco-familia");

  document.querySelector("#pizza-inteira").style.display = 'block';
  document.querySelector("#massas").style.display = 'none';
  document.querySelector("#combinados").style.display = 'none';
  document.querySelector("#bebidas").style.display = 'none';
  document.querySelector("#sobremesas").style.display = 'none';

  for (var i = 0; i < broto.length; i++) {
    broto[i].style.display = 'none';
    grande[i].style.display = 'block';
    familia[i].style.display = 'none';
  }
}

function changeFamilia() {
  var broto = [], grande = [], familia = [];
  broto = document.querySelectorAll(".preco-broto");
  grande = document.querySelectorAll(".preco-grande");
  familia = document.querySelectorAll(".preco-familia");

  document.querySelector("#pizza-inteira").style.display = 'block';
  document.querySelector("#massas").style.display = 'none';
  document.querySelector("#combinados").style.display = 'none';
  document.querySelector("#bebidas").style.display = 'none';
  document.querySelector("#sobremesas").style.display = 'none';

  for (var i = 0; i < broto.length; i++) {
    broto[i].style.display = 'none';
    grande[i].style.display = 'none';
    familia[i].style.display = 'block';
  }
}

function changeMassa() {
  document.querySelector("#pizza-inteira").style.display = 'none';
  document.querySelector("#massas").style.display = 'block';
  document.querySelector("#combinados").style.display = 'none';
  document.querySelector("#bebidas").style.display = 'none';
  document.querySelector("#sobremesas").style.display = 'none';
}

function changeCombinado() {
  document.querySelector("#pizza-inteira").style.display = 'none';
  document.querySelector("#massas").style.display = 'none';
  document.querySelector("#combinados").style.display = 'block';
  document.querySelector("#bebidas").style.display = 'none';
  document.querySelector("#sobremesas").style.display = 'none';

}

function changeSobremesa() {
  document.querySelector("#pizza-inteira").style.display = 'none';
  document.querySelector("#massas").style.display = 'none';
  document.querySelector("#combinados").style.display = 'none';
  document.querySelector("#bebidas").style.display = 'none';
  document.querySelector("#sobremesas").style.display = 'block';


}

function changeBebida() {
  document.querySelector("#pizza-inteira").style.display = 'none';
  document.querySelector("#massas").style.display = 'none';
  document.querySelector("#combinados").style.display = 'none';
  document.querySelector("#bebidas").style.display = 'block';
  document.querySelector("#sobremesas").style.display = 'none';

}

function home() { window.scrollTo(0, 0); }

function nossacasa() { document.querySelector("#nossacasa").scrollIntoView(); }

function promocao() {
  document.querySelector("#sessaopromocoes").scrollIntoView();
}

function cardapio() {
  document.querySelector("#sessaocardapio").scrollIntoView();
}

function localizacao() {
  document.querySelector("#sessaolocalizacao").scrollIntoView();
}

function scrollcontato() {
  document.querySelector("#sessaocontato").scrollIntoView();
}

window.addEventListener("load", main);
