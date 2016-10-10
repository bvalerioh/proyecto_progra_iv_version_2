/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.bl;

import cr.ac.una.prograiv.proyecto.domain.Chat;
import java.util.List;

/**
 *
 * @author Bryan_2
 */
public class ChatBL extends BaseBL implements IBaseBL<Chat, Integer>{

    public ChatBL() {
        super();
    }

    @Override
    public void save(Chat o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Chat merge(Chat o) {
        return (Chat) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Chat o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Chat findById(Integer o) {
        return (Chat)this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Chat> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
    
}
