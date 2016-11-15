<%-- 
    ============================================================================
    Universidad Nacional de Costa Rica.
    Curso           : Programacion IV.
    Profesor        : Christian Garita.
    Estudiantes     : Dennis Bonilla Ramirez | Bryan Valerio Herrera.           
    Proyecto # 1     
    ============================================================================
--%>
<%@page import="javax.swing.JOptionPane"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

    HttpSession sesion = request.getSession(true);
    String nombre = "";
    Integer rol = -1;    
    boolean usuarioLogueado = false;

    if (sesion.getAttribute("id") != null) {
        rol = (Integer) sesion.getAttribute("rolusuario");
        nombre = (String) sesion.getAttribute("username");
        usuarioLogueado = true;
    }
    
%>


<!DOCTYPE html>
<html>
    <!-- Inicio del Head --> 
    <link rel="shortcut icon" href="images/favicon.png" /> 
    <input type="hidden" id="idUsuarioIdentificado" value="${sessionScope.id}" />
    <input type="hidden" id="NombreUsuarioIdentificado" value="${sessionScope.nombre}" />
    <%@include file="public/contenido-head.jsp"%>
    <!-- Final del Head --> 
    <!-- Inicio del body -->
    <body>
        <!--[if lt IE 10]>
              <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <!-- ********************************************************** -->
        <!-- Modal del BootsTrap para mostrar mensajes                  -->
        <!-- ********************************************************** -->
        <section>
            <div class="modal fade" id="modalAlert" role="dialog">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <a href="#" data-dismiss="modal" aria-hidden="true" class="close">×</a>
                            <h4 id="mesajeResultDirecNeg">Info!</h4> 
                        </div>   
                        <br />
                        <div class="alert alert-success hiddenDiv" id="mesajeResultDirec">
                            <span id="AlertDirecMesaje">This alert box could indicate a neutral informative change or action.</span>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modalEliminar" role="dialog">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header" id="modalEliminarHeader"></div>                    
                        <div class="modal-body" id="modalEliminarMessage"></div>                
                        <div class="modal-footer" id="modalEliminarBotones">                        
                            <a href="#" data-dismiss="modal" aria-hidden="true" class="btn secondary">Cancelar</a>
                            <a href="#" id="btnYesEliminar" class="btn btn-danger btn-ok">Eliminar</a>
                        </div>                   
                    </div>
                </div>
            </div>
        </section>
        <!-- barra de navegacion global evalua segun el usuario -->
        <section id="barra-navegacion-global">
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html">CONSULTORIA EXPERTO</a>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li onclick="cargarContenido('1');"><a href="#">INICIO</a></li>
                            <li onclick="cargarContenido('2'); colapsar_Accordion('');"><a href="#">REFERENTE INSTRUCCIONAL</a></li>
                            <li onclick="cargarContenido('3');"><a href="#">NUESTRA HISTORIA</a></li>
                            <li onclick="cargarContenido('4');"><a href="#">CONTÁCTENOS</a></li>
                           <% if(usuarioLogueado == false ){ %>
                            <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">ACCEDER A MI CUENTA<b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li onclick="cargarContenido('9');"><a href="#">LOGIN</a></li>
                                    <li role="separator" class="divider"></li><li class="dropdown-header">NUEVO USUARIO</li>
                                    <li onclick="cargarContenido('10');"><a href="#">REGISTRARSE</a></li>
                                </ul>
                            </li>
                           <%}%>
                           <% if(usuarioLogueado == true ){ %>
                            <% if( rol == 0){%>
                            <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><%=nombre%><b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li onclick="cargarContenido('18');"><a href="#">LOGOUT</a></li>
                                        <li role="separator" class="divider"></li><li class="dropdown-header">Gestion basica</li>
                                        <li onclick="cargarContenido('5');"><a href="#">Solicitar atencion experto</a></li>
                                        <li onclick="cargarContenido('6');"><a href="#">Administra informacion personal</a></li>
                                        <li onclick="cargarContenido('7');"><a href="#">Ver historico de consultas</a></li>
                                        <li onclick="cargarContenido('8');"><a href="#">Ver Facturas por servicios</a></li>
                                    </ul>
                                </li>
                            <%}%>
                            <% if( rol == 1){%>
                            <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><%=nombre%><b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li onclick="cargarContenido('18');"><a href="#">LOGOUT</a></li>
                                        <li role="separator" class="divider"></li><li class="dropdown-header">Gestion basica</li>
                                        <li onclick="cargarContenido('5');"><a href="#">Solicitar atencion experto</a></li>
                                        <li onclick="cargarContenido('6');"><a href="#">Administra informacion personal</a></li>
                                        <li onclick="cargarContenido('7');"><a href="#">Ver historico de consultas</a></li>
                                        <li onclick="cargarContenido('8');"><a href="#">Ver Facturas por servicios</a></li>
                                        <li role="separator" class="divider"></li><li class="dropdown-header">Gestion experto</li>
                                        <li onclick="cargarContenido('12');"><a href="#">Mis Categorias</a></li>
                                        <li onclick="cargarContenido('11');"><a href="#">Ver usuario en espera</a></li>
                                    </ul>
                                </li>
                            <%}%>
                             <% if( rol == 2){%>
                            <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><%=nombre%><b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li onclick="cargarContenido('18');"><a href="#">LOGOUT</a></li>
                                        <li role="separator" class="divider"></li><li class="dropdown-header">Gestion basica</li>
                                        <li onclick="cargarContenido('5');"><a href="#">Solicitar atencion experto</a></li>
                                        <li onclick="cargarContenido('6');"><a href="#">Asministra informacion personal</a></li>
                                        <li onclick="cargarContenido('7');"><a href="#">Ver historico de consultas</a></li>
                                        <li onclick="cargarContenido('8');"><a href="#">Ver Facturas por servicios</a></li>
                                        <li role="separator" class="divider"></li><li class="dropdown-header">Gestion experto</li>
                                        <li onclick="cargarContenido('12');"><a href="#">Mis Categorias</a></li>
                                        <li onclick="cargarContenido('11');"><a href="#">Ver usuario en espera</a></li>
                                        <li role="separator" class="divider"></li><li class="dropdown-header">Gestion administrativa</li>
                                        <li onclick="cargarContenido('15');"><a href="#">Gestionar Usuario</a></li>
                                        <li onclick="cargarContenido('16');"><a href="#">Gestionar temas</a></li>
                                        <li onclick="cargarContenido('17');"><a href="#">Gestionar expertos por tema</a></li>
                                        <li onclick="cargarContenido('13');"><a href="#">Consultar facturacion global</a></li>
                                        <li onclick="cargarContenido('14');"><a href="#">Consultar reporte web</a></li>
                                    </ul>
                                </li>
                            <%}%>
                           <%}%>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
                <!-- /.container -->
            </nav>
        </section> 
        <!-- Fin modal de bootstrap para mostrar mensajes -->  
        <!-- Inicio de todo el contenido -->
        <section id="contenido-wrapper">
            <div>
                <!-- Header Carousel --> 
                <header>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" >
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        <!-- Wrapper for slides -->
                        <div class="carousel-inner">
                            <div class="item active">
                                <a href="#"><img src="images/001.png" alt=""/></a>         
                                <!--<div class="fill" style="background-image:url('http://placehold.it/1900x1080&text=Slide One');"></div>-->
                                <div class="carousel-caption">
                                    <h2>Caption 1</h2>
                                    <p>caption .1.</p>
                                </div>
                            </div>
                            <div class="item">
                                <a href="#"><img src="images/002.png"/></a>
                                <!--<div class="fill" style="background-image:url('http://placehold.it/1900x1080&text=Slide Two');"></div>-->
                                <div class="carousel-caption">
                                    <h2>Caption 2</h2>
                                    <p>caption .2.</p>
                                </div>
                            </div>
                            <div class="item">
                                <a href="#"><img src="images/003.png" /></a>
                                <!--<div class="fill" style="background-image:url('http://placehold.it/1900x1080&text=Slide Three');"></div>-->
                                <div class="carousel-caption">
                                    <h2>Caption 3</h2>
                                    <p>caption .3.</p>
                                </div>
                            </div>
                        </div>                
                        <!-- Controls -->
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="icon-prev"></span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="icon-next"></span>
                        </a>
                    </div>
                </header>
                <!-- Page Content -->
                <div class="container">
                    <!-- Marketing Icons Section -->
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="page-header heading-one">
                                Bienvenido a Consultoria Experto
                            </h1>
                        </div>
                        <div class="col-md-4">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4><i class="fa fa-fw fa-check"></i>Experiencia</h4>
                                </div>
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?</p>
                                    <a href="#" class="btn btn-default">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4><i class="fa fa-fw fa-gift"></i>Solidez</h4>
                                </div>
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?</p>
                                    <a href="#" class="btn btn-default">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4><i class="fa fa-fw fa-compass"></i>Coviertase en experto</h4>
                                </div>
                                <div class="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?</p>
                                    <a href="#" class="btn btn-default">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.row -->
                    <!-- Portfolio Section -->
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="page-header heading-one">Nuestra Experiencia</h1>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img class="img-responsive img-portfolio img-hover" src="images/pagina-inicio/tecnologia.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img class="img-responsive img-portfolio img-hover" src="images/pagina-inicio/salud-belleza.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img class="img-responsive img-portfolio img-hover" src="images/pagina-inicio/finanzas.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img class="img-responsive img-portfolio img-hover" src="images/pagina-inicio/viajes.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img class="img-responsive img-portfolio img-hover" src="images/pagina-inicio/legal.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <a href="portfolio-item.html">
                                <img class="img-responsive img-portfolio img-hover" src="images/pagina-inicio/gastronomia.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <!-- /.row -->
                    <!-- Features Section -->
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="page-header">Modern Business Features</h2>
                        </div>
                        <div class="col-md-6">
                            <p>The Modern Business template by Start Bootstrap includes:</p>
                            <ul>
                                <li><strong>Bootstrap v3.3.7</strong>
                                </li>
                                <li>jQuery v1.11.1</li>
                                <li>Font Awesome v4.2.0</li>
                                <li>Working PHP contact form with validation</li>
                                <li>Unstyled page elements for easy customization</li>
                                <li>17 HTML pages</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-responsive" src="http://placehold.it/700x450" alt="">
                        </div>
                    </div>
                    <!-- /.row -->
                    <hr>
                    <!-- Call to Action Section -->
                    <div class="well">
                        <div class="row">
                            <div class="col-md-8">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                            </div>
                            <div class="col-md-4">
                                <a class="btn btn-lg btn-default btn-block" href="#">Call to Action</a>
                            </div>
                        </div>
                    </div>
                    <hr>   
                </div>
                <!-- /.container -->
            </div>
        </section>
        <!-- Fin de todo el contenido -->
        <!-- Inicio del footer -->
        <section id="pie-de-pagina">
            <!-- Footer -->
            <footer>
                <div class="row">
                    <div class="col-lg-12">
                        <p>Copyright &copy; CONSULTORIA EXPERTO 2016</p>
                    </div>
                </div>
            </footer>
        </section>
        <!-- Fin del footer -->
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function (b, o, i, l, e, r) {
                b.GoogleAnalyticsObject = l;
                b[l] || (b[l] =
                        function () {
                            (b[l].q = b[l].q || []).push(arguments)
                        });
                b[l].l = +new Date;
                e = o.createElement(i);
                r = o.getElementsByTagName(i)[0];
                e.src = 'https://www.google-analytics.com/analytics.js';
                r.parentNode.insertBefore(e, r)
            }(window, document, 'script', 'ga'));
            ga('create', 'UA-XXXXX-X');
            ga('send', 'pageview');
        </script>
        <!-- Fin del google analytics -->
    </body>
    <!-- Final del body -->
</html>
