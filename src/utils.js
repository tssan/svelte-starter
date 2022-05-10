class Router {
    constructor(routes) {
        this.routes = routes;
    }

    getComponent = () => {
        return this.getRoute('component');
    }

    getRoute = (key) => {
        for(const route of this.routes) {
            const re = new RegExp(route.url);

            let path = location.pathname;
            if(location.pathname !== '/') {
                path = location.pathname.slice(1);
            }

            if(path.match(re) !== null){
                return route[key];
            }
        }
    }
}


export {
    Router
}
