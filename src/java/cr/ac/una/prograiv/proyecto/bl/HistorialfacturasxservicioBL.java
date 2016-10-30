/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bl;

import cr.ac.una.prograiv.proyecto.domain.Historialfacturasxservicio;
import java.util.List;

/**
 *
 * @author Bryan_2
 */
public class HistorialfacturasxservicioBL extends BaseBL implements IBaseBL<Historialfacturasxservicio, Integer>{

    public HistorialfacturasxservicioBL() {
        super();
    }

    @Override
    public void save(Historialfacturasxservicio o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Historialfacturasxservicio merge(Historialfacturasxservicio o) {
        return (Historialfacturasxservicio)this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Historialfacturasxservicio o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Historialfacturasxservicio findById(Integer o) {
        return (Historialfacturasxservicio)this.getDao(Historialfacturasxservicio.class.getName()).findById(o);
    }

    @Override
    public List<Historialfacturasxservicio> findAll(String className) {
        return this.getDao(className).findAll();
    }

    @Override
    public Historialfacturasxservicio findByName(String className, String name) {
        // no se ocupa
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Historialfacturasxservicio> findAllById(String className, Historialfacturasxservicio o) {
        return this.getDao(className).findAllById(o);
    }
    
}
