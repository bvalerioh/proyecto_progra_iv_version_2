/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bl;

import cr.ac.una.prograiv.proyecto.domain.Temasexperto;
import java.util.List;

/**
 *
 * @author Bryan_2
 */
public class TemasexpertoBL  extends BaseBL implements IBaseBL<Temasexperto, Integer>{
    public TemasexpertoBL() {
        super();
    }
    
    @Override
    public void save(Temasexperto o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Temasexperto merge(Temasexperto o) {
        return (Temasexperto) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Temasexperto o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Temasexperto findById(Integer o) {
        return (Temasexperto)this.getDao(Temasexperto.class.getName()).findById(o);
    }

    @Override
    public List<Temasexperto> findAll(String className) {
        return this.getDao(className).findAll();
    }

    @Override
    public Temasexperto findByName(String className, String name) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Temasexperto> findAllById(String className, Temasexperto o) {
        return this.getDao(className).findAllById(o);
    }    
}
