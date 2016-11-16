<%-- 
    Document   : contenido-reportes
    Created on : Oct 17, 2016, 9:29:10 PM
    Author     : ghost
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div id="contenido-reportes">
    <h1 class="heading-one">Reportes estadisticos.</h1>
    <hr/>
    <div class="container">
        <div id="facturacion-anual" class="row">
            <div class="col-md-12 ">
                <h1 class="heading-second">Facturacion anual</h1>
                <input  type="button" onclick="mostrarFacturacionAnual();" value=" Mostrar "/>
                <canvas id="grafico-facturacion-anual">
                </canvas>
            </div>
        </div>
        <hr/>
        <div id="ingreso-anual" class="row">
            <div class="col-md-12">
                <h1 class="heading-second">Ingreso anual</h1>
            </div>
        </div>
        <hr/>
        <div id="temas-consultado-usuario" class="row">
            <div class="col-md-12">
                <h1 class="heading-second">Lista de usuarios según tema</h1>
            </div>
        </div>
        <hr/>
         <div id="top-5-expertos" class="row">
            <div class="col-md-12">
                <h1 class="heading-second">Top 5 expertos</h1>
            </div>
        </div>
    </div>  
</div>