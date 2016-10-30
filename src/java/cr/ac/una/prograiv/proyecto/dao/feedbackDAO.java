/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.dao;

import cr.ac.una.prograiv.proyecto.domain.Feedback;
import cr.ac.una.prograiv.proyecto.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Bryan_2
 */
public class feedbackDAO extends HibernateUtil implements IBaseDAO<Feedback, Integer>{

    @Override
    public void save(Feedback o) {
        try{
            iniciaOperacion();
            getSesion().save(o);
            getTransac().commit();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
    }

    @Override
    public Feedback merge(Feedback o) {
        try{
            iniciaOperacion();
            o = (Feedback)getSesion().merge(o);
            getTransac().commit();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Feedback o) {
        try{
            iniciaOperacion();
            getSesion().delete(o);
            getTransac().commit();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }        
    }

    @Override
    public Feedback findById(Integer o) {
        Feedback fb = null;
        try{
            iniciaOperacion();
            fb = (Feedback)getSesion().get(Feedback.class, o);
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return fb;
    }

    @Override
    public List<Feedback> findAll() {
        List<Feedback> Listfb;
        try{
            iniciaOperacion();
            Listfb = getSesion().createQuery("from Feedback").list();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return Listfb;
    }

    @Override
    public Feedback findByName(String nombreT) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Feedback> findAllById(Feedback o) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    
}
