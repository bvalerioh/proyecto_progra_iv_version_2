/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.dao;

import cr.ac.una.prograiv.proyecto.utils.HibernateUtil;
import cr.ac.una.prograiv.proyecto.domain.Gestiontemas;
import java.util.List;
import org.hibernate.HibernateException;
/**
 *
 * @author Bryan_2
 */
public class gestionTemaDAO extends HibernateUtil implements IBaseDAO<Gestiontemas, Integer>{

    @Override
    public void save(Gestiontemas o) {
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
    public Gestiontemas merge(Gestiontemas o) {        
        try{
            iniciaOperacion();
            o = (Gestiontemas)getSesion().merge(o);
            getTransac().commit();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Gestiontemas o) {
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
    public Gestiontemas findById(Integer o) {
        Gestiontemas gt = null;
        try{
            iniciaOperacion();
            gt = (Gestiontemas)getSesion().get(Gestiontemas.class,o);
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return gt;
    }

    @Override
    public List<Gestiontemas> findAll() {
        List<Gestiontemas> listgt;
        try{
            iniciaOperacion();
            listgt = getSesion().createQuery("from Gestiontemas").list();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return listgt;
    }
    
}
