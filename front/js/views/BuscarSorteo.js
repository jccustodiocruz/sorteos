import View from "./View.js";

export default class extends View{
    constructor(){
        super();
        this.setTitle('Buscar sorteo')
    }

    async getHtml(){
        return `
        <form id='modificarSorteo'>
            <input type="text" id="buscar" name="buscar">
            <input type="submit" value="Buscar">
        </form> 
        <table>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Boletos</th>
          <th>Vendidos</th>
          <th>Apartados</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </table> 
        `       
    }
}