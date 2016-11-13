<%-- 
    Document   : contenido-gestionar-usuario
    Created on : Oct 17, 2016, 9:28:20 PM
    Author     : ghost
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div id="contenido-gestionar-usuario">
    <h1>GESTION DE USUARIOS</h1>
    <div class="container">
        <div class="col-md-6 text-center">
            <h4>Lista de usuarios.</h4>
            <label class="col-sm-2 control-label"
                    for="filtro-Usuarios">Buscar:</label>
            <div class="col-sm-10 inner-addon right-addon">  
                <div class="input-group">
                    <input type="text" value="" placeholder="Filtro por usuarios." 
                       onkeyup="filtroUsuarios()"id="filtro-Usuarios"
                       class="form-control" />  
                    <span class="input-group-addon">                     
                        <i class="glyphicon glyphicon-search"></i>
                    </span>
                </div>   
                <br>
            </div> 
            <table class="table table-bordered" id="gesion-usuarios-tabla"></table>
            <div id="paginacion-gUsuarios-tabla"></div>
        </div>
        <div class="col-md-6 text-center">
            <form class="form-horizontal">
                <br/>
                <input id="id-gestion-idusuario" type="hidden" />
                <div class="form-group">
                    <label for="gestion-usuario-usuario">El usuario:</label>
                    <input type="text" class="form-control" id="gestion-usuario-usuario" 
                           readonly>
                </div>
                <div class="form-group">
                    <label for="gestion-usuario-nombre">Nombre usuario:</label>
                    <input type="text" class="form-control" id="gestion-usuario-nombre" 
                           readonly>
                </div>
                <div class="form-group">
                    <label for="gestion-usuario-Tipo">Tipo usuario: </label>
                    <select class="form-control" id="gestion-usuario-Tipo">
                        <option value="0">Usuario</option>
                        <option value="1">Experto</option>
                        <option value="2">Admini.</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="gestion-usuario-observaciones">Observaciones: </label>
                    <textarea class="form-control" id="gestion-usuario-observaciones" rows="4" 
                              placeholder="¿Alguna observación?."></textarea>
                </div>

                <br />
                <div class="form-group"> 
                    <button type="button" class="btn boton-rigth" onclick="limpiaFormGUsuario()">Cancelar</button>
                    <button type="button" class="btn boton-left"onclick="modificaGUsuario()">Modificar</button>
                </div>
            </form>
        </div>
    </div>
</div>