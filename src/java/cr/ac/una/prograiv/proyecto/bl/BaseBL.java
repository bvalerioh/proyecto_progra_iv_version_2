/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bl;


import cr.ac.una.prograiv.proyecto.dao.IBaseDAO;
import cr.ac.una.prograiv.proyecto.dao.*;
import java.util.LinkedHashMap;

/**
 *
 * @author Bryan_2
 */
public class BaseBL {
    private final LinkedHashMap<String, IBaseDAO> daos;

    public BaseBL() {
        daos = new LinkedHashMap();
        daos.put("cr.ac.una.prograiv.origraiv.domain.Usuario", new usuarioDAO());
        daos.put("cr.ac.una.prograiv.origraiv.domain.Chat", new chatDAO());
        daos.put("cr.ac.una.prograiv.origraiv.domain.Feedback", new feedbackDAO());
        daos.put("cr.ac.una.prograiv.origraiv.domain.Gestiontemas", new gestionTemaDAO());
        daos.put("cr.ac.una.prograiv.origraiv.domain.Historialconsultas", new historialConsultasDAO());
        daos.put("cr.ac.una.prograiv.origraiv.domain.Historialfacturasxservicio", new historialFacturasXservicioDAO());
        
    }
    
    public IBaseDAO getDao(String className){
        return daos.get(className);
    }
}