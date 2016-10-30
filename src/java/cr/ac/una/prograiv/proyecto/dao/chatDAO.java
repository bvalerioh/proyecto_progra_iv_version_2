/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.dao;

import cr.ac.una.prograiv.proyecto.domain.Chat;
import cr.ac.una.prograiv.proyecto.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Bryan_2
 */
public class chatDAO extends HibernateUtil implements IBaseDAO<Chat, Integer>{

    @Override
    public void save(Chat o) {
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
    public Chat merge(Chat o) {
        try{
            iniciaOperacion();
            o = (Chat)getSesion().merge(o);
            getTransac().commit();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Chat o) {
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
    public Chat findById(Integer o) {
        Chat c = null;
        try{
            iniciaOperacion();
            c = (Chat)getSesion().get(Chat.class, o);
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return c;
    }

    @Override
    public List<Chat> findAll() {
        List<Chat> listc;
        try{
            iniciaOperacion();
            listc = getSesion().createQuery("from Chat").list();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return listc;
    }

    @Override
    public Chat findByName(String nombreT) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Chat> findAllById(Chat o) {
        // Esta en duda.
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
