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
import org.hibernate.Query;
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
            String hql = "update Gestiontemas set estado = :estadoT where idTemas = :idxTema";
            Query q = getSesion().createQuery(hql);
            q.setInteger("estadoT", o.getEstado());
            q.setInteger("idxTema", o.getIdTemas());
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
            listgt = getSesion().createQuery("from Gestiontemas where estado = 1").list();
        }catch(HibernateException he){
            System.out.print(he.getMessage());
            throw he;
        }finally{
            getSesion().close();
        }
        return listgt;
    }

    @Override
    public Gestiontemas findByName(String nombreT) {
        Gestiontemas gt = null;
        try{
            iniciaOperacion();            
            String hql = "from Gestiontemas where nombreTema = :nombreT";
            Query q = getSesion().createQuery(hql);
            q.setString("nombreT", nombreT);
            gt = (Gestiontemas)q.uniqueResult();
        }catch(HibernateException he){
            System.out.print(he.getMessage());
            gt = null;
        }finally{
            getSesion().close();            
        }
        return gt;        
    }

    @Override
    public List<Gestiontemas> findAllById(Gestiontemas o) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
