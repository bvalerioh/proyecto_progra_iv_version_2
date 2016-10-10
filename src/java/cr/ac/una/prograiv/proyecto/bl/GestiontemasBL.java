/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bl;

import cr.ac.una.prograiv.proyecto.domain.Gestiontemas;
import java.util.List;

/**
 *
 * @author Bryan_2
 */
public class GestiontemasBL extends BaseBL implements IBaseBL<Gestiontemas, Integer>{

    public GestiontemasBL() {
        super();
    }

    @Override
    public void save(Gestiontemas o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Gestiontemas merge(Gestiontemas o) {
        return (Gestiontemas)this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Gestiontemas o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Gestiontemas findById(Integer o) {
        return (Gestiontemas)this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Gestiontemas> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
