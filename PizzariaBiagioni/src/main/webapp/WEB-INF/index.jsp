<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script type="text/javascript" src="./_resources/domPaginaInicial.js"></script>
        <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>
        <link rel="stylesheet" href="./_resources/estiloPaginaInicial.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Hind" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Marck+Script" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Caveat|Vast+Shadow" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Baloo+Da" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Jaldi" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet">
        <link rel="shortcut icon" href="./_imagens/favicon.ico" />
        <title>Pizzaria Biagioni</title>
    </head>
    <body>
        <section id="principal">
            <div id="menu">
                <ul>
                    <li><button type="button" id="buttoncontato">Contato</button></li>
                    <li><button type="button" id="buttonlocalizacao">Localização</button></li>
                    <li><button type="button" id="buttoncardapio">Cardápio</button></li>
                    <li><button type="button" id="buttonpromocoes">Promoções</button></li>
                    <li><button type="button" id="buttonnossacasa">Nossa Casa</button></li>
                    <li><button type="button" id="buttonhome">Home</button></li>
                </ul>
            </div>

            <div id="firstimg">
                <img src="_imagens/logo.JPG" alt="Logo da pizzaria">
            </div>

            <div class="sessoes bckgrounded" id="nossacasa">
                <h1 class="titulos">Nossa Casa</h1>
                <div id="fachada">
                    <img src="_imagens/FachadaPizzaria.jpg">
                </div>
                <p>Em 1999, Carlos de Toledo Domenico criou a PIZZARIA DOMENICO, unindo a tradição da pizza com a sofisticação informal. E não parou de crescer, evoluir, adotando o lema: “Atender à expectativa dos clientes” como sinônimo de qualidade.</p>
                <p>A localização tornou-se privilegiada: Haddock Lobo X Alameda Tietê, a porta de entrada dos Jardins. O investimento constante nas instalações, produtos e serviços, faz com que a DOMENICO seja considerada um dos clássicos, na terra das pizzarias.</p>
                <p>Todos os recursos são colocados à disposição dos funcionários, para que a filosofia desde a fundação continue: SERVIR PIZZAS COM DEDICAÇÃO, CONHECIMENTO E ALEGRIA.</p>
            </div>

            <div class="sessoes bckgrounded" id="sessaopromocoes">
                <h1 class="titulos">Promoções</h1>
                <c:forEach var="promo" items="${promocoes}">
                    <div class="paineispromo">
                        <h3>${promo.nome}</h3>
                        <p>${promo.descricao}</p>
                        <p>${promo.preco}</p>
                    </div>
                </c:forEach>
            </div>

            <div class="sessoes bckgrounded" id="sessaocardapio">
                <h1 class="titulos">Cardápio</h1>
                <div class="container-fluid">

                    <div class="row">

                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 input-group escolha-pizzas">
                            <h3>Escolha o tamanho da sua pizza</h3>
                            <input id="broto" class="radios" type="radio" name="tamanho" value="broto" checked/>
                            <label for="broto">Broto 4 pedaços</label> <br>

                            <input id="broto-meio" class="radios" type="radio" name="tamanho" value="broto-meio"/>
                            <label for="broto-meio">Broto 4 pedaços 2 sabores</label> <br>

                            <input id="grande" class="radios" type="radio" name="tamanho" value="grande"/>
                            <label for="grande">Grande 8 pedaços</label> <br>

                            <input id="grande-meio" class="radios" type="radio" name="tamanho" value="grande-meio"/>
                            <label for="grande-meio">Grande 8 pedaços 2 sabores</label> <br>

                            <input id="grande-terco" class="radios" type="radio" name="tamanho" value="grande-terco"/>
                            <label for="grande-terco">Grande 8 pedaços 3 sabores</label> <br>

                            <input id="familia" class="radios" type="radio" name="tamanho" value="familia"/>
                            <label for="familia">Familia 12 pedaços</label> <br>

                            <input id="familia-meio" class="radios" type="radio" name="tamanho" value="familia-meio"/>
                            <label for="familia-meio">Familia 12 pedaços 2 sabores</label> <br>

                            <input id="familia-terco" class="radios" type="radio" name="tamanho" value="familia-terco"/>
                            <label for="familia-terco">Familia 12 pedaços 3 sabores</label> <br>
                        </div>
                    </div>

                    <div id="sessaointerativa">

                      <div id="pizza-inteira">
                          <c:forEach var="pizzas" items="${pizza}">
                              <div class="titulopreco">
                                  <h3>${pizzas.nome}</h3>
                                  <p class="preco-broto precos">${pizzas.precoBroto}</p>
                                  <p class="preco-grande precos">${pizzas.precoGrande}</p>
                                  <p class="preco-familia precos">${pizzas.precoFamilia}</p>
                              </div>
                              <p class="descricao">${pizzas.descricao}</p>
                          </c:forEach>
                      </div>

                      <div id="pizza-meia">
                          <c:forEach var="meia" items="${pizzaMeio}">
                              <div class="titulopreco">
                                  <h3>${meia.nome}</h3>
                                  <p class="preco-broto precos">${meia.precoBroto}</p>
                                  <p class="preco-grande precos">${meia.precoGrande}</p>
                                  <p class="preco-familia precos">${meia.precoFamilia}</p>
                              </div>
                              <p class="descricao">${meia.descricao}</p>
                          </c:forEach>
                      </div>

                      <div id="pizza-terco">
                          <c:forEach var="terco" items="${pizzaTerco}">
                              <div class="titulopreco">
                                  <h3>${terco.nome}</h3>
                                  <p class="preco-broto precos">${terco.precoBroto}</p>
                                  <p class="preco-grande precos">${terco.precoGrande}</p>
                                  <p class="preco-familia precos">${terco.precoFamilia}</p>
                              </div>
                              <p class="descricao">${terco.descricao}</p>
                          </c:forEach>
                      </div>
                    </div>
                </div>
            </div>

            <div class="sessoes bckgrounded" id="sessaolocalizacao">
                <h1 class="titulos">Localização</h1>
                <p>Avenida Damasceno Vieira, 1072 - Vila Mascote, São Paulo - SP</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d913.6956202868464!2d-46.667191465344224!3d-23.647959719879264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12c92514e95df00c!2sAthu&#39;s+Pizzaria!5e0!3m2!1spt-BR!2sbr!4v1507126887068" allowfullscreen></iframe>  </div>

            <footer id="sessaocontato">
                <div class="sessoes">
                    <h1 class="titulos">Contato</h1>
                    <hr/>
                    <h2><a href="tel:01128251552">2825-1552</a><br/>
                        <a href="tel:01145059866">4505-9866</a><br/>
                        <a href="tel:011995937704">99593-7704 </a><img src="_imagens/whatsapp.png"></h2>
                    <p>De Terça à Domingo das 18h às 00h</p>
                    <p id="copyright">Copyright (c) Pizzaria Biagioni Copyright Holder All Rights Reserved. <br>
                        Developed by Jonata Hessa.</p>
                </div>
            </footer>
        </section>
    </body>
</html>
