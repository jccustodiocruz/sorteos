import Sorteos from './views/Sorteos.js';
import CrearSorteo from './views/CrearSorteo.js';
import ModificarSorteo from './views/ModificarSorteo.js';
import BuscarSorteo from './views/BuscarSorteo.js';

const navigate = link => {
    history.pushState(null, null, link);
    router();
};

const router = async () => {
    const routes = [
        {path: '/', view: Sorteos},
        {path: '/crear', view: CrearSorteo},
        {path: '/modificar', view: ModificarSorteo},
        {path: '/buscar', view: BuscarSorteo}
    ];

    const matches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = matches.find(matches => matches.isMatch);

    const view = new match.route.view();
    document.querySelector('#app').innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', evento => {
        if(evento.target.matches('[data-link]')){
            evento.preventDefault();
            navigate(evento.target.href);
        }
    });
    router();
});