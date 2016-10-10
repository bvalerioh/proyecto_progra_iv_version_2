/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bl;

import cr.ac.una.prograiv.proyecto.domain.Historialconsultas;
import java.util.List;

/**
 *
 * @author Bryan_2
 */
public class HistorialconsultasBL extends BaseBL implements IBaseBL<Historialconsultas, Integer>{

    public HistorialconsultasBL() {
        super();
    }

    @Override
    public void save(Historialconsultas o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Historialconsultas merge(Historialconsultas o) {
        return (Historialconsultas)this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Historialconsultas o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Historialconsultas findById(Integer o) {
        return (Historialconsultas)this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Historialconsultas> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
