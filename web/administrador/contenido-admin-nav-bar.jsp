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
    String nombreUsuarioEnSession = "MANUEL";
%>
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
                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><%=nombreUsuarioEnSession%><b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <!--<li role="separator" class="divider"></li><li class="dropdown-header">NUEVO USUARIO</li>-->
                        <li onclick="cargarContenido('13');"><a href="#">Facturacion</a></li> 
                        <li onclick="cargarContenido('17');"><a href="#">Gestrionar Expertos</a></li>
                        <li onclick="cargarContenido('16');"><a href="#">Gestionar Temas</a></li>
                        <li onclick="cargarContenido('15');"><a href="#">Gestionar Usuarios</a></li>
                        <li onclick="cargarContenido('14');"><a href="#">Reportes</a></li>
                        <li onclick="cargarContenido('18');"><a href="#">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>
