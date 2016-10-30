/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    mostrarModal("myModal", "Espere por favor..", "Se esta comprobando los datos...");
    //Se envia la información por ajax
    $('#btLoginAceptar').on('click', function (e) {
        //alert("entra");   
        $.ajax({
            url: 'LoginServlet',
            data: {
                accion: "loguearse",
                usuario: $("#usuario").val(),
                contra: $("#txtContrasena").val()
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
                if (data.usuario === "No encontrado" && data.idUsuario === 101) {
                    $("#mensaje").val("Error tu usuario o contraseña son incorrectos.");
                    // mostrarMensaje("alert alert-danger", "Error el usuario no Existe", "¡Ups problemas!");
                }
            },
            type: 'POST'
        });
    });

    $(document).keypress(function (e) {
        if (e.which === 13) {
            $.ajax({
                url: 'LoginServlet',
                data: {
                    accion: "loguearse",
                    usuario: $("#usuario").val(),
                    contra: $("#txtContrasena").val()
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
                    //ocultarModal("myModal");
                    if (data.usuario === "No encontrado" && data.idUsuario === 101) {
                        $("#mensaje").val("Error tu usuario o contraseña son incorrectos.");
                        // mostrarMensaje("alert alert-danger", "Error el usuario no Existe", "¡Ups problemas!");
                    } /* else{             
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
                     }             */
                },
                type: 'POST'
            });
        }
    });
});


