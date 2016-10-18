<%-- 
    Document   : contenido-mis-datos-personales
    Created on : Oct 17, 2016, 8:39:58 PM
    Author     : ghost
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div id="contenido-mis-datos-personales" onload="mis_datos_personales();">    
    <h1>MIS DATOS PERSONALES</h1>
    <br/>
    <form class="form-horizontal">       
        <div class="form-group">
            <label for="datos-personales-usuario"  class="control-label col-sm-3">Usuario:</label>
            <div class="col-sm-8">
            <input class="form-control" type="text" id="datos-personales-usuario" 
                   placeholder="Ingrese su usuario">
            </div>
        </div>
        <div class="form-group">
            <label for="datos-personales-contrasena" class="control-label col-sm-3">Contraseña:</label>
            <div class="col-sm-8">
            <input class="form-control" type="password" id="datos-personales-contrasena" 
                   placeholder="Ingrese su contraseña">
            </div>            
        </div>
        <div class="form-group">
            <label for="datos-personales-confirmar-contrasena" class="control-label col-sm-3">Confirmar contraseña:</label>
            <div class="col-sm-8">
            <input class="form-control" type="password" id="datos-personales-confirmar-contrasena" 
                   placeholder="Confirmé su contraseña">
            </div>
        </div>
        <div class="form-group">
            <label for="datos-personales-nombre" class="control-label col-sm-3">Nombre:</label>
            <div class="col-sm-8">
            <input class="form-control" type="text" id="datos-personales-nombre" 
                   placeholder="Ingrese su nombre">
            </div>
        </div>
        <div class="form-group">
            <label for="datos-personales-apellidos" class="control-label col-sm-3">Apellidos:</label>
            <div class="col-sm-8">
            <input class="form-control" type="text" id="datos-personales-apellidos" 
                   placeholder="Ingrese sus apellidos">
            </div>
        </div>
        <div class="form-group">
            <label for="datos-personales-correo-electronico" class="control-label col-sm-3">Correo electrónico:</label>
            <div class="col-sm-8">
            <input type="email" class="form-control" id="datos-personales-correo-electronico" 
                   placeholder="Ingrese su correo electronico.">
            </div>
        </div>
        <div class="form-group">
            <label for="datos-personales-fecha-nacimiento" class="control-label col-sm-3">Fecha de Nacimiento:</label>
            <div class="col-sm-8">
            <input class="form-control" type="text" id="datos-personales-fecha-nacimiento" 
                   placeholder="Fecha de Nacimiento">
            </div>
        </div>
        <div class="form-group">
            <label for="datos-personales-telefono-trabajo" class="control-label col-sm-3">Teléfono de trabajo:</label>
            <div class="col-sm-8">
            <input class="form-control" type="tel" id="datos-personales-telefono-trabajo" 
                   placeholder="Ingrese su telefono">
            </div>
        </div>
        <div class="form-group">
            <label for="datos-personales-celular" class="control-label col-sm-3">Celular:</label>
            <div class="col-sm-8">
            <input class="form-control" type="tel" id="datos-personales-celular" 
                   placeholder="Ingrese su número celular">
            </div>
        </div>           
        <div class="form-group">
            <label for="txt">Direción:</label>
            <textarea class="form-control" id="datos-personales-direccion" rows="6" 
                      placeholder="API de google maps."></textarea>
        </div>
        <div class="form-group"> 
            <button type="button" class="btn boton-left" id="btModificarDatosPersonales"
                    onclick=" modificarDatosPersonales();">Modificar</button>
        </div>
    </form>
</div>