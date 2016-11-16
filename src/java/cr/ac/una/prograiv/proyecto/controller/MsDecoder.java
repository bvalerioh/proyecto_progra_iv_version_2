/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.controller;

import java.io.IOException;
import java.io.Reader;
import java.util.logging.Logger;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.websocket.DecodeException;
import javax.websocket.Decoder;
import javax.websocket.EndpointConfig;

/**
 *
 * @author bvale
 */
public class MsDecoder implements Decoder.TextStream<cMessage> {
    private final Logger log = Logger.getLogger(getClass().getName());
    @Override
    public cMessage decode(Reader reader) throws DecodeException, IOException{

            cMessage cMs = new cMessage();

            try(JsonReader jreader = Json.createReader(reader)){
                JsonObject json = jreader.readObject();
                cMs.setSender(json.getString("sender"));
                cMs.setMessage(json.getString("message"));
            }
            log.info("Se envia un mensaje Decoder:");
            return cMs;
    }

    @Override
    public void init(EndpointConfig config) {
        System.out.println("init Decode");
    }

    @Override
    public void destroy() {
        System.out.println("destroy Decode");
    }
}
