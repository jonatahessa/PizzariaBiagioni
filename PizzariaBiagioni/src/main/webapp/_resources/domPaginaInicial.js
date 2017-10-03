function main() {
  document.querySelector("#broto").addEventListener("click", changeBroto);
  document.querySelector("#broto-meio")
      .addEventListener("click", changeBrotoMeio);
  document.querySelector("#grande").addEventListener("click", changeGrande);
  document.querySelector("#grande-meio")
      .addEventListener("click", changeGrandeMeio);
  document.querySelector("#grande-terco")
      .addEventListener("click", changeGrandeTerco);
  document.querySelector("#familia").addEventListener("click", changeFamilia);
  document.querySelector("#familia-meio")
      .addEventListener("click", changeFamiliaMeio);
  document.querySelector("#familia-terco")
      .addEventListener("click", changeFamiliaTerco);

  var botaocardapio = document.querySelector("#buttoncardapio");
  var nossa = document.querySelector("#buttonnossacasa");
  var varhome = document.querySelector("#buttonhome");
  var promo = document.querySelector("#buttonpromocoes");
  var localiza = document.querySelector("#buttonlocalizacao");
  var contato = document.querySelector("#buttoncontato");

  varhome.addEventListener("click", home);
  promo.addEventListener("click", promocao);
  nossa.addEventListener("click", nossacasa);
  botaocardapio.addEventListener("click", cardapio);
  localiza.addEventListener("click", localizacao);
  contato.addEventListener("click", scrollcontato);
}

function changeBroto() {
  var broto = [], grande = [], familia = [];
  broto = document.querySelectorAll(".preco-broto");
  grande = document.querySelectorAll(".preco-grande");
  familia = document.querySelectorAll(".preco-familia");

  document.querySelector("#pizza-inteira").style.display = 'block';
  document.querySelector("#pizza-meia").style.display = 'none';
  document.querySelector("#pizza-terco").style.display = 'none';

  for (var i = 0; i < broto.length; i++) {
    broto[i].style.display = 'block';
    grande[i].style.display = 'none';
    familia[i].style.display = 'none';
  }
}

function changeBrotoMeio() {
  var broto = [], grande = [], familia = [];
  broto = document.querySelectorAll(".preco-broto");
  grande = document.querySelectorAll(".preco-grande");
  familia = document.querySelectorAll(".preco-familia");

  document.querySelector("#pizza-inteira").style.display = 'none';
  document.querySelector("#pizza-meia").style.display = 'block';
  document.querySelector("#pizza-terco").style.display = 'none';

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
  document.querySelector("#pizza-meia").style.display = 'none';
  document.querySelector("#pizza-terco").style.display = 'none';

  for (var i = 0; i < broto.length; i++) {
    broto[i].style.display = 'none';
    grande[i].style.display = 'block';
    familia[i].style.display = 'none';
  }
}

function changeGrandeMeio() {
  var broto = [], grande = [], familia = [];
  broto = document.querySelectorAll(".preco-broto");
  grande = document.querySelectorAll(".preco-grande");
  familia = document.querySelectorAll(".preco-familia");

  document.querySelector("#pizza-inteira").style.display = 'none';
  document.querySelector("#pizza-meia").style.display = 'block';
  document.querySelector("#pizza-terco").style.display = 'none';

  for (var i = 0; i < broto.length; i++) {
    broto[i].style.display = 'none';
    grande[i].style.display = 'block';
    familia[i].style.display = 'none';
  }
}

function changeGrandeTerco() {
  var broto = [], grande = [], familia = [];
  broto = document.querySelectorAll(".preco-broto");
  grande = document.querySelectorAll(".preco-grande");
  familia = document.querySelectorAll(".preco-familia");

  document.querySelector("#pizza-inteira").style.display = 'none';
  document.querySelector("#pizza-meia").style.display = 'none';
  document.querySelector("#pizza-terco").style.display = 'block';

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
  document.querySelector("#pizza-meia").style.display = 'none';
  document.querySelector("#pizza-terco").style.display = 'none';

  for (var i = 0; i < broto.length; i++) {
    broto[i].style.display = 'none';
    grande[i].style.display = 'none';
    familia[i].style.display = 'block';
  }
}

function changeFamiliaMeio() {
  var broto = [], grande = [], familia = [];
  broto = document.querySelectorAll(".preco-broto");
  grande = document.querySelectorAll(".preco-grande");
  familia = document.querySelectorAll(".preco-familia");

  document.querySelector("#pizza-inteira").style.display = 'none';
  document.querySelector("#pizza-meia").style.display = 'block';
  document.querySelector("#pizza-terco").style.display = 'none';

  for (var i = 0; i < broto.length; i++) {
    broto[i].style.display = 'none';
    grande[i].style.display = 'none';
    familia[i].style.display = 'block';
  }
}

function changeFamiliaTerco() {
  var broto = [], grande = [], familia = [];
  broto = document.querySelectorAll(".preco-broto");
  grande = document.querySelectorAll(".preco-grande");
  familia = document.querySelectorAll(".preco-familia");

  document.querySelector("#pizza-inteira").style.display = 'none';
  document.querySelector("#pizza-meia").style.display = 'none';
  document.querySelector("#pizza-terco").style.display = 'block';

  for (var i = 0; i < broto.length; i++) {
    broto[i].style.display = 'none';
    grande[i].style.display = 'none';
    familia[i].style.display = 'block';
  }
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
