/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.dao;

import cr.ac.una.prograiv.proyecto.utils.HibernateUtil;
import cr.ac.una.prograiv.proyecto.domain.Historialfacturasxservicio;
import java.util.List;
import org.hibernate.HibernateException;
/**
 *
 * @author Bryan_2
 */
public class historialFacturasXservicioDAO extends HibernateUtil implements IBaseDAO<Historialfacturasxservicio, Integer>{

    @Override
    public void save(Historialfacturasxservicio o) {
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
    public Historialfacturasxservicio merge(Historialfacturasxservicio o) {
        try{
         iniciaOperacion();
         o = (Historialfacturasxservicio)getSesion().merge(o);
         getTransac().commit();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Historialfacturasxservicio o) {
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
    public Historialfacturasxservicio findById(Integer id) {
        Historialfacturasxservicio hfs = null;
        try{
            iniciaOperacion();
            hfs = (Historialfacturasxservicio)getSesion().get(Historialfacturasxservicio.class, id);
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return hfs;
    }

    @Override
    public List<Historialfacturasxservicio> findAll() {
        List<Historialfacturasxservicio> listhfs;
        try{
            iniciaOperacion();
            listhfs = getSesion().createQuery("from historialFacturasXservicio").list();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return listhfs;
    }
    
}
