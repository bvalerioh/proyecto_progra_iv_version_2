<%-- 
    Document   : contenido-gestionar-tema
    Created on : Oct 17, 2016, 9:27:10 PM
    Author     : ghost
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div id="contenido-gestionar-tema">
    <h1>GESTION DE TEMAS</h1>
    <div class="container">
        <div class="col-md-6 text-center">
            <h4>Temas existentes.</h4>
            <table class="table table-bordered" id="gesion-temas-tabla"></table>
            <div id="paginacion-tabla-temas"></div>
        </div>
        <div class="col-md-6 text-center">
            <form class="form-horizontal">
                <input type="hidden" id="gestionar-tema-id"/>
                <div class="form-group">
                    <label for="gestionar-tema-nombre">Nombre de la categoría:</label>
                    <input type="text" class="form-control" id="gestionar-tema-nombre" 
                           placeholder="Ejemplo: Informatica">
                </div>
                <div class="form-group">
                    <label for="gestionar-tema-costo-minuto">Costo por minuto:</label>
                    <input type="text" class="form-control" id="gestionar-tema-costo-minuto"
                           placeholder="Ejemplo: 15">
                </div>
                <div class="form-group">
                    <label for="gestionar-tema-observaciones">Observaciones:</label>
                    <textarea class="form-control" id="gestionar-tema-observaciones" rows="4" 
                              placeholder="¿Alguna observación?."></textarea>
                </div>
                <div class="form-group">
                    <label for="gestionar-tema-estado">Estado:</label>
                    <select class="form-control" id="gestionar-tema-estado">
                        <option value="0"> ........ </option>
                        <option value="1">  Activo. </option>
                        <option value="2">Desactivo</option>
                    </select>
                </div>
                <div class="form-group"> 
                    <button type="button" class="btn boton-rigth" 
                            id="gestionar-tema-cancela" onclick="limpiaFormTema()">Cancelar</button>
                    <button type="button" class="btn boton-left" 
                            id="gestionar-tema-guardar" onclick="guardarTema()">Guardar</button>
                    <button type="button" class="hidden" 
                            id="gestionar-tema-modificar" onclick="modificaTemas()">Modificar</button>
                </div>
            </form>
        </div>
    </div>
</div>