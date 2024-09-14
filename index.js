const contenedorEl = document.querySelector('.contenedor')
function handlerRoute(route) {
    const routes = [{
        path: /\/site1/,
        handler: () => { contenedorEl.textContent = "Soy el site 1" }
    },
    {
        path: /\/site2/,
        handler: () => {  contenedorEl.textContent = "Soy el site 2"  }
    },
    {
        path: /\/site3\/./,
        handler: () => {  contenedorEl.textContent = `Soy el site ${route}`  }
    }]
    for (const r of routes) {
        if (r.path.test(route)) {
            r.handler()
        }
    }
}

function goTo(path) {
    console.log(path)
    history.pushState({}, "", path);
    handlerRoute(path)
}

(function () {
    const boton1 = document.querySelector('.boton1')
    const boton2 = document.querySelector('.boton2')
    const boton3 = document.querySelector('.boton3')

    boton1.addEventListener('click', () => {
        goTo("/site1")
    })
    boton2.addEventListener('click', () => {
        goTo("/site2")
    })
    boton3.addEventListener('click', () => {
        goTo("/site3/algo")
    })

    window.addEventListener('load', () => {
        handlerRoute(location.pathname)
    })
    const buscarLetraJ = /search\/./
    console.log(buscarLetraJ.test('search'))
    console.log(buscarLetraJ.test('search/'))
    console.log(buscarLetraJ.test('search/loquesea'))
})();