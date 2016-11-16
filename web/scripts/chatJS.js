
(function(window, document, JSON){
    'use strict';
    var url = 'ws://'+window.location.host+'/proyecto-progra-iv-v2/chat',
        ws = new WebSocket(url),
        boton = document.getElementById('btn-chat');/*,
        mensajes = document.getElementById(''),
        boton = document.getElementById(''),
        nombre = $("#NombreUsuarioIdentificado").val(),
        mensaje = $("#btn-input").val();*/
        
    ws.onopen = onOpen;
    ws.onclose = onClose;
    ws.onmessage = onMessage;
    /*
    boton.addEventListener("click", function(){
        enviar();
    });
    
    boton.addEventListener("keypress",function(){
        enviar();
    });*/
    $("#btn-chat").button();
    $("#btn-chat").click(function() {
        enviar();
    });
    $(document).keypress(function (e) {
        if (e.which === 13) {
            enviar();
        }
    });
    function onOpen(){
        console.log('Conectado...');
    }
    function onClose(){
        console.log('Desconectado...');
    }
    function enviar(){
        var msg = {
            nombre: $("#NombreUsuarioIdentificado").val(),//nombre.value,
            mensaje: $("#btn-input").val()//mensaje.value
        };
        // variable del TimeStamp.
        var d = new Date(); 
        //var ul = document.getElementById("ulChat");
        var Msg1 = "<li class='right clearfix'> <div class='chat-body clearfix'>" +
                "<div class='header'><small class='text-muted'>"+
                "<span class='glyphicon glyphicon-time'></span>"+ d.toUTCString() +
                "</small><strong class='ull-right primary-font'>" +msg.nombre +
                "</strong></div><p>"+ msg.mensaje +
                "</p></div></li>";

        $("#ulChat").append(Msg1);
        $("#btn-input").val("");

        // enviamos el Mensaje
        ws.send(JSON.stringify(msg));
    }
    
    function onMessage(evt){
        // parseamos el objeto
        var obj = JSON.parse(evt.data);
        // variable del TimeStamp.
        var d = new Date();
        // para meterlo en el UL
        var msg2 = "<li class='left clearfix'> <div class='chat-body clearfix'>" +
                "<div class='header'><small class='text-muted'>"+
                "<span class='glyphicon glyphicon-time'></span>"+ d.toUTCString() +
                "</small><strong class='primary-font'>"+ obj.nombre +
                "</strong></div><p>"+ obj.mesaje +
                "</p></div></li>";
        $("#ulChat").append(msg2);
    }
    
})(window, document, JSON);
