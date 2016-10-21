/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.controller;

import cr.ac.una.prograiv.proyecto.domain.*;
import cr.ac.una.prograiv.proyecto.bl.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author LENOVO
 */
public class AdminServlet extends HttpServlet {

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
            
            // Creación de Objetos
            Gestiontemas gt = new Gestiontemas(); 
            
            // Creación de BLS
            GestiontemasBL gtBL = new GestiontemasBL();
            
            // Creación de LISTAS
            List<Gestiontemas> gtlist;
            
            //Se hace una pausa para ver el modal
            Thread.sleep(1000);            
            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String accion = request.getParameter("accion");
            String nombreT, costoxT, observT;
            int idxTema, estadoT;
            
            switch (accion) {
                case "guardarTema": case "modificarTema":
                    nombreT = request.getParameter("nombreT");
                    costoxT = request.getParameter("costoxT");
                    observT = request.getParameter("observT");
                    idxTema = Integer.parseInt(request.getParameter("idxTema"));
                    estadoT = Integer.parseInt(request.getParameter("estadoT"));
                    if (accion.equals("guardarTema")) {
                        // verifiquemos que el tema no exista ya.
                        gt = gtBL.findByName(Gestiontemas.class.getName(), nombreT);
                        //si no es null
                        if (gt != null) {
                            
                            out.print("C~Validación correcta... espere esta siendo redireccionado");
                        }else{
                            out.print("E~Usuario o contraseña invalidos");
                        }
                    }else{
                        out.print("E~Usuario o contraseña invalidos");
                    }
                    break;
                case "eliminarTema":
                        try{
                            gt.setIdTemas(Integer.parseInt(request.getParameter("idxTema")));
                            gt.setEstado(0);
                            gtBL.delete(gt);
                            out.print("C~El Tema fue eliminado exitosamente.");
                        }catch(Exception e){
                            out.print("E~Hubo un error elimiando el tema.");
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