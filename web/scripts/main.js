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
// Funcion para cargar contenido segun la pagina.
function cargarContenido(idContenido) {
    /* CONTENIDO PUBLICO */
    if (idContenido === '1') {
        $("#contenido-principal").load("./public/contenido-inicio.html");
        carrucelDinamico();
    }
    if (idContenido === '2') {
        $("#contenido-principal").load("./public/contenido-instruccional.html");
    }
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
//******************************************************************************
// Datepicker contenido-mis-datos-personales
function mis_datos_personales() {
    $("#datos-personales-fecha-nacimiento").datepicker();
}
;
// Datepicker contenido-registro  
function registro_usuario() {
    $("#registro-fecha-nacimiento").datepicker();
}
;
//******************************************************************************
$(document).ready(function () {
    // put all your jQuery goodness in here.
    $("#datos-personales-fecha-nacimiento").datepicker();
    $("#registro-fecha-nacimiento").datepicker();
    // Esta linea se debe mantener sino no cargan las imagenes de slider.
    //$("#contenido-principal").load("./public/contenido-inicio.html");
    carrucelDinamico();
    try {
        $('#input-1').rating({displayOnly: true, step: 0.5});
        $('#input-2').rating({displayOnly: true, step: 0.5});
        $('#input-3').rating({displayOnly: true, step: 0.5});
        $('#input-4').rating({displayOnly: true, step: 0.5});
        $('#input-5').rating({displayOnly: true, step: 0.5});
    } catch (error) {

    }
});

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
        if(i > 0){
            content += "<div class='item'>";
        }
        content += "<img src=\"" + imag + "\" alt=\"" + alt_ + "\">";
        /*LA PARTE DE FEEDBACK*/
        content += "<div class='carousel-caption'>";
        /*LA PARTE DE LAS ESTRELLAS*/
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
    $("#input-1").rating();
    $("#input-2").rating();
    $("#input-3").rating();
    $("#input-4").rating();
    $("#input-5").rating();
}
/* <div class="item active">
      <img src="img_chania.jpg" alt="Chania">
      <div class="carousel-caption">
        <h3>Chania</h3>
        <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
      </div>
    </div>
*/

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