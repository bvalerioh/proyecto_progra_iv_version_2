/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.controller;

import com.google.gson.Gson;
import static com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type.Int;
import cr.ac.una.prograiv.proyecto.bl.UsuarioBL;
import cr.ac.una.prograiv.proyecto.domain.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Bryan_2
 */
public class UsuarioServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
         PrintWriter out = response.getWriter();
        try {
            //String para guardar el JSON generaro por al libreria GSON
            String json;
            
            //Se crea el objeto Direccion
            Usuario usu = new Usuario(); 
            Usuario usuAux = new Usuario();
            UsuarioBL usuBL = new UsuarioBL();
            List<Usuario> liusu;
            //Se hace una pausa para ver el modal
            Thread.sleep(1000);
            
            //**********************************************************************
            //se toman los datos de la session
            //**********************************************************************
            HttpSession session = request.getSession();
            
            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String accion = request.getParameter("accion");
            switch (accion) {          
                case "obtenerTodos":
                    json = new Gson().toJson(usuBL.findAll(Usuario.class.getName()));
                    out.print(json);
                    break;
                    
                case "guardarUsuario": case "modificarUsuario":
                    String nombre, usuario, apellidos,email, direccion,telTrabajo,telCelular,contrasena;
                    int tipoUsuario, estado, idUsuario;
                    
                    usuario = request.getParameter("usuario");
                    contrasena = request.getParameter("contra");
                    nombre = request.getParameter("nombre");
                    apellidos = request.getParameter("apellidos");
                    email = request.getParameter("email");
                    direccion = request.getParameter("direccion");
                    telTrabajo = request.getParameter("telTrabajo");
                    telCelular = request.getParameter("telCelular");
                    
                    try{
                        idUsuario = Integer.parseInt(request.getParameter("idUsuario"));
                    }catch(Exception e){
                        idUsuario = 0; 
                   }
                    
                        
                    tipoUsuario = Integer.parseInt(request.getParameter("tipoUsuario"));
                    estado = 1;
                    
                    //Guardar Correctamente en la base de datos
                    String fechatxt = request.getParameter("fechaNacimiento");
                    DateFormat format = new SimpleDateFormat("dd/MM/yyyy", Locale.ENGLISH);
                    Date date = format.parse(fechatxt);
                                     
                    if(accion.equals("guardarUsuario")){ //es insertar personas
                        usu = new Usuario(0, usuario, nombre, apellidos, email, date, direccion, telTrabajo, telCelular, contrasena, "Nuevo usuario", 0, estado);
                        // Validación de que la persona no existe.
                        usuAux = usuBL.findByUser(usu.getUsuario());
                        if(usuAux == null){
                            //Se guarda el objeto
                            usuBL.save(usu);
                            //Se imprime la respuesta con el response
                            out.print("C~El usuario fue ingresado correctamente");
                        }else{
                            out.print("E~Ese usuario ya existe, cambielo por favor...");
                        }
                    }else{//es modificar persona
                        //Se guarda el objeto
                        usu = usuBL.findById(idUsuario);
                        
                        usu.setNombre(nombre);
                        usu.setApellidos(apellidos);
                        usu.setDireccion(direccion);
                        usu.setEmail(email);
                        usu.setFeNacimiento(date);
                        usu.setTelCelular(telCelular);
                        usu.setTelTrabajo(telTrabajo);
                        if(!request.getParameter(contrasena).isEmpty()){
                            usu.setContrasena(contrasena);
                        }
                        usuBL.merge(usu);

                        //Se imprime la respuesta con el response
                        out.print("C~La persona fue modificada correctamente");
                    }
                    break;
                    
                case "eliminarUsuario":                    
                       // elimina un usuario por id
                        usu = usuBL.findById(Integer.parseInt(request.getParameter("idPersona")));
                        //Se elimina el objeto
                        usuBL.delete(usu);
                        //Se imprime la respuesta con el response
                        out.print("El usuario fue eliminado correctamente");                 
                    break;                    
                    
                case "usuarioXid":
                    //se consulta el usuario por ID
                    usu = usuBL.findById(Integer.parseInt(request.getParameter("idPersona")));
                    
                    //se pasa la informacion del objeto a formato JSON
                    json = new Gson().toJson(usu);
                    out.print(json);
                    break;
                    
                case "obtenerMisFacturas":
                    // falta implemenetar.
                    break;
                default:
                    out.print("E~No se indico la acción que se desea realizare");
                    break;
            }
        } catch (NumberFormatException e) {
            out.print("E~" + e.getMessage());
        } catch (Exception e) {
            out.print("E~" + e.getMessage());
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
