/* 
 <!--
 ============================================================================
 Universidad Nacional de Costa Rica.
 Curso           : Programacion IV.
 Profesor        : Christian Garita.
 Estudiantes     : Dennis Bonilla Ramirez | Bryan Valerio Herrera.           
 Proyecto # 1     
 ============================================================================
 -->
 */
$(document).ready(function () {
    // put all your jQuery goodness in here.
    $("#datos-personales-fecha-nacimiento").datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $("#registro-fecha-nacimiento").datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    // Esta linea se debe mantener sino no cargan las imagenes de slider.
    //$("#contenido-wrapper").load("./public/contenido-inicio.html");
    carrucelDinamico();
    verificaUsuarioLogueado();
    $("#btModificarDatosPersonales").button();
    $("#btModificarDatosPersonales").on("click", function(){
        modificarDatosPersonales();
    }); 
    $("#btLogin").button();
});
//******************************************************************************
// Funcion para cargar contenido segun la pagina.
//******************************************************************************
// Funcion para cargar contenido segun la pagina.
function cargarContenido(idContenido) {
    /* CONTENIDO PUBLICO */
    if (idContenido === '1') {      
        $("#contenido-wrapper").load("./public/contenido-inicio.jsp",
                        function(responseText, statusText, xhr){
                            if(statusText == "success")
                               carrucelDinamico();
                        if(statusText == "error")
                            alert("An error occurred: " + xhr.status + " - " + xhr.statusText);
                    });  
    } else {
        if (idContenido === '2') {
            $("#contenido-wrapper").load("./public/contenido-instruccional.jsp");
        } else {
            if (idContenido === '3') {
                $("#contenido-wrapper").load("./public/contenido-nuestra-historia.jsp");
            }
            if (idContenido === '4') {
                $("#contenido-wrapper").load("./public/contenido-contactenos.jsp");
            }
            /* USUARIO REGISTRADO */
            if (idContenido === '5') {
                $("#contenido-wrapper").load("./usuario/contenido-chat.jsp");
            }
            if (idContenido === '6') {
                $("#contenido-wrapper").load("./usuario/contenido-mis-datos-personales.jsp"
                                        , function(responseText, statusText, xhr){
                    if(statusText == "success")
                        cargarMisDatos();
                    if(statusText == "error")
                        alert("An error occurred: " + xhr.status + " - " + xhr.statusText);
                }); 
            }
            if (idContenido === '7') {
                $("#contenido-wrapper").load("./usuario/contenido-historial-consultas.jsp");
            }
            if (idContenido === '8') {
                $("#contenido-wrapper").load("./usuario/contenido-consulta-facturas.jsp");
            }
            if (idContenido === '9') {
                document.location.href = "login.jsp";
                // $("#contenido-wrapper").load("./public/contenido-formulario-login.jsp");
            }
            if (idContenido === '10') {
                $("#contenido-wrapper").load("./public/contenido-registrarse.jsp");
            }
            /* USUARIO EXPERTO */
            if (idContenido === '11') {
                $("#contenido-wrapper").load("./usuario/contenido-usuarios-en-espera.jsp");
            }
            if (idContenido === '12') {
                $("#contenido-wrapper").load("./usuario/contenido-categorias.jsp");
            }
            /* ADMINISTRADOR */
            if (idContenido === '13') {
                $("#contenido-wrapper").load("./administrador/contenido-facturacion.jsp");
            }
            if (idContenido === '14') {
                $("#contenido-wrapper").load("./administrador/contenido-reportes.jsp");
            }
            if (idContenido === '15') {
                $("#contenido-wrapper").load("./administrador/contenido-gestionar-usuario.jsp");
            }
            if (idContenido === '16') {
                $("#contenido-wrapper").load("./administrador/contenido-gestionar-tema.jsp", function(responseText, statusText, xhr){
                    if(statusText === "success")
                        obtenerTemas();
                    if(statusText === "error")
                        alert("An error occurred: " + xhr.status + " - " + xhr.statusText);
                }); 
            }
            if (idContenido === '17') {
                $("#contenido-wrapper").load("./administrador/contenido-gestionar-expertos-por-tema.jsp", function(responseText, statusText, xhr){
                    if(statusText === "success")
                        obtenerExpertos();
                        obtenerTodosTemas();
                    if(statusText === "error")
                        alert("An error occurred: " + xhr.status + " - " + xhr.statusText);
                }); 
            }            
            if (idContenido === '18') {
                //logout
                desconectar();
            }
        }
    }
}

function toggleChevron(e) {
    $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}

$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);

//******************************************************************************
function carrucelDinamico() {
    // VA FUNCION CARGAR FEEDBACKS
    var text = '{ "items" : [' +
            '{ "stars":"5" , "username":"Juan Perez" , "comentario":"Gracias por la respuesta." , "imagen":"./images/001.png" , "alt":"_"},' +
            '{ "stars":"5" , "username":"Maria Lopez" , "comentario":"Gracias por la respuesta." , "imagen":"./images/002.png" , "alt":"_"},' +
            '{ "stars":"5" , "username":"Ana Maria" , "comentario":"Gracias por la respuesta." , "imagen":"./images/003.png" , "alt":"_"},' +
            '{ "stars":"5" , "username":"Pedro Aguilar" , "comentario":"Gracias por la respuesta." , "imagen":"./images/004.png" , "alt":"_"},' +
            '{ "stars":"5" , "username":"Bryan Valerio" , "comentario":"Gracias por excelente respuesta." , "imagen":"./images/005.png" , "alt":"_"}]}';

    json = JSON.parse(text);
    var content = "";
    content += "<div class='carousel-inner slider-text' role='listbox'>";
    for (var i in json["items"]) {
        var star = json["items"][i].stars;
        var user = json["items"][i].username;
        var come = json["items"][i].comentario;
        var imag = json["items"][i].imagen;
        var alt_ = json["items"][i].alt;
        if (i == 0) {
            content += "<div class='item active'>";
        }
        if (i > 0) {
            content += "<div class='item'>";
        }
        content += "<img src=\"" + imag + "\" alt=\"" + alt_ + "\">";
        /*LA PARTE DE FEEDBACK*/
        content += "<div class='carousel-caption'>";
        /*LA PARTE DE LAS ESTRELLAS*/
        //    <input id="input-3" name="input-3" value="4" class="rating-loading">
        content += "<input id='input-" + i + "' name='input-" + i + "' value=" + star + " class='rating-loading'>";

        content += "<h3>" + user + "</h3>";
        content += "<P>" + come + "</P>";

        content += "</div>";
        content += "</div>";
    }
    content += "</div>";
    content += "<ol class='carousel-indicators'>";
    content += "<li data-target='#componente-carrucel' data-slide-to='0' class='active'></li>";
    content += "<li data-target='#componente-carrucel' data-slide-to='1'></li>";
    content += "<li data-target='#componente-carrucel' data-slide-to='2'></li>";
    content += "<li data-target='#componente-carrucel' data-slide-to='3'></li>";
    content += "<li data-target='#componente-carrucel' data-slide-to='4'></li>";
    content += "</ol>";

    $("#carrucelAutomatico").html(content);
    $("#input-0").rating({displayOnly: true, step: 0.5});
    $("#input-1").rating({displayOnly: true, step: 0.5});
    $('#input-2').rating({displayOnly: true, step: 0.5});
    $("#input-3").rating({displayOnly: true, step: 0.5});
    $("#input-4").rating({displayOnly: true, step: 0.5});
}
//******************************************************************************
//****************************** PARTE DEL LOGIN *******************************
//******************************************************************************
// COMPRUEBA QUE EL USUARIO ESTA IDENTIFICADO
function verificaUsuarioLogueado(){
    // datos tomados desde la funcion identificarse
    var usuario = $("#IdUsuario").val();
    var tipo =  $("#tipoUsua").val();
    if(usuario === ""){
    //** se pueden tomar desde el sessionStorage
        usuario = sessionStorage.getItem("idUsuario");
        tipo = sessionStorage.getItem("tipoUsuario");
    }
    if(usuario){        
        if(tipo === "0"){
            // usuario corriente
            $("#parteUsuarioIdentificado").removeClass();
            $("#parteUsuarioIdentificado").addClass("dropdown");
        }else{
            if(tipo === "2"){
                // Usuario Administrador
                $("#parteAdministrador").removeClass();
                $("#parteAdministrador").addClass("dropdown");
            }else{
                // Usuario Experto. falta de separar.
                $("#parteUsuarioExperto").removeClass();
                $("#parteUsuarioExperto").addClass("dropdown");
            }
        }
        limpiarFormLogin();
    }else{ // usuario no esta identificado o se acaba de desloguear
        $("#parteUsuarioIdentificado").removeClass();
        $("#parteAdministrador").removeClass();
        $("#parteUsuarioExperto").removeClass();                
        $("#parteUsuarioIdentificado").addClass("hidden");        
        $("#parteAdministrador").addClass("hidden");
        $("#parteUsuarioExperto").addClass("hidden");
    }     
}
/******************************************************************************/
// BUSCAR USUARIO POR ID
function getUsuarioById(id){
    //Se envia la información por ajax
    $.ajax({
        url: 'usuarioServlet',
        data: {
            accion: "buscarUsuarioID",
            idUsuario: id
        },
        error: function () { //si existe un error en la respuesta del ajax
            //ocultarModal("myModal");
            mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            sessionStorage.setItem("idUsuario", data.idUsuario);
            sessionStorage.setItem("usuario", data.usuario);
            sessionStorage.setItem("nombre", data.nombre);
            sessionStorage.setItem("apellidos", data.apellidos);
            sessionStorage.setItem("email", data.email);
            sessionStorage.setItem("Nacimiento", data.feNacimiento);
            sessionStorage.setItem("direccion", data.direccion);
            sessionStorage.setItem("telTrabajo", data.telTrabajo);
            sessionStorage.setItem("telCelular", data.telCelular);
            sessionStorage.setItem("observaciones", data.observaciones);
            sessionStorage.setItem("tipoUsuario", data.tipoUsuario);            
            sessionStorage.setItem("estado", data.estado);
        },
        type: 'POST',
        dataType: "json"        
    });    
}
//******************************************************************************
// IDENTIFICARSE/LOGIN
function identificarse(){
    //Se envia la información por ajax
    $.ajax({
        url: 'LoginServlet',
        data: {
            accion: "loguearse",
            usuario: $("#usuarioLogin").val(),
            contra: $("#contrasenaLogin").val()
        },
        error: function (jqXHR, exception) { //si existe un error en la respuesta del ajax
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
             mostrarMensaje("alert alert-danger", msg, "¡Ups problemas!");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
         
            if (data.usuario === "No encontrado" && data.idUsuario === 101) {                     
                    mostrarMensaje("alert alert-danger", "Error el usuario no Existe", "¡Ups problemas!");
            }else{                
                // en caso de que el explorador no soporte sessionStorage
                document.getElementById("IdUsuario").value = data.idUsuario;
                document.getElementById("tipoUsua").value = data.tipoUsuario;
                // si soporota el SessionStorage
                sessionStorage.setItem("idUsuario", data.idUsuario);
                sessionStorage.setItem("usuario", data.usuario);
                sessionStorage.setItem("nombre", data.nombre);
                sessionStorage.setItem("apellidos", data.apellidos);
                sessionStorage.setItem("email", data.email);
                sessionStorage.setItem("Nacimiento", data.feNacimiento);
                sessionStorage.setItem("direccion", data.direccion);
                sessionStorage.setItem("telTrabajo", data.telTrabajo);
                sessionStorage.setItem("telCelular", data.telCelular);
                sessionStorage.setItem("observaciones", data.observaciones);
                sessionStorage.setItem("tipoUsuario", data.tipoUsuario);            
                sessionStorage.setItem("estado", data.estado); 
                verificaUsuarioLogueado();
            }             
        },
        type: 'POST',
        dataType: "json"
    });
}

function limpiarFormLogin(){
    $("#navbar-logout").removeClass();
    $("#navbar-logout").addClass("menu-left");
    $("#navbar-login").removeClass();
    $("#navbar-login").addClass("hidden");   
    var lblBienvenida = document.getElementById('lblBienvenida');
    lblBienvenida.innerHTML = "Bienvenido(a) : " +sessionStorage.getItem("nombre")+" "+sessionStorage.getItem("apellidos");
}

function desconectar(){
    sessionStorage.clear();
    /* $("#navbar-logout").removeClass();
    $("#navbar-logout").addClass("hidden");
    
    document.getElementById("IdUsuario").value = "";
    document.getElementById("tipoUsua").value = "";
    $("#navbar-login").removeClass();
    $("#navbar-login").addClass("menu-left");
    document.getElementById('lblBienvenida').innerHTML = "";*/
    //verificaUsuarioLogueado();
    mostrarMensaje("alert alert-info", "Espere por favor....", "¡Desconectando!");
    $.ajax({
        url: 'LogoutServlet',
        error: function (jqXHR, exception) { //si existe un error en la respuesta del ajax
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
             mostrarMensaje("alert alert-danger", msg, "¡Ups problemas!");
        },
        success: function () {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            ocultarModalClase();
            var url = '/proyecto-progra-iv-v2/index.jsp';
            window.location.replace(url);
        },
        type: 'POST'      
    });  
    
}
//******************************************************************************
//*********************** PARTE DATOS PERSONALES *******************************
//******************************************************************************

function cargarMisDatos(){
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    try{
        $("#datos-personales-usuario").val(sessionStorage.getItem("usuario"));
        $("#datos-personales-nombre").val(sessionStorage.getItem("nombre"));
        $("#datos-personales-apellidos").val(sessionStorage.getItem("apellidos"));
        $("#datos-personales-correo-electronico").val(sessionStorage.getItem("email"));
        $("#datos-personales-fecha-nacimiento").val(sessionStorage.getItem("Nacimiento"));
        $("#datos-personales-telefono-trabajo").val(sessionStorage.getItem("telTrabajo"));
        $("#datos-personales-celular").val(sessionStorage.getItem("telCelular"));
        $("#datos-personales-direccion").val(sessionStorage.getItem("direccion"));
       // ya que no lo carga desde el menu.
        $("#datos-personales-fecha-nacimiento").datetimepicker({
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });
    }catch(error){
        //parte donde los cargamos si el explorador no soporta el sessionStorage
         cambiarMensajeModalClase("alert alert-danger", error, "Error!");
    }
}
//******************************************************************************
// MODIFICAR USUARIO
function modificarDatosPersonales(){
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    $.ajax({
        url: 'UsuarioServlet',
        data: {
            accion: "modificarDatosPersonales",
            idUsuario: sessionStorage.getItem("idUsuario"),
            tipoUsuario: sessionStorage.getItem("tipoUsuario"),
            contrasena:$("#datos-personales-contrasena").val(),
            usuario:$("#datos-personales-usuario").val(),
            nombre:$("#datos-personales-nombre").val(),
            apellidos:$("#datos-personales-apellidos").val(),
            email:$("#datos-personales-correo-electronico").val(),
            fechaNacimiento: $("#datos-personales-fecha-nacimiento").val(),
            direccion:$("#datos-personales-direccion").val(),
            telTrabajo: $("#datos-personales-telefono-trabajo").val(),
            telCelular: $("#datos-personales-celular").val()
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModalClase("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            
            if (tipoRespuesta === "C~") {
                limpiarFormDireccion();
                cambiarMensajeModalClase("alert alert-success", "Los datos fueron modificados, exitosamente!!!","¡Exito! "+respuestaTxt);              
            } else {
                if (tipoRespuesta === "E~") {                     
                    cambiarMensajeModalClase("alert alert-danger", respuestaTxt, "Error!");
                } else {
                    mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                }
            }
        },
        type: 'POST',
        dataType: "json"        
    });  
}

//******************************************************************************
//*********************** PARTE ADMINISTRADOR **********************************
//******************************************************************************
//
//
//******************************************************************************
//***************************** GESTION TEMAS **********************************
//******************************************************************************
// 
function obtenerTemas(){
    limpiarTabla("gesion-temas-tabla");
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "obtenerTodosTemas"
        },
        error: function () { //si existe un error en la respuesta del ajax            
            cambiarMensajeModalClase("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            ocultarModalClase();
            cargarTablaTemas(data);
        },
        type: 'POST',
        dataType: "json"        
    }); 
}

function guardarTema(){
    limpiarTabla("gesion-temas-tabla");
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "guardarTema",
            nombreT: $("#gestionar-tema-nombre").val(),
            costoxT: $("#gestionar-tema-costo-minuto").val(),
            observT: $("#gestionar-tema-observaciones").val(),
            idxTema: '0',
            estadoT: $("#gestionar-tema-estado").val()
        },
        error: function (jqXHR, exception) { //si existe un error en la respuesta del ajax
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status === 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status === 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            cambiarMensajeModalClase("alert alert-danger", msg, "Error!");
        },
        success: function (data) {
          
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "C~") {
                cambiarMensajeModalClase("alert alert-success", respuestaTxt, "Correcto!");
                // Vuelve a conseguir la lista de los temas
                obtenerTemas();
                limpiaFormTema();
            } else {
          
                if (tipoRespuesta === "E~") {
                    cambiarMensajeModalClase("alert alert-danger", respuestaTxt, "Error!");
                } else {
                    cambiarMensajeModalClase("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                }
            }
        },
        type: 'POST'       
    });
}

function modificaTemas(){
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "modificarTema",
            nombreT: $("#gestionar-tema-nombre").val(),
            costoxT: $("#gestionar-tema-costo-minuto").val(),
            observT: $("#gestionar-tema-observaciones").val(),
            idxTema: sessionStorage.getItem("idxTema"),
            estadoT: $("#gestionar-tema-estado").val()
        },
        error: function (jqXHR, exception) { //si existe un error en la respuesta del ajax
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            cambiarMensajeModalClase("alert alert-danger", msg, "Error!");
        },
        success: function (data) {
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "C~") {
                cambiarMensajeModalClase("alert alert-success", respuestaTxt, "Correcto!");
                // Vuelve a conseguir la lista de los temas
                limpiarTabla("gesion-temas-tabla");
                obtenerTemas();
                // limpiar formulario temas
                gestionTemasBotones('0');
                limpiaFormTema();
            } else {
                if (tipoRespuesta === "E~") {
                    cambiarMensajeModalClase("alert alert-danger", respuestaTxt, "Error!");
                } else {
                    cambiarMensajeModalClase("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                }
            }
        },
        type: 'POST'
    }); 
}

function eliminaTema(idTema){
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "eliminarTema",
            idxTema: idTema
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModalClase("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "E~") {
                cambiarMensajeModal("myModal", "Resultado acción", respuestaTxt);
            } else {
                cambiarMensajeModalClase("alert alert-success", respuestaTxt, "!Accion correcta!");
                setTimeout(obtenerTemas, 2000);// hace una pausa y consulta la información de la base de datos
            }
        },
        type: 'POST',
        dataType: "text"        
    }); 
}

function cargarTablaTemas(datos){    
    $("#paginacion-tabla-temas").pagination({
        dataSource: datos,
        pageSize: 10,
        autoHidePrevious: false,
        autoHideNext: false,
        callback: function (data, pagination) {
            $("#gesion-temas-tabla").html("");
            //muestra el enzabezado de la tabla
            var head = $("<thead />");
            var row = $("<tr />");
            head.append(row);
            $("#gesion-temas-tabla").append(head);
            row.append($("<th><b>NOMBRE</b></th>"));
            row.append($("<th><b>COSTO POR MINUTO</b></th>"));
            row.append($("<th><b>ESTADO</b></th>"));
            row.append($("<th><b>ACCIÓN</th>"));
            //carga la tabla con el json devuelto
            for (var i = 0; i < data.length; i++) {
                dibujarFilaTemas(data[i]);
            }
        }
    });
}

function dibujarFilaTemas(rowData) {
    var row = $("<tr />");
    $("#gesion-temas-tabla").append(row);
    row.append($("<td>" + rowData.nombreTema + "</td>"));
    row.append($("<td>" + rowData.costoXminuto + "</td>"));
    row.append($("<td>" + rowData.estado + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="llenarFormTema(' + rowData.idTemas + ');">' +
            '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
            '</button>' +
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminaTema(' + rowData.idTemas + ');">' +
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
            '</button></td>'));
}

function limpiaFormTema(){
    $("#gestionar-tema-nombre").val("");
    $("#gestionar-tema-costo-minuto").val("");
    $("#gestionar-tema-observaciones").val("");
    $("#gestionar-tema-estado").val("0");
    gestionTemasBotones('0');
}

function llenarFormTema(temaID){    
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "obtenerTemaXid",
            idxTema: temaID
        },
        error:function (jqXHR, exception) { //si existe un error en la respuesta del ajax
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            cambiarMensajeModalClase("alert alert-danger", msg, "Error!");
        },
        success: function (data) {
            ocultarModalClase();
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            sessionStorage.setItem("idxTema", data.idTemas);
            //$("#gestionar-tema-id").val(data.idTemas);
            $("#gestionar-tema-nombre").val(data.nombreTema);
            $("#gestionar-tema-costo-minuto").val(data.costoXminuto);
            $("#gestionar-tema-observaciones").val(data.observaciones);
            $("#gestionar-tema-estado").val(data.estado);
            gestionTemasBotones('1');
        },
        type: 'POST',
        dataType: "json"        
    }); 
    
}

function gestionTemasBotones(val){
    if(val === '1'){
        $("#gestionar-tema-guardar").removeClass();
        $("#gestionar-tema-guardar").addClass("hidden");
        $("#gestionar-tema-modificar").removeClass();      
        $("#gestionar-tema-modificar").addClass("btn boton-left");
    }else{
        $("#gestionar-tema-guardar").removeClass();
        $("#gestionar-tema-guardar").addClass("btn boton-left");
        $("#gestionar-tema-modificar").removeClass();      
        $("#gestionar-tema-modificar").addClass("hidden");
    }        
}

//******************************************************************************
//************************ GESTION EXPERTOS X TEMAS*****************************
//******************************************************************************
// 
function obtenerExpertos(){
    try{ 
        limpiarTabla("gesion-temas-tabla");
    }catch(error){}
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "obtenerExpertos"
        },
        error: function (jqXHR, exception) { //si existe un error en la respuesta del ajax
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status === 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status === 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            cambiarMensajeModalClase("alert alert-danger", msg, "Error!");
        },
        success: function (data) {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            ocultarModalClase();
            cargarTablaExpertoXtemas(data);
        },
        type: 'POST',
        dataType: "json"        
    }); 
}

function guardarExpXtema(){
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    var tema = $("#gestionar-experto-categoria option:selected").text();
    var promise =  $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "asignarTemaExperto",
            idUsuario: $("#id-usuario-experto").val(),
            idTema: $("#gestionar-experto-categoria").val(),
            temaNombre: tema
        },
        
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModalClase("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "E~") {
                cambiarMensajeModalClase("alert alert-danger", respuestaTxt, "Resultado acción" );
            } else {                
                limpiarTabla("gesion-expertosMisTemas-tabla");    
                $("#paginacion-expertosMisTemas-tabla").empty(); 
                
                cambiarMensajeModalClase("alert alert-success", respuestaTxt, "!Accion correcta!");
            }
        },
        
        type: 'POST'       
    }); 
    promise.then(function(){
        var id = $("#id-usuario-experto").val();
        obtenerMisTemas(id);
    });
}

function cargarTablaExpertoXtemas(datos){    
    
    $("#paginacion-expertosTema-tabla").pagination({
        dataSource: datos,
        pageSize: 10,
        autoHidePrevious: false,
        autoHideNext: false,
        callback: function (data, pagination) {
            $("#gesion-expertosTema-tabla").html("");
            //muestra el enzabezado de la tabla
            var head = $("<thead />");
            var row = $("<tr />");
            head.append(row);
            $("#gesion-expertosTema-tabla").append(head);
            row.append($("<th><b>NOMBRE</b></th>"));
            row.append($("<th><b>APELLIDOS</b></th>"));
            row.append($("<th><b>ACCION</b></th>"));
            //carga la tabla con el json devuelto
            for (var i = 0; i < data.length; i++) {
                dibujarFilaExpertoXtemas(data[i]);
            }
        }
    });
}

function dibujarFilaExpertoXtemas(rowData) {
    var row = $("<tr />");
    $("#gesion-expertosTema-tabla").append(row);
    row.append($("<td>" + rowData.nombre + "</td>"));
    row.append($("<td>" + rowData.apellidos + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="llenarFormExpertoXtema(' + rowData.idUsuario + ');">' +
            '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
            '</button>'));
}

function llenarFormExpertoXtema(Idusuario){           
    obtenerUsuarioExperto(Idusuario);
}

function obtenerUsuarioExperto(Idusuario){
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    $.ajax({
        url: 'UsuarioServlet',
        data: {
            accion: "usuarioXid",
            idPersona: Idusuario
        },
        error: function (jqXHR, exception) { //si existe un error en la respuesta del ajax
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            cambiarMensajeModalClase("alert alert-danger", msg, "Error!");
        },
        success: function (data) {
                         
            $("#id-usuario-experto").val(data.idUsuario);
            $("#usuario-experto-nombre").val(data.nombre+" "+data.apellidos);
            obtenerMisTemas(data.idUsuario);
        },
        type: 'POST',
        dataType: "json"        
    }); 
}

function obtenerMisTemas(Idusuario){
    // consultando temas usuario
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "obtenerMisTemas",
            idTemaexperto: Idusuario
        },
        error: function (jqXHR, exception) { //si existe un error en la respuesta del ajax
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status === 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status === 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            cambiarMensajeModalClase("alert alert-danger", msg, "Error!");
        },
        success: function (data) {
            if(data){
                limpiarTabla("gesion-expertosMisTemas-tabla");    
                $("#paginacion-expertosMisTemas-tabla").empty();
                llenarTablaMisTemas(data);
                ocultarModalClase();
            } else {
                cambiarMensajeModalClase("alert alert-danger", "Hubo un error cargando mis temas.", "Resultado acción" );
            }    
        },
        type: 'POST',
        dataType: 'JSON'
    }); 
}

function llenarTablaMisTemas(datos){
    $("#paginacion-expertosMisTemas-tabla").pagination({
        dataSource: datos,
        pageSize: 10,
        autoHidePrevious: false,
        autoHideNext: false,
        callback: function (data, pagination) {
            $("#gesion-expertosMisTemas-tabla").html("");
            //muestra el enzabezado de la tabla
            var head = $("<thead />");
            var row = $("<tr />");
            head.append(row);
            $("#gesion-expertosMisTemas-tabla").append(head);
            row.append($("<th><b>NOMBRE TEMA</b></th>"));
            row.append($("<th><b>ACCION</b></th>"));
            //carga la tabla con el json devuelto
            for (var i = 0; i < data.length; i++) {
                dibujarFilaExpertoMistemas(data[i]);
            }
        }
    });
}

function dibujarFilaExpertoMistemas(rowData) {
    var row = $("<tr />");
    $("#gesion-expertosMisTemas-tabla").append(row);
    row.append($("<td>" + rowData.temaNombre + "</td>"));
    row.append($(
            '<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align"\n\
             onclick="eliminaTemaAexperto('+ rowData.idTemasExperto+ ');">' +
            '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td>'));
}

function eliminaTemaAexperto(id){
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    var promise =  $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "eliminarTemaExperto",
            idTemasExperto: id
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModalClase("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "E~") {
                cambiarMensajeModalClase("alert alert-danger", respuestaTxt, "¡Error!");
            } else {
                
                limpiarTabla("gesion-expertosMisTemas-tabla");    
                $("#paginacion-expertosMisTemas-tabla").empty();  
                cambiarMensajeModalClase("alert alert-success", respuestaTxt, "!Accion correcta!");
                ocultarModalClase();
            }
        },
        type: 'POST'       
    }); 
    promise.then(function(){
        var id = $("#id-usuario-experto").val();
        obtenerMisTemas(id);
    });
}

function limpiaFormExpertoXtema(){
    // limpia todo formulario de expertos por temas.
    $("#usuario-experto").val("");
    $("#usuario-experto-nombre").val("");
    $('#gestionar-experto-categoria').children('option:not(:first)').remove();
    limpiarTabla("gesion-expertosMisTemas-tabla");    
    $("#paginacion-expertosMisTemas-tabla").empty();
}

function obtenerTodosTemas(){
    try{ 
        limpiarTabla("gesion-temas-tabla");
    }catch(error){}
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "obtenerTodosTemas"
        },
        error: function () { //si existe un error en la respuesta del ajax
            mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            llenarSelectTemas(data);
        },
        type: 'POST',
        dataType: "json"        
    });  
}

function llenarSelectTemas(data){
    //'option:not(:first)'
    $('#gestionar-experto-categoria').children().remove();
    for(var i = 0; i < data.length; i ++){
        var tema = data[i];
        $('#gestionar-experto-categoria')
         .append($("<option></option>")
         .attr("value",tema.idTemas)
         .text(tema.nombreTema));
    }/*
    $.each(data, function(value) {
     $('#gestionar-experto-categoria')
         .append($("<option></option>")
         .attr("value",value.IdTemas)
         .text(value.NombreTema));
    });*/
}
function filtroExpertosTema(){    
    filtrarTabla("expXtem-filtro-usuario", "gesion-expertosTema-tabla");
}
function filtroTemas(){    
    filtrarTabla("filtro-temas", "gesion-temas-tabla");
}
function filtroUsuarios(){    
    filtrarTabla("filtro-Usuarios", "gesion-usuarios-tabla");
}
//******************************************************************************
//******************************* UTILIDADES ***********************************
//******************************************************************************
function limpiarTabla(idTabla) {
    try{
        var tabla = document.getElementById(idTabla);
        if (tabla.rows.length > 1) {
            while (tabla.rows.length > 1)
                tabla.deleteRow(1);
        }
    }catch(error){
        error.print();
    }
}




$(window).on('beforeunload', function() {
    //desconectar();
    //("myModal", "Espere por favor..", "Se esta cerrando los procesos...");
    mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
    sleep(300);    
    ocultarModalClase();
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function llamaModalEliminar(Metodo) {
    $("#modalEliminar").modal();
    $('#modalEliminarHeader').empty();
    $("#modalEliminarHeader").append("<a href='#' data-dismiss='modal' aria-hidden='true' class='close'>×</a>"+
                        "<h4 class='modal-title'>Confirmación borrado.</h4>");
    $('#modalEliminarMessage').empty();
    $("#modalEliminarMessage").append("<h4>Esta seguro de lo que va a eliminar, es posible de que no pueda recuperar la información.</h4>");
               
    $('#modalEliminarBotones').empty();
    $("#modalEliminarBotones").append(
            "<a href='#' data-dismiss='modal' aria-hidden='true' class='btn secondary'>Cancelar</a>"+
            '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="'+ Metodo + ';">' +
            '<span aria-hidden="true">Eliminar</span></button>');
    
            
};

function mostrarMensaje(classCss, msg, neg) {
    $("#modalAlert").modal("show");
    //se le eliminan los estilos al mensaje
    $("#mesajeResultDirec").removeClass();

    //se setean los estilos
    $("#mesajeResultDirec").addClass(classCss);

    //se muestra la capa del mensaje con los parametros del metodo
    $("#mesajeResultDirec").fadeIn("slow");
    $("#mesajeResultDirecNeg").html(neg);
    $("#AlertDirecMesaje").html(msg);
}
function cambiarMensajeModalClase(classCss, mensaje, titulo){
    $("#mesajeResultDirecNeg").html(titulo);
    $("#AlertDirecMesaje").html(mensaje);
    $("#mesajeResultDirec").removeClass();
    //se setean los estilos
    $("#mesajeResultDirec").addClass(classCss);
}
function ocultarModalClase(){
    $("#modalAlert").modal("hide");	
}

// Resibe como parametro el id del input y el de la tabla
function filtrarTabla(idDiv, table){
    var tabla, tr, td, i, filtro, input;
    // idDiv es el id del input
    input = document.getElementById(idDiv);
    filtro = input.value.toUpperCase();
   // filter = $("#"+idDiv).val();
    // conseguirmos el id de la tabla
    tabla = document.getElementById(table);
    tr = tabla.getElementsByTagName("tr");
    // Aplicamos el filtro a toda la tabla
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filtro) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        } 
    }
}
