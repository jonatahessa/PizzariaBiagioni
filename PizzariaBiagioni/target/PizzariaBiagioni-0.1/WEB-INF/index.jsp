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
                        <c:if test="${promocoes != null}">
                        <li><button type="button" id="buttonpromocoes">Promoções</button></li>
                        </c:if>
                    <li><button type="button" id="buttonnossacasa">A Biagioni</button></li>
                    <li><button type="button" id="buttonhome">Home</button></li>
                </ul>
            </div>

            <div id="info">
                <h1 id="biagioni"> <span id="decorated">Biagioni </span>Pizzas</h1>
                <h2><a href="tel:01128251552">2825-1552 -</a>
                    <a href="tel:01156797979">5679-7979 -</a>
                    <a href="tel:011995937704">99593-7704 </a><img src="_imagens/whatsapp.png"></h2>
            </div>

            <div id="carousel-example-generic" class="carousel slide carrossel" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img class="imgs-carousel" src="_imagens/biagioni.png" alt="...">
                        <div class="carousel-caption">
                        </div>
                    </div>

                    <div class="item">
                        <img class="imgs-carousel" src="_imagens/biagioni02.PNG" alt="...">
                        <div class="carousel-caption">
                        </div>
                    </div>

                    <div class="item">
                        <img class="imgs-carousel" src="_imagens/frente.jpeg" alt="...">
                        <div class="carousel-caption">
                        </div>
                    </div>
                </div>

                <!-- Controls -->
                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div class="sessoes bckgrounded" id="nossacasa">
                <h1 class="titulos">A Biagioni</h1>
                <div id="fachada">
                    <img src="_imagens/FachadaPizzaria.jpg">
                </div>
                <p>Sendo a melhor opção da Vila Mascote a BIAGIONI juntou a tradição da pizza com a sofisticação informal. Adotando sempre o lema: “Atender bem para atender sempre” como sinônimo de qualidade.</p>
                <p>Com uma localização privilegiada: na Avenida Damasceno Vieira, uma das principais artérias comerciais da Vila Mascote. Com investimento constante nas instalações, produtos e serviços, faz com que a BIAGIONI seja considerada um clássico de São Paulo, terra das pizzarias.</p>
                <p>Todos os recursos são colocados à disposição dos funcionários, para que a filosofia desde a fundação continue: SERVIR PIZZAS COM DEDICAÇÃO, CARINHO E ALEGRIA.</p>
            </div>

            <div class="sessoes bckgrounded">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xs-6 col-md-3">
                    <img class="img-responsive" src="_imagens/parma.jpg" alt=""/>
                    <h4 class="text-center text-warning fonte-courgette">Parma e Marguerita</h4>
                  </div>

                  <div class="col-xs-6 col-md-3">
                    <img class="img-responsive" src="_imagens/kani.jpg" alt=""/>
                    <h4 class="text-center text-warning fonte-courgette">Kani</h4>
                  </div>

                  <div class="col-xs-6 col-md-3">
                    <img class="img-responsive" src="_imagens/shitake.jpg" alt=""/>
                    <h4 class="text-center text-warning fonte-courgette">Shitake e Napolitana</h4>
                  </div>

                  <div class="col-xs-6 col-md-3">
                    <img class="img-responsive" src="_imagens/rucula.jpg" alt=""/>
                    <h4 class="text-center text-warning fonte-courgette">Rúcula e Marguerita</h4>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-6 col-md-3">
                    <img class="img-responsive" src="_imagens/pacoca.jpg" alt=""/>
                    <h4 class="text-center text-warning fonte-courgette">Paçoca</h4>
                  </div>

                  <div class="col-xs-6 col-md-3">
                    <img class="img-responsive" src="_imagens/confeti.jpg" alt=""/>
                    <h4 class="text-center text-warning fonte-courgette">Confetti, Frutas e Banana</h4>
                  </div>

                  <div class="col-xs-6 col-md-3">
                    <img class="img-responsive" src="_imagens/nozes.jpg" alt=""/>
                    <h4 class="text-center text-warning fonte-courgette">Nutella e Moranguinho</h4>
                  </div>

                  <div class="col-xs-6 col-md-3">
                    <img class="img-responsive" src="_imagens/brocolis.jpg" alt=""/>
                    <h4 class="text-center text-warning fonte-courgette">Camarão Especial e Parma</h4>
                  </div>
                </div>
              </div>
            </div>

            <c:if test="${promocoes != null}">
                <div class="sessoes bckgrounded" id="sessaopromocoes">
                    <h1 class="titulos">Promoções</h1>
                    <c:forEach var="promo" items="${promocoes}">
                        <div class="paineispromo">
                            <h3>${promo.nome}</h3>
                            <p>${promo.descricao}</p>
                            <p>${promo.precoBroto}</p>
                        </div>
                    </c:forEach>
                </div>
            </c:if>

            <div class="sessoes bckgrounded" id="sessaocardapio">
                <h1 class="titulos">Cardápio</h1>
                <div class="container-fluid">

                    <div class="row">

                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 input-group escolha-pizzas">

                            <div class="">
                                <button id="broto" class="btn btn-default btn-lg" type="button" name="button">Broto 4 pedaços</button>

                                <button id="grande" class="btn btn-default btn-lg" type="button" name="button">Grande 8 pedaços</button>

                                <button id="familia" class="btn btn-default btn-lg" type="button" name="button">Familia 12 pedaços</button>
                            </div>


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

                            <div class="">

                              <button id="broto-doce" class="btn btn-default btn-lg" type="button">Broto doce 4 pedaços</button>

                              <button id="grande-doce" class="btn btn-default btn-lg" type="button">Grande doce 8 pedaços</button>

                              <button id="familia-doce" class="btn btn-default btn-lg" type="button">Familia doce 12 pedaços</button>

                            </div>


                            <div id="pizza-inteira-doce">
                                <c:forEach var="doces" items="${pizzaDoce}">
                                    <div class="titulopreco">
                                        <h3>${doces.nome}</h3>
                                        <p class="preco-broto-doce precos">${doces.precoBroto}</p>
                                        <p class="preco-grande-doce precos">${doces.precoGrande}</p>
                                        <p class="preco-familia-doce precos">${doces.precoFamilia}</p>
                                    </div>
                                    <p class="descricao">${doces.descricao}</p>
                                </c:forEach>
                            </div>

                            <!--<div class="">
                              <button id="massa" class="btn btn-default btn-lg" type="button" name="button">Massas</button>
                            </div>

                            <div id="massas">
                                <c:forEach var="massas" items="${massa}">
                                    <div class="titulopreco">
                                        <h3>${massas.nome}</h3>
                                        <p class="preco-massa precos">${massas.precoBroto}</p>
                                    </div>
                                    <p class="descricao">${massas.descricao}</p>
                                </c:forEach>
                            </div>

                            <div class="">
                              <button id="combinado" class="btn btn-default btn-lg" type="button" name="button">Combinados</button>
                            </div>


                            <div id="combinados">
                                <c:forEach var="combinados" items="${combinado}">
                                    <div class="titulopreco">
                                        <h3>${combinados.nome}</h3>
                                        <p class="preco-combinado precos">${combinados.precoBroto}</p>
                                    </div>
                                    <p class="descricao">${combinados.descricao}</p>
                                </c:forEach>
                            </div>-->

                            <div class="">
                              <button id="sobremesa" class="btn btn-default btn-lg" type="button" name="button">Sobremesas</button>
                            </div>

                            <div id="sobremesas">
                                <c:forEach var="sobremesas" items="${sobremesa}">
                                    <div class="titulopreco">
                                        <h3>${sobremesas.nome}</h3>
                                        <p class="preco-bebida precos">${sobremesas.precoBroto}</p>
                                    </div>
                                    <p class="descricao">${sobremesas.descricao}</p>
                                </c:forEach>
                            </div>

                            <div class="">
                              <button id="bebida" class="btn btn-default btn-lg" type="button" name="button">Bebidas</button>
                            </div>

                            <div id="bebidas">
                                <c:forEach var="bebidas" items="${bebida}">
                                    <div class="titulopreco">
                                        <h3>${bebidas.nome}</h3>
                                        <p class="preco-bebida precos">${bebidas.precoBroto}</p>
                                    </div>
                                    <p class="descricao">${bebidas.descricao}</p>
                                </c:forEach>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sessoes bckgrounded" id="sessaolocalizacao">
                <h1 class="titulos">Localização</h1>
                <p>Avenida Damasceno Vieira, 1070 - Vila Mascote, São Paulo - SP</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d913.6956202868464!2d-46.667191465344224!3d-23.647959719879264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12c92514e95df00c!2sAthu&#39;s+Pizzaria!5e0!3m2!1spt-BR!2sbr!4v1507126887068" allowfullscreen></iframe>  </div>

            <footer id="sessaocontato">
                <div class="sessoes">
                    <h1 class="titulos">Contato</h1>
                    <hr/>
                    <h2><a href="tel:01128251552">2825-1552</a><br/>
                        <a href="tel:01156797979">5679-7979</a><br/>
                        <a href="tel:011995937704">99593-7704 </a><img src="_imagens/whatsapp.png"></h2>
                    <p id="horario">Todos os dias das 18h às 23h</p>
                    <p id="copyright">Copyright (c) Pizzaria Biagioni Copyright Holder All Rights Reserved. <br>
                        Developed by Jonata Hessa.</p>
                </div>
            </footer>
        </section>
    </body>
</html>
