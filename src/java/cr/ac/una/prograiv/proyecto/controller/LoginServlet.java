/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.controller;

import com.google.gson.Gson;
import cr.ac.una.prograiv.proyecto.bl.UsuarioBL;
import cr.ac.una.prograiv.proyecto.domain.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.System.out;
import java.util.ArrayList;
import java.util.List;
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
public class LoginServlet extends HttpServlet {

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
            UsuarioBL usuBL = new UsuarioBL();
            List<Usuario> liusu;
            //Se hace una pausa para ver el modal
            Thread.sleep(1000);
            
            //**********************************************************************
            //se toman los datos de la session
            //**********************************************************************
            HttpSession session;// = request.getSession(true);
            
            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String accion = request.getParameter("accion");
            switch (accion) {          
                case "loguearse":
                    int flag = 0;
                    liusu = usuBL.findAll(Usuario.class.getName());
                    // El usuario de la persona.
                    usu.setUsuario(request.getParameter("usuario"));                    
                    // La contraseña del usuario
                    usu.setContrasena(request.getParameter("contra"));
                    // comparando si existe los dos parametros                    
                    for(int i = 0; i < liusu.size(); i++){
                        if(liusu.get(i).getUsuario().equals(usu.getUsuario())){
                            if(liusu.get(i).getContrasena().equals(usu.getContrasena())
                               && liusu.get(i).getEstado() == 1){
                                session = request.getSession(true);
                                // El usuario Existe y es regresado.                                
                                usu = liusu.get(i);
                                // creamos una session                                
                                session.setAttribute("id", usu.getIdUsuario());
                                // Se guarda el nombre de usaurio en sesion.
                                session.setAttribute("username",usu.getUsuario());
                                // Se guarda el roll del usuario en sesion.
                                session.setAttribute("rolusuario",usu.getTipoUsuario());
                                //setting session to expiry in 30 min
                                session.setMaxInactiveInterval(30*60);
                                // agregando cookie
                                Cookie userName = new Cookie("usuario", usu.getUsuario());
                                userName.setMaxAge(30*60);
                                //userName.setSecure(true);
                                response.addCookie(userName);
                                flag = 1;                                
                                // devolvemos el usuario
                                //response.sendRedirect("/index.jsp");
                                //return;
                               // json = new Gson().toJson(usu);
                               out.print("C~True");
                            }
                        }
                    }
                    // el usuario no existe
                    if(flag == 0){
                        out.print("E~El usuario no existe, compruebe sus datos personales");     
                    }
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
