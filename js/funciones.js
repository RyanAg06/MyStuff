// =============== Funcion Mostrar Menu ===============
function mostrarMenu(btnsId, navId)                // Funcion que recibe 2 parametros
{
    const btns = document.getElementById(btnsId);  // Selecciono contenedor botones
    const nav = document.getElementById(navId);    // Seecciono elemento nav

    btns.addEventListener('click', () =>{          // Funcion click al contenedor botones
        nav.classList.toggle('desplegar');         // Cambiar/Quitar clase al nav
        btns.classList.toggle('cambiar-icono');    // Cambiar/Quitar clase al contenedor botones
    })
}
mostrarMenu('btns-menu', 'nav');                   // LLamar funcion al abrir la pagina



// =============== Funcion Copiar al Portapapeles ===============
function copiarPortapapeles(ruta)                  // Funcion que recibe 1 parametro
{
	let aux = document.createElement("textarea");     // Creo variable que guarda un "textarea"
	aux.value = document.getElementById(ruta).innerText;     // Agrego el valor que quiero copiar al "textarea"
	document.body.appendChild(aux);                // Agrego el "textarea" al body
	aux.select();                                  // Selecciono lo que tiene el "textarea"
	document.execCommand("copy");                  // Ejecuto comando para copiar
	document.body.removeChild(aux);                // Elimino "textarea" del body
    alert("Copiado al Portapales");                // Muestro mensaje
}