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
};
// Datepicker contenido-registro  
function registro_usuario() {
    $("#registro-fecha-nacimiento").datepicker();
};
//******************************************************************************
$(document).ready(function () {
    // put all your jQuery goodness in here.
    $("#datos-personales-fecha-nacimiento").datepicker();
    $("#registro-fecha-nacimiento").datepicker();
    // Esta linea se debe mantener sino no cargan las imagenes de slider.
    $("#contenido-principal").load("./public/contenido-inicio.html");

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
