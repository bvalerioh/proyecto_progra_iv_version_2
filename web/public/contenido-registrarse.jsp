<%-- 
    Document   : contenido-registrarse
    Created on : Oct 17, 2016, 8:21:08 PM
    Author     : ghost
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div id="contenido-registrarse" onloadstart="registro_usuario()">
    <form class="form-horizontal">
        <h1>REGISTRO USUARIO</h1>
        <br/>
        <div class="form-group">
            <label for="registro-usuario"  class="control-label col-sm-3">Usuario:</label>
            <div class="col-sm-8">
            <input class="form-control" type="text" id="registro-usuario" 
                   placeholder="Ingrese su usuario">
            </div>
        </div>
        <div class="form-group">
            <label for="registro-contrasena"  class="control-label col-sm-3">Contraseña:</label>
            <div class="col-sm-8">
            <input class="form-control" type="password" id="registro-contrasena" 
                   placeholder="Ingrese su contraseña">
            </div>
        </div>
        <div class="form-group">
            <label for="registro-confirmar-contrasena"  class="control-label col-sm-3">Confirmar contraseña:</label>
            <div class="col-sm-8">
            <input class="form-control" type="password" id="registro-confirmar-contrasena" 
                   placeholder="Confirmé su contraseña">
            </div>
        </div>
        <div class="form-group">
            <label for="registro-nombre"  class="control-label col-sm-3">Nombre:</label>
            <div class="col-sm-8">
            <input class="form-control" type="text" id="registro-nombre" 
                   placeholder="Ingrese su nombre">
            </div>
        </div>
        <div class="form-group">
            <label for="registro-apellidos"  class="control-label col-sm-3">Apellidos:</label>
            <div class="col-sm-8">
            <input class="form-control" type="text" id="registro-apellidos" 
                   placeholder="Ingrese sus apellidos">
            </div>
        </div>
        <div class="form-group">
            <label for="registro-correo-electronico"  class="control-label col-sm-3">Correo electrónico:</label>
            <div class="col-sm-8">
            <input type="email" class="form-control" id="registro-correo-electronico" 
                   placeholder="Ingrese su correo electronico.">
            </div>
        </div>
        <div class="form-group">
            <label for="registro-fecha-nacimiento"  class="control-label col-sm-3">Fecha de Nacimiento:</label>
            <div class="col-sm-8">
            <input class="form-control" type="text" id="registro-fecha-nacimiento" 
                   placeholder="Fecha de Nacimiento">
            </div>
        </div>
        <div class="form-group">
            <label for="registro-telefono-trabajo"  class="control-label col-sm-3">Teléfono de trabajo:</label>
            <div class="col-sm-8">
            <input class="form-control" type="text" id="registro-telefono-trabajo" 
                   placeholder="Ingrese su telefono">
            </div>
        </div>
        <div class="form-group">
            <label for="registro-celular"  class="control-label col-sm-3">Celular:</label>
            <div class="col-sm-8">
            <input class="form-control" type="text" id="registro-celular" 
                   placeholder="Ingrese su número celular">
            </div>
        </div> 
        <div class="form-group">
            <label for="txt">Direción:</label>
            <textarea class="form-control" id="txt" rows="6" 
                      placeholder="API de google maps."></textarea>
        </div>       
        <div class="form-group"> 
            <button type="submit" class="btn boton-left">Enviar</button>
        </div>    
    </form>
</div>