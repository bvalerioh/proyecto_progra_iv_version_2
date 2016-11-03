/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cr.ac.una.prograiv.proyecto.controller;

import com.google.gson.Gson;
import cr.ac.una.prograiv.proyecto.domain.Gestiontemas;
import cr.ac.una.prograiv.proyecto.bl.GestiontemasBL;
import cr.ac.una.prograiv.proyecto.bl.TemasexpertoBL;
import cr.ac.una.prograiv.proyecto.bl.UsuarioBL;
import cr.ac.una.prograiv.proyecto.domain.Temasexperto;
import cr.ac.una.prograiv.proyecto.domain.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
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
            Gestiontemas gt;// = new Gestiontemas(); 
            Usuario usu = new Usuario();
            // Creación de BLS
            GestiontemasBL gtBL = new GestiontemasBL();
            UsuarioBL usuBL = new UsuarioBL();
            //Se hace una pausa para ver el modal
            Thread.sleep(1000);            
            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String accion = request.getParameter("accion");
            String nombreT, observT;
            int idxTema, estadoT, costoxT;
            
            switch (accion) {
                case "guardarTema": case "modificarTema":
                    nombreT = request.getParameter("nombreT");
                    costoxT = Integer.parseInt(request.getParameter("costoxT"));
                    observT = request.getParameter("observT");
                    idxTema = Integer.parseInt(request.getParameter("idxTema"));
                    estadoT = Integer.parseInt(request.getParameter("estadoT"));
                    gt = new Gestiontemas(); 
                    if (accion.equals("guardarTema")) {
                        // verifiquemos que el tema no exista ya.                        
                        gt = gtBL.findByName(Gestiontemas.class.getName(), nombreT);
                        //si no es null
                        if(gt == null){
                          //  Usuario usu1 = new Usuario( "Mai", "Mai", "Tokiha", "maito@gmail.com", new Date(),
                       //  "En la casa de bryan", "22636333","88541122", "usu", "ninguna", 0, 1); 
                            gt = new Gestiontemas(nombreT, costoxT, observT, estadoT); 
                            //Se guarda el objeto
                            gtBL.save(gt);
                            //Se imprime la respuesta con el response
                            out.print("C~El tema fue ingresado correctamente");
                        }
                        else{
                            if(gt.getEstado()==0){
                                gt.setEstado(estadoT);
                                gt.setCostoXminuto(costoxT);
                                gt.setNombreTema(nombreT);
                                gt.setObservaciones(observT);
                                gtBL.merge(gt);
                                out.print("C~El tema fue reactivado y actualizado");
                            }else{
                                out.print("E~El tema ya existe");
                            }
                        }
                    }else{//es modificar persona
                        //Se guarda el objeto
                        gt.setIdTemas(idxTema);
                        gt.setEstado(estadoT);
                        gt.setCostoXminuto(costoxT);
                        gt.setNombreTema(nombreT);
                        gt.setObservaciones(observT);
                        gtBL.merge(gt);
                        //Se imprime la respuesta con el response
                        out.print("C~El tema fue modificado correctamente");
                    }
                    break;
                    
                case "eliminarTema":
                        try{
                            gt = new Gestiontemas(); 
                            gt.setIdTemas(Integer.parseInt(request.getParameter("idxTema")));
                            gt.setEstado(0);
                            gtBL.delete(gt);
                            out.print("C~El Tema fue eliminado exitosamente.");
                        }catch(Exception e){
                            out.print("E~Hubo un error elimiando el tema."+ e.getMessage());
                        }
                    break;    
                    
                case "obtenerTodosTemas":
                    json = new Gson().toJson(gtBL.findAll(Gestiontemas.class.getName()));
                    out.print(json);
                    break;
                    
                case "obtenerTemaXid":
                    gt = new Gestiontemas(); 
                    int idTema = Integer.parseInt(request.getParameter("idxTema"));
                    gt = gtBL.findById(idTema);
                    //se pasa la informacion del objeto a formato JSON
                    json = new Gson().toJson(gt);
                    out.print(json);
                    break;   
    //**************************************************************************                
    //**************************************************************************
                    // Metodo unico.
                case "obtenerExpertos":
                    json = new Gson().toJson(usuBL.findAllExpert());
                    out.print(json);
                    break;
                    
                case "asignarTemaExperto":
                    int idExpeXte = Integer.parseInt(request.getParameter("idUsuario"));
                    int idTemaxExp = Integer.parseInt(request.getParameter("idTema"));
                    String temaNomExp = request.getParameter("temaNombre");
                    Temasexperto te = new Temasexperto(idExpeXte, idTemaxExp, temaNomExp);
                    //se guarda el tema al experto
                    TemasexpertoBL teBL = new TemasexpertoBL();
                    teBL.save(te);
                    out.print("C~El tema fue asignado correctamente");
                    break;
                    
                case "eliminarTemaExperto":
                    try{
                        int idTemasExperto = Integer.parseInt(request.getParameter("idTemasExperto"));
                        Temasexperto te2 = new Temasexperto();
                        te2.setIdTemasExperto(idTemasExperto);
                        // se guarda el tema al experto
                        TemasexpertoBL teBL2 = new TemasexpertoBL();
                        teBL2.delete(te2);
                        out.print("C~Se le elimino el Tema fue eliminado exitosamente.");
                        }catch(Exception e){
                            out.print("E~Hubo un error elimiando el tema."+ e.getMessage());
                        }
                    break;
                    
                case "obtenerMisTemas":
                    Temasexperto te3 = new Temasexperto();
                    te3.setIdExperto(Integer.parseInt(request.getParameter("idTemaexperto")));
                    // se guarda el tema al experto
                    TemasexpertoBL teBL3 = new TemasexpertoBL();
                    json = new Gson().toJson(teBL3.findAllById(Temasexperto.class.getName(), te3));
                    
                    out.print(json);
                    break;
                    
                case "cambiaUsuarioExperto":                    
                    usu.setIdUsuario(Integer.parseInt(request.getParameter("idUsuario")));
                    usu.setTipoUsuario(Integer.parseInt(request.getParameter("tipoUsuario")));
                    // modificamos al usuario
                    usuBL.merge(usu);
                    break;
                    
                case "obtenerFacturación":
                    break;
                    
                case "obtenerReporte":
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