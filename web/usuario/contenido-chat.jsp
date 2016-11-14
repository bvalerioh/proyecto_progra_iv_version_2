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
    <section>
        <div class="modal fade" id="modalWaiting" role="dialog">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <a href="#" data-dismiss="modal" aria-hidden="true" class="close">×</a>
                        <h4 id="mesajeResultDirecNeg">¡Solicitando la atención!</h4> 
                    </div>   
                    <br />
                    <div class="alert alert-success hiddenDiv">
                        <img src="images/loading.gif" height="80" width="80" alt="imagen cargando."/>                           
                        <span>.     Esperando por la atención de un usuario experto.</span>
                    </div>
                    <br />
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" onclick="cancelarEsperaChat();" value="Cancelar" />
                    </div>
                </div>
            </div>
        </div>
    </section>
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
            <input type="button" id="btSolicitaChat" onclick="callServer()" class="btn btn-default" value="Solicitar." />
        </div>
    </div>
    <br>
    <div class="container" id="areaChat" >
        <div class="row col-md-6">
            <div class="panel panel-primary">
                <div class="panel-heading" id="accordion">
                    <span class="glyphicon glyphicon-comment"></span> Chat con los expertos
                </div>
                <div class="panel-body">
                    <ul class="chat">
                        <!--
                        <li class="right clearfix">
                            <div class="chat-body clearfix">
                                <div class="header">
                                    <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>15 mins ago</small>
                                    <strong class="pull-right primary-font">Bhaumik Patel</strong>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                                    dolor, quis ullamcorper ligula sodales.
                                </p>
                            </div>
                        </li>-->
                    </ul>
                </div>
                <div class="panel-footer">
                    <div class="input-group">
                        <input id="btn-input" type="text" class="form-control input-sm" placeholder="Escribe tu mensaje aquí..." />
                        <span class="input-group-btn">
                            <button class="btn btn-warning btn-sm" id="btn-chat" onclick="chatEnviar()">
                                Enviar</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 text-center">
            <p>Aquí va la información del experto, el tema, el tiempo y costo.</p>
        </div>
    </div>
    
    
</div>