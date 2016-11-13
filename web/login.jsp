<%-- 
    ============================================================================
    Universidad Nacional de Costa Rica.
    Curso           : Programacion IV.
    Profesor        : Christian Garita.
    Estudiantes     : Dennis Bonilla Ramirez | Bryan Valerio Herrera.           
    Proyecto # 1     
    ============================================================================
--%>
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
    <head>     
        <!--Scripts-->        
        <!-- JQuery -->
        <script src="scripts/jquery/jquery.js" type="text/javascript"></script>
        <!-- JQuery UI -->
        <script src="scripts/jquery-ui/jquery-ui.js" type="text/javascript"></script>
        <!-- AJAX -->
        <script src="scripts/ajax/ajax.js" type="text/javascript"></script>    
        <!-- Bootstrap -->
        <script src="css/bootstrap/js/bootstrap.js" type="text/javascript"></script>        
        <script src="scripts/Login.js" type="text/javascript"></script>
        <!-- CSS -->
        <link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="scripts/jquery-ui/jquery-ui.css" rel="stylesheet" type="text/css"/>
        <link href="css/Login.css" rel="stylesheet" type="text/css"/>
        <title>Identificación</title>
        <link rel="shortcut icon" href="images/favicon.png" /> 
    </head>    
    <body>
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
                                <% if (usuarioLogueado == false) { %>
                            <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">ACCEDER A MI CUENTA<b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li onclick="cargarContenido('9');"><a href="#">LOGIN</a></li>
                                    <li role="separator" class="divider"></li><li class="dropdown-header">NUEVO USUARIO</li>
                                    <li onclick="cargarContenido('10');"><a href="#">REGISTRARSE</a></li>
                                </ul>
                            </li>
                           <%}%>
                            <% if (usuarioLogueado == true) { %>
                            <% if (rol == 0) {%>
                            <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><%=nombre%><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li onclick="cargarContenido('');"><a href="#">LOGOUT</a></li>
                                    <li role="separator" class="divider"></li><li class="dropdown-header">Gestion basica</li>
                                    <li onclick="cargarContenido('');"><a href="#">Solicitar atencion experto</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Administra informacion personal</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Ver historico de consultas</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Ver Facturas por servicios</a></li>
                                </ul>
                            </li>
                            <%}%>
                            <% if( rol == 1){%>
                            <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><%=nombre%><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li onclick="cargarContenido('');"><a href="#">LOGOUT</a></li>
                                    <li role="separator" class="divider"></li><li class="dropdown-header">Gestion basica</li>
                                    <li onclick="cargarContenido('');"><a href="#">Solicitar atencion experto</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Administra informacion personal</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Ver historico de consultas</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Ver Facturas por servicios</a></li>
                                    <li role="separator" class="divider"></li><li class="dropdown-header">Gestion experto</li>
                                    <li onclick="cargarContenido('');"><a href="#">Mis Categorias</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Ver usuario en espera</a></li>
                                </ul>
                            </li>
                            <%}%>
                           <% if( rol == 2){%>
                            <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><%=nombre%><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li onclick="cargarContenido('');"><a href="#">LOGOUT</a></li>
                                    <li role="separator" class="divider"></li><li class="dropdown-header">Gestion basica</li>
                                    <li onclick="cargarContenido('');"><a href="#">Solicitar atencion experto</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Asministra informacion personal</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Ver historico de consultas</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Ver Facturas por servicios</a></li>
                                    <li role="separator" class="divider"></li><li class="dropdown-header">Gestion experto</li>
                                    <li onclick="cargarContenido('');"><a href="#">Mis Categorias</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Ver usuario en espera</a></li>
                                    <li role="separator" class="divider"></li><li class="dropdown-header">Gestion administrativa</li>
                                    <li onclick="cargarContenido('');"><a href="#">Gestionar Usuario</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Gestionar temas</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Gestionar expertos por tema</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Consultar facturacion global</a></li>
                                    <li onclick="cargarContenido('');"><a href="#">Consultar reporte web</a></li>
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
        <section id="header" >       
            <h2 class="subtitle">Bienvenido a Consultoria Expertos</h2>
        </section>
        <section>
            <div id="loginmodal"> 
                <!--  <form id="loginform" >-->     
                <div id="tabla">
                    <h3>Identificación:</h3>
                    <table>
                        <tr>
                            <td colspan="2">                 
                                <input type="text" name="usuario" id="usuario" 
                                       class="inputLogin" tabindex="1" 
                                       placeholder=" Usuario" >
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <input type="password"  name="contrasena" id="txtContrasena"  
                                       class="inputLogin" tabindex="2" placeholder=" Contraseña" >
                            </td>
                        </tr>          
                        <tr>
                            <td>
                                <button  name="btLoginAceptar" id="btLoginAceptar"> Iniciar sesión
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <font color="red">
                                <span id="mensaje"></span>
                                </font>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        </section>
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
        </section>
    </body>
</html>
