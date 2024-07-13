/* ========================================= CODIGO ========================================= */

// Cargar Codigo al Entrar a la Pagina
// ! Estos solo funcionan al usar el sito en mobile
window.onload = function codigoJS()
{
    abrirMenuLateral();
    abrirSubMenus();
}

// Cargar Codigo al Redimensionar la Pagina
window.addEventListener("resize", ()=>
{
    abrirSubMenus();
    cerrarSubmenus();
});

/* ========================================= FUNCIONES ========================================= */

function abrirMenuLateral()
{
    /*
    agrega el evento para abrir y cerrar el menu lateral
    */
    const btnsMenu = document.querySelector(".bienvenida-btns-menu");
    const nav = document.querySelector("nav");

    btnsMenu.addEventListener("click", ()=>                     // Evento Cambiar Icono y Mostrar Menu
    {
        btnsMenu.classList.toggle("cambiar-icono");
        nav.classList.toggle("activo");
        console.log(nav)
        if(nav.className == "activo")
        {
            document.body.style = `overflow-y:hidden;`;         // Desactivo Scroll al Abrir Menu Lateral
        }
        else
        {
            document.body.style = `overflow-y:initial;`;        // Activo Scroll al Cerrar Menu Lateral
            cerrarSubmenus();                                   // Cierro los Submenus al Cerrar el Menu Lateral
        }
    });
}

// Funcion Abrir Submenus
function abrirSubMenus()
{
    /*
    agrega los eventos a los menus para poder abrirlos y cerrarlos
    */
    if(window.innerWidth < 1081)
    {
        const items = document.querySelectorAll(".item-abrir-sub-menu");
        items.forEach(item =>
        {
            const submenu = item.nextElementSibling;
            const flecha = item.children[0].children[0];

            item.addEventListener("click", ()=>
            {
                cerrarSubmenus();                           // Cierro los Submenus al dar Click

                if(submenu.clientHeight == 0)
                {
                    submenu.classList.add("activo");        // Muestro Submenu Cerrado
                    flecha.classList.add("activo");         // Activo la Flecha del Menu
                }
            });
        });
    }
}

function cerrarSubmenus()
{
    /*
    cierra las flechas de los menus y agrega los eventos para abrir y cerrar los sub menus y sub sub menus.
    */
    const flechas = document.querySelectorAll(".icono-menu-desplegar");
    // cerrar las flechas
    flechas.forEach(a=>
        {
            a.classList.remove("activo");           // Regreso las Flechas a su Estado Desactivado
        })
    // agregar los eventos de los sub menus    
    const submenu3 = document.querySelectorAll(".menu-3");
    const submenu2 = document.querySelectorAll(".menu-2");
    submenu2.forEach(a =>
    {
        a.classList.remove("activo");           // Cerrar Submenus 2
        a.addEventListener("click",()=>
        {
            a.classList.add("activo");          // Abrir Submenu 2 Clickeado   
        });

        submenu3.forEach(b =>
        {
            b.classList.remove('activo');       // Cerrar Submenus 3
        });
    })
}

function copiarPortapapeles(ruta)
{
    /*
    @param ruta:String 
    toma el id de una etiqueta y copia su contenido al portapapeles del usuario.
    */
	let aux = document.createElement("textarea");
	aux.value = document.getElementById(ruta).innerText;
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
    alert("Copiado al Portapales");
}