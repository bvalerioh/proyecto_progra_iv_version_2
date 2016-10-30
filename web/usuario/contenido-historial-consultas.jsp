<%-- 
    Document   : contenido-historial-consultas
    Created on : Oct 17, 2016, 8:35:24 PM
    Author     : ghost
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- Barra de navegacion global. -->
<div id="barra-navegacion-global">
    <div>
        <% if (session.getAttribute("username") != null && (Integer) session.getAttribute("rolusuario") == 0) {
        %>
        <%@include file="usuario/contenido-usuario-nav-bar.jsp"%>
        <%
                System.out.println("nav-user");
            }
        %>
        <% if (session.getAttribute("username") != null && (Integer) session.getAttribute("rolusuario") == 1) { %>
        <%@include file="usuario/contenido-experto-nav-bar.jsp"%>
        <%
                System.out.println("nav-user");
            }
        %>
    </div>
</div>
<!-- Fin de la barra de navegacion global --> 
<div id="contenido-historial-consultas">
    <h1>HISTORIAL DE CONSULTAS</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
    </p>
</div>