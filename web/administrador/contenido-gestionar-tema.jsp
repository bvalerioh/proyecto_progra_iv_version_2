<%-- 
    Document   : contenido-gestionar-tema
    Created on : Oct 17, 2016, 9:27:10 PM
    Author     : ghost
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div id="contenido-gestionar-tema">
    <h1>GESTION DE TEMAS</h1>
    <form class="form-horizontal">
        <br/>
        <div class="form-group">
            <label for="gestionar-tema-id-categoria">Id categoría:</label>
            <select class="form-control" id="gestionar-tema-id-categoria">
                <option>Tema 01</option>
                <option>Tema 02</option>
                <option>Tema 03</option>
                <option>Tema 04</option>
            </select>
            <button type="submit" class="btn boton-left" 
                        id="gestionar-tema-nuevo-id">Nuevo Id</button>
        </div>
        <div class="form-group"> 
                
        </div>
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
        <br />
        <div class="form-group"> 
                <button type="submit" class="btn boton-left" 
                        id="gestionar-tema-guardar">Guardar</button>
        </div>
    </form>
</div>