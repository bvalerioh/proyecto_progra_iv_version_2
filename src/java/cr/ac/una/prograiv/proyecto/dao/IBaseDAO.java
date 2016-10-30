/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.dao;

import cr.ac.una.prograiv.proyecto.domain.Gestiontemas;
import java.util.List;

/**
 *
 * @author Bryan_2
 */
public interface IBaseDAO <T,K> {
    public abstract void save (T o);
    public abstract T merge (T o);
    public abstract void delete (T o);
    public abstract T findById (K o);
    public abstract List<T> findAll();
    // metodos personalizados.
    public abstract List<T> findAllById(T o);
    public abstract T findByName(String nombreT);
}