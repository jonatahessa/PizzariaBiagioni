function main() {
  document.querySelector("#broto").addEventListener("click", changeBroto);
  document.querySelector("#grande").addEventListener("click", changeGrande);
  document.querySelector("#familia").addEventListener("click", changeFamilia);
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
