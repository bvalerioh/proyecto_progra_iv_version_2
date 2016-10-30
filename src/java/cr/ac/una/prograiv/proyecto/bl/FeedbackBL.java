/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bl;

import cr.ac.una.prograiv.proyecto.domain.Feedback;
import java.util.List;

/**
 *
 * @author Bryan_2
 */
public class FeedbackBL extends BaseBL implements IBaseBL<Feedback, Integer>{

    public FeedbackBL() {
        super();
    }

    @Override
    public void save(Feedback o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Feedback merge(Feedback o) {
        return (Feedback)this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Feedback o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Feedback findById(Integer o) {
        return (Feedback)this.getDao(Feedback.class.getName()).findById(o);
    }

    @Override
    public List<Feedback> findAll(String className) {
        return this.getDao(className).findAll();
    }
    // metodos personalizados
    @Override
    public Feedback findByName(String className, String name) {
        // no se ocupa 
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Feedback> findAllById(String className, Feedback o) {
        return this.getDao(className).findAllById(o);
    }
    
}
