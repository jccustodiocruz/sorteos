import View from "./View.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("Crear sorteo");
    }

    async getHtml() {
        return `
        <form id='crearSorteo'>
            <label for="nombre">Nombre:</label><br>
            <input type="text" id="nombre" name="nombre"><br>
            <label for="cantidadBoletos">Cantidad de boletos:</label><br>
            <input type="text" id="cantidadBoletos" name="cantidadBoletos"><br>
            <label for="descripcion">Descripcion:</label><br>
            <input type="text" id="descripcion" name="descripcion"><br>
            <label for="fechaSorteo">Fecha sorteo:</label>
            <input type="date" id="fechaSorteo" name="fechaSorteo"><br>
            <label for="fechaVenta">Fecha venta:</label>
            <input type="date" id="fechaVenta" name="fechaVenta"><br>
            <label for="tiempoApartado">Tiempo de apartado:</label>
            <input type="number" id="tiempoApartado" name="tiempoApartado" min="0" max="30"><br>
            <label for="tiempoNotificaciones">Tiempo de notificaciones:</label>
            <input type="number" id="tiempoNotificaciones" name="tiempoNotificaciones" min="0" max="30"><br>
            <input type="submit" value="Crear sorteo">
        </form> 
        `;
    }
}
