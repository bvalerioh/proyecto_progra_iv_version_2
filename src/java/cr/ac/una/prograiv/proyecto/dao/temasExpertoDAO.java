/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.dao;

import cr.ac.una.prograiv.proyecto.domain.Temasexperto;
import cr.ac.una.prograiv.proyecto.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Bryan_2
 */
public class temasExpertoDAO  extends HibernateUtil implements IBaseDAO<Temasexperto, Integer> {

    @Override
    public void save(Temasexperto o) {
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
    public Temasexperto merge(Temasexperto o) {
        try{
            iniciaOperacion();
            o = (Temasexperto)getSesion().merge(o);
            getTransac().commit();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Temasexperto o) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Temasexperto findById(Integer o) {
        Temasexperto te = null;
        try{
            iniciaOperacion();
            te = (Temasexperto)getSesion().get(Temasexperto.class, o);
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return te;
    }

    @Override
    public List<Temasexperto> findAll() {
        List<Temasexperto> list;
        try{
            iniciaOperacion();
            list = getSesion().createQuery("from Temasexperto").list();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return list;
    }

    @Override
    public List<Temasexperto> findAllById(Temasexperto o) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Temasexperto findByName(String nombreT) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
