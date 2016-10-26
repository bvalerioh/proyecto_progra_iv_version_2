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
import org.hibernate.Query;

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
            String hql = "update Usuario set estado = :estadoT where idUsuario = :idUsuario";
            Query q = getSesion().createQuery(hql);
            q.setInteger("estadoT", o.getEstado());
            q.setInteger("idUsuario", o.getIdUsuario());
            int modifications=q.executeUpdate();
            getTransac().commit();
        }catch(HibernateException he){
            System.out.print(he.getMessage());
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
            listusu = getSesion().createQuery("from Usuario where estado = 1").list();
        }catch(HibernateException he){
            System.out.print(he.getMessage());
            throw he;
        }finally{
            getSesion().close();
        }
        return listusu;
    }

    @Override
    public Usuario findByName(String nombreT) {
        Usuario usu = null;
        try{
            iniciaOperacion();            
            String hql = "from Usuario where user = :nombreT";
            Query q = getSesion().createQuery(hql);
            q.setString("nombreT", nombreT);
            usu = (Usuario)q.uniqueResult();
        }catch(HibernateException he){
            System.out.print(he.getMessage());
            usu = null;
        }finally{
            getSesion().close();
        }
        return usu;
    }

    @Override
    public List<Usuario> findAllById(Usuario o) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    public List<Usuario> findAllExpert(){
        List<Usuario> listusu;
        try{
            iniciaOperacion();
            listusu = getSesion().createQuery("from Usuario where estado = 1 and tipoUsuario = 1").list();
        }catch(HibernateException he){
            System.out.print(he.getMessage());
            throw he;
        }finally{
            getSesion().close();
        }
        return listusu;
    }
    
}
