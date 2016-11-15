/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.controller;

import java.io.IOException;
import java.io.Reader;
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
public class MsDecoder implements Decoder.Text<cMessage> {

	public cMessage decode(Reader reader) throws DecodeException, IOException{
            
		cMessage cMs = new cMessage();
                
		try(JsonReader jreader = Json.createReader(reader)){
                    JsonObject json = jreader.readObject();
                    cMs.setSender(json.getString("sender"));
                    cMs.setMessage(json.getString("message"));
                }
		return cMs;
	}
        
        @Override
        public void init(EndpointConfig config) {
            System.out.println("init");
        }
        
        @Override
        public void destroy() {
            System.out.println("destroy");
        }

	@Override
	public boolean willDecode(final String s) {
		return true;
	}

        @Override
        public cMessage decode(String s) throws DecodeException {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }
    
}
