<%-- 
    Document   : chat
    Created on : 15/11/2016, 12:45:30 PM
    Author     : bvale
--%>

<%@page import="javax.swing.JOptionPane"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

    HttpSession sesion = request.getSession(true);
    String nombre = "";
    Integer rol = -1;
    boolean usuarioLogueado = false;

    if (sesion.getAttribute("id") != null) {
        rol = (Integer) sesion.getAttribute("rolusuario");
        nombre = (String) sesion.getAttribute("username");
        usuarioLogueado = true;
    }

%>


<!DOCTYPE html>
<html>
    <!-- Inicio del Head --> 
    <link rel="shortcut icon" href="images/favicon.png" /> 
    <input type="hidden" id="idUsuarioIdentificado" value="${sessionScope.id}" />
    <input type="hidden" id="NombreUsuarioIdentificado" value="${sessionScope.nombre}" />
    
    <%@include file="public/contenido-head.jsp"%>
    <!-- Final del Head --> 
    <!-- Inicio del body -->
    <body onload="obtenerTodosTemasParaChat()">
        <!--[if lt IE 10]>
              <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <!-- ********************************************************** -->
        <!-- Modal del BootsTrap para mostrar mensajes                  -->
        <!-- ********************************************************** -->
        <section>
            <div class="modal fade" id="modalAlert" role="dialog">
                <div class="modal-dialog modal-md">
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
            <div class="modal fade" id="modalEliminar" role="dialog">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header" id="modalEliminarHeader"></div>                    
                        <div class="modal-body" id="modalEliminarMessage"></div>                
                        <div class="modal-footer" id="modalEliminarBotones">                        
                            <a href="#" data-dismiss="modal" aria-hidden="true" class="btn secondary">Cancelar</a>
                            <a href="#" id="btnYesEliminar" class="btn btn-danger btn-ok">Eliminar</a>
                        </div>                   
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Fin modal de bootstrap para mostrar mensajes -->  
        <section>
            <div class="container">
                <input type="button" class="btn btn-danger" onclick="regresar()" value="Regresar." />
            </div>
        </section>
        <section>
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
                                <div class="alert alert-success hiddenDiv">
                                    <img src="images/loading.gif" height="80" width="80" alt="imagen cargando."/>                           
                                    <span>.     Esperando por la atención de un usuario experto.</span>
                                </div>
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
                <div class="container" id="solicitud-tema">
                    <div class="col-md-12 text-center">
                        <label for="select-temas-chat"  class="col-sm-3 control-label" >Tema a solicitar atención: </label>
                        <div class="col-sm-7">  
                            <select class="form-control" id="select-temas-chat">
                                <option value="0"></option>
                            </select>
                        </div>
                        <input type="button" id="btSolicitaChat" onclick="ws.open()" class="btn btn-default" value="Solicitar." />
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
                                <ul class="chat" id="ulChat">
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
                                        <button class="btn btn-warning btn-sm" id="btn-chat" onclick="ws.enviar()">
                                            Enviar</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 text-center">
                        <p>Aquí va la información del experto, el tema, el tiempo y costo.</p>
                        <div class="row">
                            <label for="lbl-Experto"  class="col-sm-4 control-label" >Nombre del experto: </label>
                            <div class="col-sm-7">  
                            <input type="text" class="form-control"  id="lbl-Experto" readonly placeholder="Nombre Usuario Experto"/>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <label for="lbl-Tema"  class="col-sm-4 control-label" >Nombre del Tema: </label>
                             <div class="col-sm-7">  
                            <input type="text" class="form-control"  id="lbl-Tema" readonly placeholder="Nombre del tema"/>
                             </div>
                        </div>
                        <br/>
                        <div class="row">
                            <label for="lbl-Usuario"  class="col-sm-4 control-label" >Nombre del usuario: </label>
                             <div class="col-sm-7">  
                            <input type="text" class="form-control"  id="lbl-Usuario" readonly placeholder="Nombre del usuario"/>
                             </div>
                        </div>
                        <br/>
                        <div class="row">
                            <label for="lbl-Costo"  class="col-sm-4 control-label" >Costo por minuto: </label>
                            <div class="col-sm-4">                              
                                <h4 id="lbl-Costo" readonly >$3.00</h4>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <label for="lbl-Tiempo"  class="col-sm-4 control-label" >Tiempo: </label>
                            <div class="col-sm-8">                              
                                <h4 id="lbl-Tiempo" readonly ></h4>
                            </div>
                        </div>
                        <br/>
                        <div clas="row">
                             <div class="col-sm-12">  
                            <input type="button" class="btn btn-danger" onclick="" value="Finalizar" />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
