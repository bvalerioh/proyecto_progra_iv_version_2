package cr.ac.una.prograiv.proyecto.domain;
// Generated 12/10/2016 05:10:01 PM by Hibernate Tools 4.3.1


import java.util.Date;

/**
 * Historialconsultas generated by hbm2java
 */
public class Historialconsultas  implements java.io.Serializable {


     private int idhistorialConsultas;
     private Date fechaHistorial;
     private Integer fkUsuario;
     private Integer fkGestionExpertos;
     private Integer fkGestionTemas;
     private Integer fkFeedBack;
     private Integer fkHistorialFacturasXservicio;
     private Integer fkChat;

    public Historialconsultas() {
    }

	
    public Historialconsultas(int idhistorialConsultas) {
        this.idhistorialConsultas = idhistorialConsultas;
    }
    public Historialconsultas(int idhistorialConsultas, Date fechaHistorial, Integer fkUsuario, Integer fkGestionExpertos, Integer fkGestionTemas, Integer fkFeedBack, Integer fkHistorialFacturasXservicio, Integer fkChat) {
       this.idhistorialConsultas = idhistorialConsultas;
       this.fechaHistorial = fechaHistorial;
       this.fkUsuario = fkUsuario;
       this.fkGestionExpertos = fkGestionExpertos;
       this.fkGestionTemas = fkGestionTemas;
       this.fkFeedBack = fkFeedBack;
       this.fkHistorialFacturasXservicio = fkHistorialFacturasXservicio;
       this.fkChat = fkChat;
    }
   
    public int getIdhistorialConsultas() {
        return this.idhistorialConsultas;
    }
    
    public void setIdhistorialConsultas(int idhistorialConsultas) {
        this.idhistorialConsultas = idhistorialConsultas;
    }
    public Date getFechaHistorial() {
        return this.fechaHistorial;
    }
    
    public void setFechaHistorial(Date fechaHistorial) {
        this.fechaHistorial = fechaHistorial;
    }
    public Integer getFkUsuario() {
        return this.fkUsuario;
    }
    
    public void setFkUsuario(Integer fkUsuario) {
        this.fkUsuario = fkUsuario;
    }
    public Integer getFkGestionExpertos() {
        return this.fkGestionExpertos;
    }
    
    public void setFkGestionExpertos(Integer fkGestionExpertos) {
        this.fkGestionExpertos = fkGestionExpertos;
    }
    public Integer getFkGestionTemas() {
        return this.fkGestionTemas;
    }
    
    public void setFkGestionTemas(Integer fkGestionTemas) {
        this.fkGestionTemas = fkGestionTemas;
    }
    public Integer getFkFeedBack() {
        return this.fkFeedBack;
    }
    
    public void setFkFeedBack(Integer fkFeedBack) {
        this.fkFeedBack = fkFeedBack;
    }
    public Integer getFkHistorialFacturasXservicio() {
        return this.fkHistorialFacturasXservicio;
    }
    
    public void setFkHistorialFacturasXservicio(Integer fkHistorialFacturasXservicio) {
        this.fkHistorialFacturasXservicio = fkHistorialFacturasXservicio;
    }
    public Integer getFkChat() {
        return this.fkChat;
    }
    
    public void setFkChat(Integer fkChat) {
        this.fkChat = fkChat;
    }




}


