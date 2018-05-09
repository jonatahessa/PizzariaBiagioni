function main() {
    document.querySelector("#broto").addEventListener("click", changeBroto);
    document.querySelector("#grande").addEventListener("click", changeGrande);
    document.querySelector("#familia").addEventListener("click", changeFamilia);
    document.querySelector("#broto-doce").addEventListener("click", changeBrotoDoce);
    document.querySelector("#grande-doce").addEventListener("click", changeGrandeDoce);
    document.querySelector("#familia-doce").addEventListener("click", changeFamiliaDoce);
    /*document.querySelector("#massa").addEventListener("click", changeMassa);
    document.querySelector("#combinado").addEventListener("click", changeCombinado);*/
    document.querySelector("#sobremesa").addEventListener("click", changeSobremesa);
    document.querySelector("#bebida").addEventListener("click", changeBebida);

    document.querySelector("#buttoncardapio").addEventListener("click", cardapio);
    document.querySelector("#buttonnossacasa").addEventListener("click", nossacasa);
    document.querySelector("#buttonhome").addEventListener("click", home);
    if (document.querySelector("#buttonpromocoes") != null) {
        document.querySelector("#buttonpromocoes").addEventListener("click", promocao);
    }
    document.querySelector("#buttonlocalizacao").addEventListener("click", localizacao);
    document.querySelector("#buttoncontato").addEventListener("click", scrollcontato);
}

function changeBroto() {
    if (document.querySelector("#broto").classList.contains('btn-primary')) {
        document.querySelector("#pizza-inteira").style.display = 'none';
        document.querySelector("#broto").classList.remove('btn-primary');
        document.querySelector("#broto").classList.add('btn-default');
    } else {
        var broto = [], grande = [], familia = [];
        broto = document.querySelectorAll(".preco-broto");
        grande = document.querySelectorAll(".preco-grande");
        familia = document.querySelectorAll(".preco-familia");

        document.querySelector("#pizza-inteira").style.display = 'block';
        document.querySelector("#pizza-inteira-doce").style.display = 'none';
        /*document.querySelector("#massas").style.display = 'none';
        document.querySelector("#combinados").style.display = 'none';*/
        document.querySelector("#bebidas").style.display = 'none';
        document.querySelector("#sobremesas").style.display = 'none';

        for (var i = 0; i < broto.length; i++) {
            broto[i].style.display = 'block';
            grande[i].style.display = 'none';
            familia[i].style.display = 'none';
        }
        document.querySelector("#sessaocardapio").scrollIntoView();
        document.querySelector("#broto").classList.add('btn-primary');
        document.querySelector("#broto").classList.remove('btn-default');
        document.querySelector("#familia").classList.add('btn-default');
        document.querySelector("#familia").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
        document.querySelector("#grande").classList.remove('btn-primary');
        document.querySelector("#broto-doce").classList.add('btn-default');
        document.querySelector("#broto-doce").classList.remove('btn-primary');
        document.querySelector("#grande-doce").classList.add('btn-default');
        document.querySelector("#grande-doce").classList.remove('btn-primary');
        document.querySelector("#familia-doce").classList.add('btn-default');
        document.querySelector("#familia-doce").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
        document.querySelector("#grande").classList.remove('btn-primary');
        /*document.querySelector("#massa").classList.add('btn-default');
        document.querySelector("#massa").classList.remove('btn-primary');
        document.querySelector("#combinado").classList.add('btn-default');
        document.querySelector("#combinado").classList.remove('btn-primary');*/
        document.querySelector("#bebida").classList.add('btn-default');
        document.querySelector("#bebida").classList.remove('btn-primary');
    }
}


function changeGrande() {
    if (document.querySelector("#grande").classList.contains('btn-primary')) {
        document.querySelector("#pizza-inteira").style.display = 'none';
        document.querySelector("#grande").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
    } else {
        var broto = [], grande = [], familia = [];
        broto = document.querySelectorAll(".preco-broto");
        grande = document.querySelectorAll(".preco-grande");
        familia = document.querySelectorAll(".preco-familia");

        document.querySelector("#pizza-inteira").style.display = 'block';
        document.querySelector("#pizza-inteira-doce").style.display = 'none';
        /*document.querySelector("#massas").style.display = 'none';
        document.querySelector("#combinados").style.display = 'none';*/
        document.querySelector("#bebidas").style.display = 'none';
        document.querySelector("#sobremesas").style.display = 'none';

        for (var i = 0; i < broto.length; i++) {
            broto[i].style.display = 'none';
            grande[i].style.display = 'block';
            familia[i].style.display = 'none';
        }
        document.querySelector("#sessaocardapio").scrollIntoView();
        document.querySelector("#grande").classList.add('btn-primary');
        document.querySelector("#grande").classList.remove('btn-default');
        document.querySelector("#broto").classList.add('btn-default');
        document.querySelector("#broto").classList.remove('btn-primary');
        document.querySelector("#familia").classList.add('btn-default');
        document.querySelector("#familia").classList.remove('btn-primary');
        document.querySelector("#broto-doce").classList.add('btn-default');
        document.querySelector("#broto-doce").classList.remove('btn-primary');
        document.querySelector("#grande-doce").classList.add('btn-default');
        document.querySelector("#grande-doce").classList.remove('btn-primary');
        document.querySelector("#familia-doce").classList.add('btn-default');
        document.querySelector("#familia-doce").classList.remove('btn-primary');
        document.querySelector("#sobremesa").classList.add('btn-default');
        document.querySelector("#sobremesa").classList.remove('btn-primary');
        /*document.querySelector("#massa").classList.add('btn-default');
        document.querySelector("#massa").classList.remove('btn-primary');
        document.querySelector("#combinado").classList.add('btn-default');
        document.querySelector("#combinado").classList.remove('btn-primary');*/
        document.querySelector("#bebida").classList.add('btn-default');
        document.querySelector("#bebida").classList.remove('btn-primary');
    }
}

function changeFamilia() {
    if (document.querySelector("#familia").classList.contains('btn-primary')) {
        document.querySelector("#pizza-inteira").style.display = 'none';
        document.querySelector("#familia").classList.remove('btn-primary');
        document.querySelector("#familia").classList.add('btn-default');
    } else {
        var broto = [], grande = [], familia = [];
        broto = document.querySelectorAll(".preco-broto");
        grande = document.querySelectorAll(".preco-grande");
        familia = document.querySelectorAll(".preco-familia");

        document.querySelector("#pizza-inteira").style.display = 'block';
        document.querySelector("#pizza-inteira-doce").style.display = 'none';
        /*document.querySelector("#massas").style.display = 'none';
        document.querySelector("#combinados").style.display = 'none';*/
        document.querySelector("#bebidas").style.display = 'none';
        document.querySelector("#sobremesas").style.display = 'none';

        for (var i = 0; i < broto.length; i++) {
            broto[i].style.display = 'none';
            grande[i].style.display = 'none';
            familia[i].style.display = 'block';
        }
        document.querySelector("#sessaocardapio").scrollIntoView();
        document.querySelector("#familia").classList.add('btn-primary');
        document.querySelector("#familia").classList.remove('btn-default');
        document.querySelector("#broto").classList.add('btn-default');
        document.querySelector("#broto").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
        document.querySelector("#grande").classList.remove('btn-primary');
        document.querySelector("#broto-doce").classList.add('btn-default');
        document.querySelector("#broto-doce").classList.remove('btn-primary');
        document.querySelector("#grande-doce").classList.add('btn-default');
        document.querySelector("#grande-doce").classList.remove('btn-primary');
        document.querySelector("#familia-doce").classList.add('btn-default');
        document.querySelector("#familia-doce").classList.remove('btn-primary');
        document.querySelector("#sobremesa").classList.add('btn-default');
        document.querySelector("#sobremesa").classList.remove('btn-primary');
        /*document.querySelector("#massa").classList.add('btn-default');
        document.querySelector("#massa").classList.remove('btn-primary');
        document.querySelector("#combinado").classList.add('btn-default');
        document.querySelector("#combinado").classList.remove('btn-primary');*/
        document.querySelector("#bebida").classList.add('btn-default');
        document.querySelector("#bebida").classList.remove('btn-primary');
    }
}

function changeBrotoDoce() {
    if (document.querySelector("#broto-doce").classList.contains('btn-primary')) {
        document.querySelector("#pizza-inteira-doce").style.display = 'none';
        document.querySelector("#broto-doce").classList.remove('btn-primary');
        document.querySelector("#broto-doce").classList.add('btn-default');
    } else {
        var broto = [], grande = [], familia = [];
        broto = document.querySelectorAll(".preco-broto-doce");
        grande = document.querySelectorAll(".preco-grande-doce");
        familia = document.querySelectorAll(".preco-familia-doce");

        document.querySelector("#pizza-inteira-doce").style.display = 'block';
        document.querySelector("#pizza-inteira").style.display = 'none';
        /*document.querySelector("#massas").style.display = 'none';
        document.querySelector("#combinados").style.display = 'none';*/
        document.querySelector("#bebidas").style.display = 'none';
        document.querySelector("#sobremesas").style.display = 'none';

        for (var i = 0; i < broto.length; i++) {
            broto[i].style.display = 'block';
            grande[i].style.display = 'none';
            familia[i].style.display = 'none';
        }
        document.querySelector("#sessaocardapio").scrollIntoView();
        document.querySelector("#broto-doce").classList.add('btn-primary');
        document.querySelector("#broto-doce").classList.remove('btn-default');
        document.querySelector("#broto").classList.add('btn-default');
        document.querySelector("#broto").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
        document.querySelector("#grande").classList.remove('btn-primary');
        document.querySelector("#familia").classList.add('btn-default');
        document.querySelector("#familia").classList.remove('btn-primary');
        document.querySelector("#grande-doce").classList.add('btn-default');
        document.querySelector("#grande-doce").classList.remove('btn-primary');
        document.querySelector("#familia-doce").classList.add('btn-default');
        document.querySelector("#familia-doce").classList.remove('btn-primary');
        document.querySelector("#sobremesa").classList.add('btn-default');
        document.querySelector("#sobremesa").classList.remove('btn-primary');
        /*document.querySelector("#massa").classList.add('btn-default');
        document.querySelector("#massa").classList.remove('btn-primary');
        document.querySelector("#combinado").classList.add('btn-default');
        document.querySelector("#combinado").classList.remove('btn-primary');*/
        document.querySelector("#bebida").classList.add('btn-default');
        document.querySelector("#bebida").classList.remove('btn-primary');
    }
}

function changeGrandeDoce() {
    if (document.querySelector("#grande-doce").classList.contains('btn-primary')) {
        document.querySelector("#pizza-inteira-doce").style.display = 'none';
        document.querySelector("#grande-doce").classList.remove('btn-primary');
        document.querySelector("#grande-doce").classList.add('btn-default');
    } else {
        var broto = [], grande = [], familia = [];
        broto = document.querySelectorAll(".preco-broto-doce");
        grande = document.querySelectorAll(".preco-grande-doce");
        familia = document.querySelectorAll(".preco-familia-doce");

        document.querySelector("#pizza-inteira-doce").style.display = 'block';
        document.querySelector("#pizza-inteira").style.display = 'none';
        /*document.querySelector("#massas").style.display = 'none';
        document.querySelector("#combinados").style.display = 'none';*/
        document.querySelector("#bebidas").style.display = 'none';
        document.querySelector("#sobremesas").style.display = 'none';

        for (var i = 0; i < broto.length; i++) {
            broto[i].style.display = 'none';
            grande[i].style.display = 'block';
            familia[i].style.display = 'none';
        }
        document.querySelector("#sessaocardapio").scrollIntoView();
        document.querySelector("#grande-doce").classList.add('btn-primary');
        document.querySelector("#grande-doce").classList.remove('btn-default');
        document.querySelector("#broto").classList.add('btn-default');
        document.querySelector("#broto").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
        document.querySelector("#grande").classList.remove('btn-primary');
        document.querySelector("#broto-doce").classList.add('btn-default');
        document.querySelector("#broto-doce").classList.remove('btn-primary');
        document.querySelector("#familia").classList.add('btn-default');
        document.querySelector("#familia").classList.remove('btn-primary');
        document.querySelector("#familia-doce").classList.add('btn-default');
        document.querySelector("#familia-doce").classList.remove('btn-primary');
        document.querySelector("#sobremesa").classList.add('btn-default');
        document.querySelector("#sobremesa").classList.remove('btn-primary');
        /*document.querySelector("#massa").classList.add('btn-default');
        document.querySelector("#massa").classList.remove('btn-primary');
        document.querySelector("#combinado").classList.add('btn-default');
        document.querySelector("#combinado").classList.remove('btn-primary');*/
        document.querySelector("#bebida").classList.add('btn-default');
        document.querySelector("#bebida").classList.remove('btn-primary');
    }
}

function changeFamiliaDoce() {
    if (document.querySelector("#familia-doce").classList.contains('btn-primary')) {
        document.querySelector("#pizza-inteira-doce").style.display = 'none';
        document.querySelector("#familia-doce").classList.remove('btn-primary');
        document.querySelector("#familia-doce").classList.add('btn-default');
    } else {
        var broto = [], grande = [], familia = [];
        broto = document.querySelectorAll(".preco-broto-doce");
        grande = document.querySelectorAll(".preco-grande-doce");
        familia = document.querySelectorAll(".preco-familia-doce");

        document.querySelector("#pizza-inteira-doce").style.display = 'block';
        document.querySelector("#pizza-inteira").style.display = 'none';
        /*document.querySelector("#massas").style.display = 'none';
        document.querySelector("#combinados").style.display = 'none';*/
        document.querySelector("#bebidas").style.display = 'none';
        document.querySelector("#sobremesas").style.display = 'none';

        for (var i = 0; i < broto.length; i++) {
            broto[i].style.display = 'none';
            grande[i].style.display = 'none';
            familia[i].style.display = 'block';
        }
        document.querySelector("#sessaocardapio").scrollIntoView();
        document.querySelector("#familia-doce").classList.add('btn-primary');
        document.querySelector("#familia-doce").classList.remove('btn-default');
        document.querySelector("#broto").classList.add('btn-default');
        document.querySelector("#broto").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
        document.querySelector("#grande").classList.remove('btn-primary');
        document.querySelector("#broto-doce").classList.add('btn-default');
        document.querySelector("#broto-doce").classList.remove('btn-primary');
        document.querySelector("#grande-doce").classList.add('btn-default');
        document.querySelector("#grande-doce").classList.remove('btn-primary');
        document.querySelector("#familia").classList.add('btn-default');
        document.querySelector("#familia").classList.remove('btn-primary');
        document.querySelector("#sobremesa").classList.add('btn-default');
        document.querySelector("#sobremesa").classList.remove('btn-primary');
        /*document.querySelector("#massa").classList.add('btn-default');
        document.querySelector("#massa").classList.remove('btn-primary');
        document.querySelector("#combinado").classList.add('btn-default');
        document.querySelector("#combinado").classList.remove('btn-primary');*/
        document.querySelector("#bebida").classList.add('btn-default');
        document.querySelector("#bebida").classList.remove('btn-primary');
    }
}

/*function changeMassa() {
    if (document.querySelector("#massa").classList.contains('btn-primary')) {
        document.querySelector("#massas").style.display = 'none';
        document.querySelector("#massa").classList.remove('btn-primary');
        document.querySelector("#massa").classList.add('btn-default');
    } else {
        document.querySelector("#pizza-inteira").style.display = 'none';
        document.querySelector("#pizza-inteira-doce").style.display = 'none';
        document.querySelector("#massas").style.display = 'block';
        document.querySelector("#combinados").style.display = 'none';
        document.querySelector("#bebidas").style.display = 'none';
        document.querySelector("#sobremesas").style.display = 'none';
        document.querySelector("#sessaocardapio").scrollIntoView();
        document.querySelector("#massa").classList.add('btn-primary');
        document.querySelector("#massa").classList.remove('btn-default');
        document.querySelector("#broto").classList.add('btn-default');
        document.querySelector("#broto").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
        document.querySelector("#grande").classList.remove('btn-primary');
        document.querySelector("#broto-doce").classList.add('btn-default');
        document.querySelector("#broto-doce").classList.remove('btn-primary');
        document.querySelector("#grande-doce").classList.add('btn-default');
        document.querySelector("#grande-doce").classList.remove('btn-primary');
        document.querySelector("#familia-doce").classList.add('btn-default');
        document.querySelector("#familia-doce").classList.remove('btn-primary');
        document.querySelector("#sobremesa").classList.add('btn-default');
        document.querySelector("#sobremesa").classList.remove('btn-primary');
        document.querySelector("#familia").classList.add('btn-default');
        document.querySelector("#familia").classList.remove('btn-primary');
        document.querySelector("#combinado").classList.add('btn-default');
        document.querySelector("#combinado").classList.remove('btn-primary');
        document.querySelector("#bebida").classList.add('btn-default');
        document.querySelector("#bebida").classList.remove('btn-primary');
    }
}

function changeCombinado() {
    if (document.querySelector("#combinado").classList.contains('btn-primary')) {
        document.querySelector("#combinados").style.display = 'none';
        document.querySelector("#combinado").classList.remove('btn-primary');
        document.querySelector("#combinado").classList.add('btn-default');
    } else {
        document.querySelector("#pizza-inteira").style.display = 'none';
        document.querySelector("#pizza-inteira-doce").style.display = 'none';
        document.querySelector("#massas").style.display = 'none';
        document.querySelector("#combinados").style.display = 'block';
        document.querySelector("#bebidas").style.display = 'none';
        document.querySelector("#sobremesas").style.display = 'none';
        document.querySelector("#sessaocardapio").scrollIntoView();
        document.querySelector("#combinado").classList.add('btn-primary');
        document.querySelector("#combinado").classList.remove('btn-default');
        document.querySelector("#broto").classList.add('btn-default');
        document.querySelector("#broto").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
        document.querySelector("#grande").classList.remove('btn-primary');
        document.querySelector("#broto-doce").classList.add('btn-default');
        document.querySelector("#broto-doce").classList.remove('btn-primary');
        document.querySelector("#grande-doce").classList.add('btn-default');
        document.querySelector("#grande-doce").classList.remove('btn-primary');
        document.querySelector("#familia-doce").classList.add('btn-default');
        document.querySelector("#familia-doce").classList.remove('btn-primary');
        document.querySelector("#sobremesa").classList.add('btn-default');
        document.querySelector("#sobremesa").classList.remove('btn-primary');
        document.querySelector("#massa").classList.add('btn-default');
        document.querySelector("#massa").classList.remove('btn-primary');
        document.querySelector("#familia").classList.add('btn-default');
        document.querySelector("#familia").classList.remove('btn-primary');
        document.querySelector("#bebida").classList.add('btn-default');
        document.querySelector("#bebida").classList.remove('btn-primary');
    }
}*/

function changeSobremesa() {
    if (document.querySelector("#sobremesa").classList.contains('btn-primary')) {
        document.querySelector("#sobremesas").style.display = 'none';
        document.querySelector("#sobremesa").classList.remove('btn-primary');
        document.querySelector("#sobremesa").classList.add('btn-default');
    } else {
        document.querySelector("#pizza-inteira").style.display = 'none';
        document.querySelector("#pizza-inteira-doce").style.display = 'none';
        /*document.querySelector("#massas").style.display = 'none';
        document.querySelector("#combinados").style.display = 'none';*/
        document.querySelector("#bebidas").style.display = 'none';
        document.querySelector("#sobremesas").style.display = 'block';
        document.querySelector("#sessaocardapio").scrollIntoView();
        document.querySelector("#sobremesa").classList.add('btn-primary');
        document.querySelector("#sobremesa").classList.remove('btn-default');
        document.querySelector("#broto").classList.add('btn-default');
        document.querySelector("#broto").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
        document.querySelector("#grande").classList.remove('btn-primary');
        document.querySelector("#broto-doce").classList.add('btn-default');
        document.querySelector("#broto-doce").classList.remove('btn-primary');
        document.querySelector("#grande-doce").classList.add('btn-default');
        document.querySelector("#grande-doce").classList.remove('btn-primary');
        document.querySelector("#familia-doce").classList.add('btn-default');
        document.querySelector("#familia-doce").classList.remove('btn-primary');
        /*document.querySelector("#massa").classList.add('btn-default');
        document.querySelector("#massa").classList.remove('btn-primary');
        document.querySelector("#combinado").classList.add('btn-default');
        document.querySelector("#combinado").classList.remove('btn-primary');*/
        document.querySelector("#familia").classList.add('btn-default');
        document.querySelector("#familia").classList.remove('btn-primary');
        document.querySelector("#bebida").classList.add('btn-default');
        document.querySelector("#bebida").classList.remove('btn-primary');
    }
}

function changeBebida() {
    if (document.querySelector("#bebida").classList.contains('btn-primary')) {
        document.querySelector("#bebidas").style.display = 'none';
        document.querySelector("#bebida").classList.remove('btn-primary');
        document.querySelector("#bebida").classList.add('btn-default');
    } else {
        document.querySelector("#pizza-inteira").style.display = 'none';
        document.querySelector("#pizza-inteira-doce").style.display = 'none';
        /*document.querySelector("#massas").style.display = 'none';
        document.querySelector("#combinados").style.display = 'none';*/
        document.querySelector("#bebidas").style.display = 'block';
        document.querySelector("#sobremesas").style.display = 'none';
        document.querySelector("#sessaocardapio").scrollIntoView();
        document.querySelector("#bebida").classList.add('btn-primary');
        document.querySelector("#bebida").classList.remove('btn-default');
        document.querySelector("#broto").classList.add('btn-default');
        document.querySelector("#broto").classList.remove('btn-primary');
        document.querySelector("#grande").classList.add('btn-default');
        document.querySelector("#grande").classList.remove('btn-primary');
        document.querySelector("#broto-doce").classList.add('btn-default');
        document.querySelector("#broto-doce").classList.remove('btn-primary');
        document.querySelector("#grande-doce").classList.add('btn-default');
        document.querySelector("#grande-doce").classList.remove('btn-primary');
        document.querySelector("#familia-doce").classList.add('btn-default');
        document.querySelector("#familia-doce").classList.remove('btn-primary');
        /*document.querySelector("#massa").classList.add('btn-default');
        document.querySelector("#massa").classList.remove('btn-primary');
        document.querySelector("#combinado").classList.add('btn-default');
        document.querySelector("#combinado").classList.remove('btn-primary');*/
        document.querySelector("#familia").classList.add('btn-default');
        document.querySelector("#familia").classList.remove('btn-primary');
        document.querySelector("#sobremesa").classList.add('btn-default');
        document.querySelector("#sobremesa").classList.remove('btn-primary');
    }
}

function home() {
    window.scrollTo(0, 0);
}

function nossacasa() {
    document.querySelector("#nossacasa").scrollIntoView();
}

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
