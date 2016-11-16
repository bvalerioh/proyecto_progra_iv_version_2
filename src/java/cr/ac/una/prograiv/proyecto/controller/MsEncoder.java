/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.controller;

import java.io.IOException;
import java.io.Writer;
import java.util.logging.Logger;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonWriter;
import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

/**
 *
 * @author bvale
 */
public class MsEncoder  implements Encoder.TextStream<cMessage> {
    private final Logger log = Logger.getLogger(getClass().getName());
    @Override
    public void encode(cMessage chatMessage, Writer writer) throws EncodeException, IOException{
        JsonObject json = Json.createObjectBuilder()
            .add("message", chatMessage.getMessage())
            .add("sender", chatMessage.getSender()).build();

        try(JsonWriter jw = Json.createWriter(writer)){
           jw.writeObject(json);
        }
        log.info("Creando mensaje encoder:");
    }
    @Override
    public void init(EndpointConfig config) {
        System.out.println("init encoder");
    }
    @Override
    public void destroy() {
        System.out.println("destroy encoder");
    }
}
