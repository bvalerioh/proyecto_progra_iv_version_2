<%-- 
    Document   : login
    Created on : 29/10/2016, 07:21:18 PM
    Author     : Bryan_2
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
    </head>    
    <body>
        <section>
            <div class="modal fade" id="modalAlert" role="dialog">
                <div class="modal-dialog modal-sm">
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
    </body>
</html>
