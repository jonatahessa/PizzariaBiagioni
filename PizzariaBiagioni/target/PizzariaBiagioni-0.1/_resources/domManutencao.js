function main() {
  document.querySelector("#select-tipo").addEventListener("change", hidePrecos);
  document.querySelector("#select-editar").addEventListener("change", hidePrecosEditar);
  document.querySelector("#novo").addEventListener("click", abrirNovo);
  document.querySelector("#cancelanovo").addEventListener("click", novoCancela);
  document.querySelector("#cancelaeditar").addEventListener("click", editarCancela);
}

function abrirNovo() {
  document.querySelector("#nevoa").style.display = "block";
  document.querySelector("#janelanovo").style.display = "block";
}

function abrirEditar(form) {
  inputs = [];
  inputs = document.querySelectorAll(".inputseditar");
  var select = document.querySelector("#select-editar");
  var optionPizza = document.createElement("option");
  var optionPizzaDoce = document.createElement("option");
  var optionMassa = document.createElement("option");
  var optionCombinado = document.createElement("option");
  var optionSobremesa = document.createElement("option");
  var optionBebida = document.createElement("option");
  var optionPromo = document.createElement("option");
  optionPizza.innerHTML = "Pizza";
  optionPizza.setAttribute("value", "PIZZA");
  optionPizzaDoce.innerHTML = "Pizza Doce";
  optionPizzaDoce.setAttribute("value", "DOCE");
  optionMassa.innerHTML = "Massa";
  optionMassa.setAttribute("value", "MASSA");
  optionCombinado.innerHTML = "Combinado";
  optionCombinado.setAttribute("value", "COMBINADO");
  optionSobremesa.innerHTML = "Sobremesa";
  optionSobremesa.setAttribute("value", "SOBREMESA");
  optionBebida.innerHTML = "Bebida";
  optionBebida.setAttribute("value", "BEBIDA");
  optionPromo.innerHTML = "Promoção";
  optionPromo.setAttribute("value", "PROMOCAO");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = form[i].value;
  }
  if (form[6].value == 'PIZZA') {
    select.appendChild(optionPizza);
    select.appendChild(optionPizzaDoce);
    select.appendChild(optionMassa);
    select.appendChild(optionCombinado);
    select.appendChild(optionSobremesa);
    select.appendChild(optionBebida);
    select.appendChild(optionPromo);

  } else if (form[6].value == 'DOCE') {
    select.appendChild(optionPizzaDoce);
    select.appendChild(optionPizza);
    select.appendChild(optionMassa);
    select.appendChild(optionCombinado);
    select.appendChild(optionSobremesa);
    select.appendChild(optionBebida);
    select.appendChild(optionPromo);

  } else if (form[6].value == 'MASSA') {
    select.appendChild(optionMassa);
    select.appendChild(optionPizzaDoce);
    select.appendChild(optionPizza);
    select.appendChild(optionCombinado);
    select.appendChild(optionSobremesa);
    select.appendChild(optionBebida);
    select.appendChild(optionPromo);

  } else if (form[6].value == 'COMBINADO') {
    select.appendChild(optionCombinado);
    select.appendChild(optionMassa);
    select.appendChild(optionPizzaDoce);
    select.appendChild(optionPizza);
    select.appendChild(optionSobremesa);
    select.appendChild(optionBebida);
    select.appendChild(optionPromo);

  } else if (form[6].value == 'SOBREMESA') {
    select.appendChild(optionSobremesa);
    select.appendChild(optionCombinado);
    select.appendChild(optionMassa);
    select.appendChild(optionPizzaDoce);
    select.appendChild(optionPizza);
    select.appendChild(optionBebida);
    select.appendChild(optionPromo);

  } else if (form[6].value == 'BEBIDA') {
    select.appendChild(optionBebida);
    select.appendChild(optionSobremesa);
    select.appendChild(optionCombinado);
    select.appendChild(optionMassa);
    select.appendChild(optionPizzaDoce);
    select.appendChild(optionPizza);
    select.appendChild(optionPromo);

  } else if (form[6].value == 'PROMOCAO') {
    select.appendChild(optionPromo);
    select.appendChild(optionBebida);
    select.appendChild(optionSobremesa);
    select.appendChild(optionCombinado);
    select.appendChild(optionMassa);
    select.appendChild(optionPizzaDoce);
    select.appendChild(optionPizza);

  } else {
    select.appendChild(optionPizza);
    select.appendChild(optionPizzaDoce);
    select.appendChild(optionMassa);
    select.appendChild(optionCombinado);
    select.appendChild(optionSobremesa);
    select.appendChild(optionBebida);
    select.appendChild(optionPromo);
  }

  document.querySelector("#nevoa").style.display = "block";
  document.querySelector("#janelaeditar").style.display = "block";

  hidePrecos();
  hidePrecosEditar();

  return false;
}

function novoCancela() {
  var campos = [];
  campos = document.querySelectorAll(".inputsnovo");
  for (var i = 0; i < campos.length; i++) {
    campos[i].value = '';
  }
  document.querySelector("#nevoa").style.display = "none";
  document.querySelector("#janelanovo").style.display = "none";
}

function editarCancela() {
  var myNode = document.getElementById("select-editar");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  document.querySelector("#nevoa").style.display = "none";
  document.querySelector("#janelaeditar").style.display = "none";
}

function hidePrecos() {
  if (document.querySelector("#select-tipo").value != 'PIZZA' &&
  document.querySelector("#select-tipo").value != 'DOCE') {
    document.querySelector("#grande").style.display = 'none';
    document.querySelector("#familia").style.display = 'none';
    document.querySelector("#input-grande").value = '';
    document.querySelector("#input-familia").value = '';
    document.querySelector("#broto-novo").innerHTML = "Preço";
  } else {
    document.querySelector("#grande").style.display = 'block';
    document.querySelector("#familia").style.display = 'block';
    document.querySelector("#broto-novo").innerHTML = "Broto";
  }
}

function hidePrecosEditar() {
  if (document.querySelector("#select-editar").value != 'PIZZA' &&
  document.querySelector("#select-editar").value != 'DOCE') {
    document.querySelector("#grandeeditar").style.display = 'none';
    document.querySelector("#familiaeditar").style.display = 'none';
    document.querySelector("#input-grande-editar").value = '';
    document.querySelector("#input-familia-editar").value = '';
    document.querySelector("#broto-editar").innerHTML = "Preço";
  } else {
    document.querySelector("#grandeeditar").style.display = 'block';
    document.querySelector("#familiaeditar").style.display = 'block';
    document.querySelector("#broto-editar").innerHTML = "Broto";
  }
}

window.addEventListener("load", main);
