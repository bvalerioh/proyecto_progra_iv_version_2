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
    $("#datos-personales-fecha-nacimiento").datepicker();
    $("#registro-fecha-nacimiento").datepicker();
    // Esta linea se debe mantener sino no cargan las imagenes de slider.
    //$("#contenido-principal").load("./public/contenido-inicio.html");
    carrucelDinamico();
    verificaUsuarioLogueado();
});
/*
$("#contenido-inicio-2").onload ready(function() {
        carrucelDinamico();
});*/
//******************************************************************************
// Funcion para cargar contenido segun la pagina.
function cargarContenido(idContenido) {
    /* CONTENIDO PUBLICO */
    if (idContenido === '1') {      
        $("#contenido-principal").load("./public/contenido-inicio-2.html");        
        carrucelDinamico();
    } else {
        if (idContenido === '2') {
            $("#contenido-principal").load("./public/contenido-instruccional.html");
        } else {
            if (idContenido === '3') {
                $("#contenido-principal").load("./public/contenido-nuestra-historia.html");
            }
            if (idContenido === '4') {
                $("#contenido-principal").load("./public/contenido-contactenos.html");
            }
            /* USUARIO REGISTRADO */
            if (idContenido === '5') {
                $("#contenido-principal").load("./usuario/contenido-chat.html");
            }
            if (idContenido === '6') {
                $("#contenido-principal").load("./usuario/contenido-mis-datos-personales.html");
            }
            if (idContenido === '7') {
                $("#contenido-principal").load("./usuario/contenido-historial-consultas.html");
            }
            if (idContenido === '8') {
                $("#contenido-principal").load("./usuario/contenido-consulta-facturas.html");
            }
            if (idContenido === '9') {
                $("#contenido-principal").load("./usuario/contenido-loguearse.html");
            }
            if (idContenido === '10') {
                $("#contenido-principal").load("./usuario/contenido-registrarse.html");
            }
            /* USUARIO EXPERTO */
            if (idContenido === '11') {
                $("#contenido-principal").load("./usuario/contenido-usuarios-en-espera.html");
            }
            if (idContenido === '12') {
                $("#contenido-principal").load("./usuario/contenido-categorias.html");
            }
            /* ADMINISTRADOR */
            if (idContenido === '13') {
                $("#contenido-principal").load("./administrador/contenido-facturacion.html");
            }
            if (idContenido === '14') {
                $("#contenido-principal").load("./administrador/contenido-reportes.html");
            }
            if (idContenido === '15') {
                $("#contenido-principal").load("./administrador/contenido-gestionar-usuario.html");
            }
            if (idContenido === '16') {
                $("#contenido-principal").load("./administrador/contenido-gestionar-tema.html");
            }
            if (idContenido === '17') {
                $("#contenido-principal").load("./administrador/contenido-gestionar-expertos-por-tema.html");
            }
        }
    }
}
//******************************************************************************
// Datepicker contenido-mis-datos-personales
function mis_datos_personales() {
    $("#datos-personales-fecha-nacimiento").datepicker();
}

// Datepicker contenido-registro  
function registro_usuario() {
    $("#registro-fecha-nacimiento").datepicker();
}
//******************************************************************************

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
//*********************** CARGAR JSON A UNA TABLA ******************************
//******************************************************************************
/*
 function llenarTabla(){    
 var text = '{ "principalesAcciones" : [' +
 '{ "minuto":"10" , "accion":"Remate a marco" },' +
 '{ "minuto":"23" , "accion":"gol de Juan Perez " },' +
 '{ "minuto":"78" , "accion":"gol de Adrian Arroyo" } ]}';
 json   = JSON.parse(text);
 var html = "<table id='t-principales-acciones'>";
 html+= "<tr>";
 html+= "<th>Minuto</td>";
 html+= "<th>Acción</td>";
 html+= "<tr>";
 for(var i=0;i<json.principalesAcciones.length;i++){
 html+= "<tr>";
 html+= "<td>"+json.principalesAcciones[i].minuto+"</td>";
 html+= "<td>"+json.principalesAcciones[i].accion+"</td>";
 html+= "</tr>";
 }
 html += "</table>";
 $("#tabla_dinamica").html(html);
 }
 */

//******************************************************************************
//***********************EJEMPLO DEL CAROUCEL DESDE JSON************************
//******************************************************************************
/*$(document).ready(function() {
 <div class="carousel-inner" role="listbox">
 
 <div class="item active">
 <img src="img_chania.jpg" alt="Chania" width="460" height="345">
 <div class="carousel-caption">
 <h3>Chania</h3>
 <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
 </div>
 </div>
 
 <div class="item">
 <img src="img_chania2.jpg" alt="Chania" width="460" height="345">
 <div class="carousel-caption">
 <h3>Chania</h3>
 <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
 </div>
 </div>
 
 <div class="item">
 <img src="img_flower.jpg" alt="Flower" width="460" height="345">
 <div class="carousel-caption">
 <h3>Flowers</h3>
 <p>Beatiful flowers in Kolymbari, Crete.</p>
 </div>
 </div>
 
 <div class="item">
 <img src="img_flower2.jpg" alt="Flower" width="460" height="345">
 <div class="carousel-caption">
 <h3>Flowers</h3>
 <p>Beatiful flowers in Kolymbari, Crete.</p>
 </div>
 </div>
 
 </div>
 
 });*/


//******************************************************************************
//****************************** PARTE DEL LOGIN *******************************
//******************************************************************************

function verificaUsuarioLogueado(){
    // datos tomados desde la funcion identificarse
    var usuario = $("#IdUsuario").val();
    var tipo =  $("#tipoUsua").val();
    //** se pueden tomar desde el sessionStorage
    //    var nombre = sessionStorage.getItem("Nombre");
    //    var apellido = sessionStorage.getItem("Apellido");
    if(usuario != null){        
        if(tipo == 0){
            // usuario corriente
            $("#parteUsuarioIdentificado").removeClass();
            $("#parteUsuarioIdentificado").addClass("dropdown");
        }else{
            if(tipo == 2){
                // Usuario Administrador
                $("#parteAdministrador").removeClass();
                $("#parteAdministrador").addClass("dropdown");
            }else{
                // Usuario Experto. falta de separar.
            }
        }
    }else{ // usuario no esta identificado o se acaba de desloguear
        $("#parteUsuarioIdentificado").removeClass();
        $("#parteAdministrador").removeClass();
        $("#parteUsuarioIdentificado").addClass("oculta");        
        $("#parteAdministrador").addClass("oculta");
    }     
}

/******************************************************************************/
// Buscar usuario por ID
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
// EJEMPLO DEL SESSION STORAGE
//******************************************************************************
/*$(document).ready(function(){  
   $('#boton-guardar').click(function(){      
        //Captura de datos escrito en los inputs
        var nom = document.getElementById("nombretxt").value;
        var apel = document.getElementById("apellidotxt").value;
        //Guardando los datos en el LocalStorage
        sessionStorage.setItem("Nombre", nom);
        sessionStorage.setItem("Apellido", apel);
        //Limpiando los campos o inputs
        document.getElementById("nombretxt").value = "";
        document.getElementById("apellidotxt").value = "";
   });  
});

//Funcion Cargar y Mostrar datos
$(document).ready(function(){  
   $('#boton-cargar').click(function(){                      
        //Obtener datos almacenados
        var nombre = sessionStorage.getItem("Nombre");
        var apellido = sessionStorage.getItem("Apellido");
        //Mostrar datos almacenados    
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("apellido").innerHTML = apellido;
   });  
});
*/
//******************************************************************************
// identificarse
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
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModal", "Resultado acción", "Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            //var json = eval('(' + data + ')');
            ocultarModal("myModal");
            // en caso de que el explorador no soporte sessionStorage
            $("#IdUsuario").val = data.idUsuario;
            $("#tipoUsua").val = data.tipoUsuario;
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
        },
        type: 'POST',
        dataType: "json"
    });
}