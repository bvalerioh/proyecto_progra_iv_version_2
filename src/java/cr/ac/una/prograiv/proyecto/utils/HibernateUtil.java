/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.utils;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

/**
 * Hibernate Utility class with a convenient method to get Session Factory
 * object.
 *
 * @author Bryan_2
 */
public class HibernateUtil {

    private static final SessionFactory sessionFactory;
    
    static {
        try {
            // Create the SessionFactory from standard (hibernate.cfg.xml) 
            // config file.
            sessionFactory = new AnnotationConfiguration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            // Log the exception. 
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }
    
    private Session session;
    private Transaction transac;
    //**************************************************************************    
    //                     creado para esta practica                          //
    //**************************************************************************
    public void iniciaOperacion() throws HibernateException{
        session = getSessionFactory().openSession();
        transac = session.beginTransaction();
    }
    
    public void manejaExcepcion(HibernateException he)throws HibernateException{
        transac.rollback();
        throw new HibernateException("Se genero un error con la base de datos: " +he.getMessage());
    }
    
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public Session getSesion() {
        return session;
    }

    public void setSesion(Session session) {
        this.session = session;
    }

    public Transaction getTransac() {
        return transac;
    }

    public void setTransac(Transaction transac) {
        this.transac = transac;
    }
}
