/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    //Se envia la información por ajax
    $('#btLoginAceptar').on('click', function (e) {
        mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
        myajax();          
    });

    $(document).keypress(function (e) {
        if (e.which === 13) {
            mostrarMensaje("alert alert-info", "Espere por favor, se esta comprobando los datos.", "¡Consultando!");
            myajax();
        }
    });
});


function myajax(){
    $.ajax({
        url: 'LoginServlet',
        data: {
            accion: "loguearse",
            usuario: $("#usuario").val(),
            contra: $("#txtContrasena").val()
        },
        error: function (jqXHR, exception) { //si existe un error en la respuesta del ajax
            ocultarModal("modalAlert");
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
            mostrarMensaje("alert alert-danger", msg, "¡Hubo un error!");
            //$("#mensaje").val(msg);
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            ocultarModal("modalAlert");
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "C~") {
                document.location.href = "index.jsp";
            } else {
                if (tipoRespuesta === "E~") {                     
                    mostrarMensaje("alert alert-danger", respuestaTxt, "¡Error!");
                } else {
                    mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                }
            }
        },
        type: 'POST'
    });
}

function ocultarModal(idDiv){
    $("#"+idDiv).modal("hide");	
}

function mostrarMensaje(classCss, msg, neg) {
    $("#modalAlert").modal;
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