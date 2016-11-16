/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import javax.websocket.OnMessage;
import javax.websocket.server.ServerEndpoint;
import javax.websocket.EncodeException;
import javax.websocket.OnClose;
import javax.websocket.OnOpen;
import javax.websocket.Session;
/**
 *
 * @author Bryan_2
 */
@ServerEndpoint(value="/chat", encoders = {MsEncoder.class}, decoders = {MsDecoder.class})
public class ChatWebSocket {
    private final Logger log = Logger.getLogger(getClass().getName());
    private static final List<Session> conectados = new ArrayList<>();
    
    @OnOpen
    public void onOpen(Session sesion) {
        conectados.add(sesion);
            log.info("session openend: " + sesion);
    }
    
    @OnMessage
    public void Message(cMessage cMs) throws IOException, EncodeException{
        for (Session s : conectados) {
            s.getBasicRemote().sendObject(cMs);
        }
    }
    
    @OnClose
    public void salir(Session sesion){
        log.info("session removida: " + sesion);
        conectados.remove(sesion);
    }    
}


