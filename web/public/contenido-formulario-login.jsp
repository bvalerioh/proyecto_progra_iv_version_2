<%-- 
    Document   : contenido-formulario-login
    Created on : Oct 17, 2016, 8:12:26 PM
    Author     : ghost
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div id="contenido-formulario-login">
    <%@include file="content-public-nav-bar.jsp"%>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form class="form-signin" method="POST">       
                    <h2 class="form-signin-heading">Inicio de Sesion</h2>
                    <input type="text" class="form-control" name="username" 
                           placeholder="Email Address" required="" autofocus=""
                           id="usuarioLogin"/>
                    <input type="password" class="form-control" name="password" 
                           placeholder="Password" required="" id="contrasenaLogin"/>      
                    <label class="checkbox">
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe">Recordar
                    </label>
                    <button id="btLogin" onclick="identificarse();" class="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
                </form>
            </div>
        </div>
    </div>
</div> 