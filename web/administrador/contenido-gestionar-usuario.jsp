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
                <input type="text" value="" placeholder="Por usuarios." 
                   onkeyup="filtroUsuarios()"id="filtro-Usuarios"
                   class="form-control" />  
                <span class="input-group-addon">                     
                    <i class="glyphicon glyphicon-search"></i>
                </span>
                </div>   
                <br>
            </div> 
            <table class="table table-bordered" id="gesion-usuarios-tabla"></table>
            <div id="paginacion-getionusuarios-tabla"></div>
        </div>
        <div class="col-md-6 text-center">
            <form class="form-horizontal">
                <br/>
                <input id="id-gestion-idusuario" type="hidden" />
                <div class="form-group">
                    <label for="gestion-usuario-nombre">Nombre usuario experto:</label>
                    <input type="text" class="form-control" id="gestion-usuario-nombre" 
                           readonly>
                </div>
                <div class="form-group">
                    <label for="gestion-usuario-estado">Es experto<</label>
                    <div id="gestion-usuario-estado">
                        <label class="radio-inline"><input type="radio" name="optradio">Si</label>
                        <label class="radio-inline"><input type="radio" name="optradio">No</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="gestion-usuario-observaciones">Observaciones:</label>
                    <textarea class="form-control" id="gestion-usuario-observaciones" rows="4" 
                              placeholder="¿Alguna observación?."></textarea>
                </div>

                <br />
                <div class="form-group"> 
                    <button type="button" class="btn boton-rigth" 
                            id="gestionar-expxtema-cancelar" onclick="cancelarExpXTema()">Cancelar</button>
                    <button type="button" class="btn boton-left" 
                            id="gestionar-expxtema-guardar" onclick="guardarExpXtema()">Guardar</button>
                    <button type="button" class="hidden" 
                            id="gestionar-expxtema-modificar" onclick="modificaExpXtema()">Modificar</button>
                </div>
            </form>
        </div>
    </div>
</div>