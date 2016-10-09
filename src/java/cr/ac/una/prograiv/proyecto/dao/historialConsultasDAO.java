/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.dao;

import cr.ac.una.prograiv.proyecto.utils.HibernateUtil;
import cr.ac.una.prograiv.proyecto.domain.Historialconsultas;
import java.util.List;
import org.hibernate.HibernateException;
/**
 *
 * @author Bryan_2
 */
public class historialConsultasDAO extends HibernateUtil implements IBaseDAO<Historialconsultas, Integer>{

    @Override
    public void save(Historialconsultas o) {
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
    public Historialconsultas merge(Historialconsultas o) {
        try{
            iniciaOperacion();
            o = (Historialconsultas)getSesion().merge(o);
            getTransac().commit();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Historialconsultas o) {
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
    public Historialconsultas findById(Integer o) {
        Historialconsultas hc = null;
        try{
            iniciaOperacion();
            hc = (Historialconsultas)getSesion().get(Historialconsultas.class, o);
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return hc;
    }

    @Override
    public List<Historialconsultas> findAll() {
        List<Historialconsultas> hc;
        try{
            iniciaOperacion();           // de la tabla en MySQL
            hc = getSesion().createQuery("from HistorialConsultas").list();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return hc;
    }    
}
