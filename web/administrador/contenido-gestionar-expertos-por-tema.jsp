<div id="contenido-expertos-por-tema">
    <h1>GESTION EXPERTOS POR TEMA</h1>
    <div class="col-md-6 text-center">
        <h4>Lista de usuarios expertos.</h4>
        <table class="table table-bordered" id="gesion-expertosTema-tabla"></table>
        <div id="paginacion-expertosTema-tabla"></div>
    </div>
    <div class="col-md-6 text-center">
        <form class="form-horizontal">
            <br/>
            <input id="id-usuario-experto" type="hidden" />
            <div class="form-group">
                <label for="usuario-experto-nombre">Nombre usuario experto:</label>
                <input type="text" class="form-control" id="usuario-experto-nombre" 
                       readonly>
            </div>
            <div class="form-group">
                <label for="gestionar-experto-categoria">Categor�a:</label>
                <select class="form-control" id="gestionar-experto-categoria">
                    <option value="0">cat01</option>
                    <option value="1">cat02</option>
                    <option value="2">cat03</option>
                    <option value="3">cat04</option>
                </select>
            </div>
            <div class="form-group">
                <label for="gestionar-experto-observaciones">Observaciones:</label>
                <textarea class="form-control" id="gestionar-experto-observaciones" rows="4" 
                          placeholder="�Alguna observaci�n?."></textarea>
            </div>
            <div class="form-group">
                <label for="gestionar-experto-estado">Activar la categor�a:</label>
                <div id="gestionar-experto-estado">
                    <label class="radio-inline"><input type="radio" name="optradio">S�</label>
                    <label class="radio-inline"><input type="radio" name="optradio">No</label>
                </div>
            </div>
            <br />
            <div class="form-group"> 
                <button type="button" class="btn boton-rigth" 
                            id="gestionar-expxtema-cancelar" onclick="cancelarExpXTema()">Cancelar</button>
                <button type="button" class="btn boton-left" 
                            id="gestionar-expxtema-guardar" onclick="guardarExpXtema()">Guardar</button>
                <button type="button" class="hidden" 
                            id="gestionar-expxtema-modificar" onclick="modificaExpXtema()">Modificar</button>
            </div>
        </form>
    </div>
</div>