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

$(window).on('beforeunload', function() {
    desconectar();
    mostrarModal("myModal", "Espere por favor..", "Se esta cerrando los procesos...");
    sleep(300);    
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

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
                $("#contenido-wrapper").load("./public/contenido-formulario-login.jsp");
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
                $("#contenido-wrapper").load("./administrador/contenido-gestionar-expertos-por-tema.jsp");
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
            ocultarModal("myModal");
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
//******************************************************************************
// IDENTIFICARSE/LOGIN
function identificarse(){
    mostrarModal("myModal", "Espere por favor..", "Se esta comprobando los datos...");
    //Se envia la información por ajax
    $.ajax({
        url: 'LoginServlet',
        data: {
            accion: "loguearse",
            usuario: $("#usuarioLogin").val(),
            contra: $("#contrasenaLogin").val()
        },
        error: function (jqXHR, exception) { //si existe un error en la respuesta del ajax
            ocultarModal("myModal");
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
            mostrarModal("myModal", "Error en AJAX", msg);
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            ocultarModal("myModal");
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
     mostrarModal("myModal", "Espere por favor..", "Desconectando...");
    $.ajax({
        url: 'LogoutServlet',
        error: function () { //si existe un error en la respuesta del ajax
            ocultarModal("myModal");
            mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function () {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            ocultarModal("myModal");
            var url = 'proyecto-progra-iv-v2/index.jsp';
            window.location.replace(url);
        },
        type: 'POST'      
    });  
    
}
//******************************************************************************
//*********************** PARTE DATOS PERSONALES *******************************
//******************************************************************************

function cargarMisDatos(){
    mostrarModal("myModal", "Espere por favor..", "Cargando datos...");
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
         mostrarMensaje("alert alert-danger", error, "Error!");
    }
}
//******************************************************************************
// MODIFICAR USUARIO
function modificarDatosPersonales(){
    mostrarModal("myModal", "Espere por favor..", "Comprobando datos...");
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
            ocultarModal("myModal");
            mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            ocultarModal("myModal");
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            ocultarModal("myModal");
            if (tipoRespuesta === "C~") {
                limpiarFormDireccion();
                mostrarMensaje("alert alert-success", "Los datos fueron modificados, exitosamente!!!","¡Exito! "+respuestaTxt);              
            } else {
                if (tipoRespuesta === "E~") {                     
                    mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
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
// GESTION TEMAS
function obtenerTemas(){
    limpiarTabla("gesion-temas-tabla");
    mostrarModal("myModal", "Espere por favor..", "Consultando la información en la base de datos");
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "obtenerTodosTemas"
        },
        error: function () { //si existe un error en la respuesta del ajax
            ocultarModal("myModal");
            mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            cargarTablaTemas(data);
        },
        type: 'POST',
        dataType: "json"        
    }); 
}

function guardarTema(){
    limpiarTabla("gesion-temas-tabla");
    mostrarModal("myModal", "Espere por favor..", "Guardando la información en la base de datos");
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
        error: function () { //si existe un error en la respuesta del ajax
            ocultarModal("myModal");
            mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "C~") {
                mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                // Vuelve a conseguir la lista de los temas
                obtenerTemas();
                limpiaFormTema();
            } else {
                if (tipoRespuesta === "E~") {
                    mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                } else {
                    mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                }
            }
        },
        type: 'POST',
        dataType: "json"        
    });
}

function modificaTemas(){
    limpiarTabla("gesion-temas-tabla");
    mostrarModal("myModal", "Espere por favor..", "Modificando la información en la base de datos");
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "modificarTema",
            nombreT: $("#gestionar-tema-nombre").val(),
            costoxT: $("#gestionar-tema-costo-minuto").val(),
            observT: $("#gestionar-tema-observaciones").val(),
            idxTema: $("#gestionar-tema-id").val(),
            estadoT: $("#gestionar-tema-estado").val()
        },
        error: function () { //si existe un error en la respuesta del ajax
            ocultarModal("myModal");
            mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "C~") {
                mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                // Vuelve a conseguir la lista de los temas
                obtenerTemas();
                // limpiar formulario temas
                gestionTemasBotones('0');
                limpiaFormTema();
            } else {
                if (tipoRespuesta === "E~") {
                    mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                } else {
                    mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                }
            }
        },
        type: 'POST',
        dataType: "json"        
    }); 
}

function eliminaTema(idTema){
    mostrarModal("myModal", "Espere por favor..", "Eliminando la información en la base de datos");
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "eliminarTema",
            idxTema: idTema
        },
        error: function () { //si existe un error en la respuesta del ajax
            ocultarModal("myModal");
            mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "E~") {
                cambiarMensajeModal("myModal", "Resultado acción", respuestaTxt);
            } else {
                setTimeout(obtenerTemas, 2000);// hace una pausa y consulta la información de la base de datos
            }
        },
        type: 'POST',
        dataType: "json"        
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
                dibujarFila(data[i]);
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
}

function llenarFormTema(temaID){    
    mostrarModal("myModal", "Espere por favor..", "Consultando la información en la base de datos");
    $.ajax({
        url: 'AdminServlet',
        data: {
            accion: "obtenerTemaXid",
            idxTema: temaID
        },
        error: function () { //si existe un error en la respuesta del ajax
            ocultarModal("myModal");
            mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
        },
        success: function (data) {
            // si el usuario esta logueado Guardamos el usuario en un sessionStorage.
            $("#gestionar-tema-id").val(data.idxTema);
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
//******************************************************************************
    // EXPERTOS
function obtenerExpertos(){
    
}
function modificaExpertos(){
    
}
function eliminaExpertos(){
    
}
//******************************************************************************
//******************************* UTILIDADES ***********************************
//******************************************************************************
function limpiarTabla(idTabla) {
    var tabla = document.getElementById(idTabla);
    if (tabla.rows.length > 1) {
        while (tabla.rows.length > 1)
            tabla.deleteRow(1);
    }
}