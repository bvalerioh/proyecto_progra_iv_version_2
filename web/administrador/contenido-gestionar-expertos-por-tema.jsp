<div id="contenido-expertos-por-tema">
    <h1>GESTION EXPERTOS POR TEMA</h1>
    <form class="form-horizontal">
        <br/>
        <div class="form-group">
            <label for="gestionar-experto-id-usuario">Id usuario:</label>
            <select class="form-control" id="gestionar-experto-usuario">
                <option>exp01</option>
                <option>exp02</option>
                <option>exp03</option>
                <option>exp04</option>
            </select>
        </div>
        <div class="form-group">
            <label for="gestionar-experto-usuario">Nombre usuario:</label>
            <input type="text" class="form-control" id="gestionar-experto-usuario" 
                   readonly value="Pedro Cordoba">
        </div>
        <div class="form-group">
            <label for="gestionar-experto-id-categoria">Id de la categoría:</label>
            <select class="form-control" id="gestionar-experto-id-categoria">
                <option>cat01</option>
                <option>cat02</option>
                <option>cat03</option>
                <option>cat04</option>
            </select>
        </div>
        <div class="form-group">
            <label for="gestionar-experto-categoria">Nombre de la categoría:</label>
            <input type="text" class="form-control" id="gestionar-experto-categoria" 
                   readonly value="HTML">
        </div>
        <div class="form-group">
            <label for="gestionar-experto-observaciones">Observaciones:</label>
            <textarea class="form-control" id="gestionar-experto-observaciones" rows="4" 
                      placeholder="¿Alguna observación?."></textarea>
        </div>
        <div class="form-group">
            <label for="gestionar-experto-estado">Estado:</label>
            <div id="gestionar-experto-estado">
                <label class="radio-inline"><input type="radio" name="optradio">Activo</label>
                <label class="radio-inline"><input type="radio" name="optradio">Desactivo</label>
            </div>
        </div>
        <br />
        <div class="form-group"> 
                <button type="submit" class="btn boton-left" id="gestionar-experto-guardar">Guardar</button>
        </div>
    </form>
</div>