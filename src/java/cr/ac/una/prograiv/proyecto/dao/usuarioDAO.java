/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.dao;
import javax.persistence.Entity;
import cr.ac.una.prograiv.proyecto.domain.Usuario;
import cr.ac.una.prograiv.proyecto.utils.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;

/**
 *
 * @author Bryan_2
 */
public class usuarioDAO extends HibernateUtil implements IBaseDAO<Usuario, Integer>{

    @Override
    public void save(Usuario o) {
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
    public Usuario merge(Usuario o) {
        try{
            iniciaOperacion();
            o = (Usuario)getSesion().merge(o);
            getTransac().commit();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return o;
    }

    @Override
    public void delete(Usuario o) {
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
    public Usuario findById(Integer o) {
        Usuario usu = null;
        try{
            iniciaOperacion();
            usu = (Usuario)getSesion().get(Usuario.class, o);
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return usu;
    }

    @Override
    public List<Usuario> findAll() {
        List<Usuario> listusu;
        try{
            iniciaOperacion();
            listusu = getSesion().createQuery("from usuario").list();
        }catch(HibernateException he){
            throw he;
        }finally{
            getSesion().close();
        }
        return listusu;
    }
    
}
