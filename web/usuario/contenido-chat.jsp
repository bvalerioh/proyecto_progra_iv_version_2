<%-- 
    Document   : contenido-chat
    Created on : Oct 17, 2016, 1:37:29 AM
    Author     : ghost
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- Barra de navegacion global. -->
<!-- Fin de la barra de navegacion global --> 
<div id="contenido-chat">
    <h1>Consultar atención por chat</h1>
    <!--
    un option para solicitar el tema del chat..
    un boton
    -->
    <div class="container">
        <div class="col-md-12 text-center">
            <label for="select-temas-chat"  class="col-sm-3 control-label" >Tema a solicitar atención: </label>
            <div class="col-sm-7">  
                <select class="form-control" id="select-temas-chat">
                    <option value="0"></option>
                </select>
            </div>
            <input type="button" id="btSolicitaChat" class="btn btn-default" value="Solicitar." />
        </div>
    </div>
    <br>
    <div class="container" id="areaChat" >
        <div class="row col-md-6">
            <div id="chat">
                <div class="panel panel-primary">
                    <div class="panel-heading" id="accordion">
                        <span class="glyphicon glyphicon-comment"></span> Chat con los expertos
                        <div class="btn-group pull-right">
                            <a type="button" class="btn btn-default btn-xs" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                <span class="glyphicon glyphicon-chevron-down"></span>
                            </a>
                        </div>
                    </div>
                    <div class="panel-collapse collapse" id="collapseOne">
                        <div class="panel-body">
                            <ul class="chat">
                               
                            </ul>
                        </div>
                        <div class="panel-footer">
                            <div class="input-group">
                                <input id="btn-input" type="text" class="form-control input-sm" placeholder="Escribe tu mensaje aquí..." />
                                <span class="input-group-btn">
                                    <button class="btn btn-warning btn-sm" id="btn-chat">
                                        Enviar</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 text-center">
            <p>Aquí va la información del experto, el tema, el tiempo y costo.</p>
        </div>
    </div>
</div>