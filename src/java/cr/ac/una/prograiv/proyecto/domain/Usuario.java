package cr.ac.una.prograiv.proyecto.domain;
// Generated 01/11/2016 05:39:29 PM by Hibernate Tools 4.3.1


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

/**
 * Usuario generated by hbm2java
 */
public class Usuario  implements java.io.Serializable {

    
     private int idUsuario;
     private String usuario;
     private String nombre;
     private String apellidos;
     private String email;
     private Date feNacimiento;
     private String direccion;
     private String telTrabajo;
     private String telCelular;
     private String contrasena;
     private String observaciones;
     private Integer tipoUsuario;
     private Integer estado;

    public Usuario() {
    }

	
    public Usuario(int idUsuario, String usuario) {
        this.idUsuario = idUsuario;
        this.usuario = usuario;
    }
    public Usuario(int idUsuario, String usuario, String nombre, String apellidos, String email, Date feNacimiento, String direccion, String telTrabajo, String telCelular, String contrasena, String observaciones, Integer tipoUsuario, Integer estado) {
       this.idUsuario = idUsuario;
       this.usuario = usuario;
       this.nombre = nombre;
       this.apellidos = apellidos;
       this.email = email;
       this.feNacimiento = feNacimiento;
       this.direccion = direccion;
       this.telTrabajo = telTrabajo;
       this.telCelular = telCelular;
       this.contrasena = contrasena;
       this.observaciones = observaciones;
       this.tipoUsuario = tipoUsuario;
       this.estado = estado;
    }
   
    public Usuario(String usuario, String nombre, String apellidos, String email, Date feNacimiento, String direccion, String telTrabajo, String telCelular, String contrasena, String observaciones, Integer tipoUsuario, Integer estado) {
       this.usuario = usuario;
       this.nombre = nombre;
       this.apellidos = apellidos;
       this.email = email;
       this.feNacimiento = feNacimiento;
       this.direccion = direccion;
       this.telTrabajo = telTrabajo;
       this.telCelular = telCelular;
       this.contrasena = contrasena;
       this.observaciones = observaciones;
       this.tipoUsuario = tipoUsuario;
       this.estado = estado;
    }
    
    public int getIdUsuario() {
        return this.idUsuario;
    }
    
    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }
    public String getUsuario() {
        return this.usuario;
    }
    
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    public String getNombre() {
        return this.nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellidos() {
        return this.apellidos;
    }
    
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    public String getEmail() {
        return this.email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    public Date getFeNacimiento() {
        return this.feNacimiento;
    }
    
    public void setFeNacimiento(Date feNacimiento) {
        this.feNacimiento = feNacimiento;
    }
    public String getDireccion() {
        return this.direccion;
    }
    
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public String getTelTrabajo() {
        return this.telTrabajo;
    }
    
    public void setTelTrabajo(String telTrabajo) {
        this.telTrabajo = telTrabajo;
    }
    public String getTelCelular() {
        return this.telCelular;
    }
    
    public void setTelCelular(String telCelular) {
        this.telCelular = telCelular;
    }
    public String getContrasena() {
        return this.contrasena;
    }
    
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
    public String getObservaciones() {
        return this.observaciones;
    }
    
    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }
    public Integer getTipoUsuario() {
        return this.tipoUsuario;
    }
    
    public void setTipoUsuario(Integer tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }
    public Integer getEstado() {
        return this.estado;
    }
    
    public void setEstado(Integer estado) {
        this.estado = estado;
    }




}


