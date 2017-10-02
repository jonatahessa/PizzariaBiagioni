function main() {
  var btnNovo = document.querySelector("#novo");
  var cancelaNovo = document.querySelector("#cancelanovo");
  var cancelaEditar = document.querySelector("#cancelaeditar");

  cancelaEditar.addEventListener("click", editarCancela);
  btnNovo.addEventListener("click", abrirNovo);
  cancelaNovo.addEventListener("click", novoCancela);
}

function abrirNovo() {
  document.querySelector("#nevoa").style.display = "block";
  document.querySelector("#janelanovo").style.display = "block";
}

function abrirEditar(form) {
  inputs = [];
  inputs = document.querySelectorAll(".inputseditar");
  var select = document.querySelector("#selecteditar");
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
  var myNode = document.getElementById("selecteditar");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  document.querySelector("#nevoa").style.display = "none";
  document.querySelector("#janelaeditar").style.display = "none";
}

window.addEventListener("load", main);
