/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.test;

import cr.ac.una.prograiv.proyecto.bl.*;
import cr.ac.una.prograiv.proyecto.domain.*;
import java.util.Date;

/**
 *
 * @author Bryan_2
 */
public class Pruebas {
     public static void main(String arg[]){
         
     UsuarioBL usubl = new UsuarioBL();
     
     Usuario usu1 = new Usuario(1000, "usuMai", "Mai", "Tokiha", "maito@gmail.com", new Date(),
                         "En la casa de bryan", "22636333","88541122", "usu", "ninguna", 0, 1);     
     usubl.save(usu1);
     
     Usuario usu2 = new Usuario(1001, "usuNina", "Nina", "Wong", "ninawo@gmail.com", new Date(),
                         "En la casa de bryan", "22636333","88541122", "usu", "ninguna", 1, 1);     
     usubl.save(usu2);
     
     Usuario usu3 = new Usuario(1002, "usuNatsuki", "Natsuki", "Kruger", "Natto@gmail.com", new Date(),
                         "En la casa de bryan", "22636333","88541122", "usu", "ninguna", 2, 1);     
     usubl.save(usu3);
     
     Usuario usu4 = new Usuario(1003, "pedro1", "Pedro", "Avila", "pto@gmail.com", new Date(),
                         "En la casa de bryan", "22636333","88541122", "usu", "ninguna", 1, 0);     
     usubl.save(usu4);
     
     Usuario usu5 = new Usuario(1004, "uMarit", "Marito", "Fallas", "marito@gmail.com", new Date(),
                         "En la casa de bryan", "22636333","88541122", "usu", "ninguna", 2, 0);     
     usubl.save(usu5);
     
     GestiontemasBL gtBL = new GestiontemasBL();
     Gestiontemas gt1 = new Gestiontemas(100, "Internet", 1, "Un dolar por minuto", 1);
     gtBL.save(gt1);
     
     Gestiontemas gt2 = new Gestiontemas(101, "Redes", 1, "Un dolar por minuto", 1);
     gtBL.save(gt2);
     
     Gestiontemas gt3 = new Gestiontemas(102, "Windows", 1, "Un dolar por minuto", 1);
     gtBL.save(gt3);
     
     Gestiontemas gt4 = new Gestiontemas(103, "Linux", 1, "Un dolar por minuto", 1);
     gtBL.save(gt4);
     
     FeedbackBL fbBL = new FeedbackBL();
     Feedback fb1 = new Feedback(201, "Bryan", 2, "Dos dolares por minuto", 1, 5);
     fbBL.save(fb1);
     
     Feedback fb2 = new Feedback(202, "Bryan", 2, "Dos dolares por minuto", 1, 4);
     fbBL.save(fb2);
     
     Feedback fb3 = new Feedback(203, "Bryan", 2, "Dos dolares por minuto", 1, 3);
     fbBL.save(fb3);
     
     Feedback fb4 = new Feedback(204, "Bryan", 2, "Dos dolares por minuto", 1, 4);
     fbBL.save(fb4);
     
     Feedback fb5 = new Feedback(205, "Bryan", 2, "Dos dolares por minuto", 1, 5);
     fbBL.save(fb5);
     
     }     
}
