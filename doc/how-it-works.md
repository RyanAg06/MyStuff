# Search bar implementation
Este documento explica de forma simple y rápida como funciona el search bar , después de leer esto solo lee el código y no faltaría nada mas para entender la 
funcionalidad.

## Resumen
En la pagina hay un [`input:search`](./searchbar.js) el cual una vez que se presiona la tecla **enter** se hace una búsqueda entre las tarjetas que existan en el [index.html](/index.html) si lo que se escribió en el [`input:search`](./searchbar.js) coincide en algo en el titulo de alguna(s) tarjeta(s) esta(s) se mostraran en una [ventana modal](./tarjetas_encontradas.js).

## Ventana modal
[click aquí para leer el archivo](./tarjetas_encontradas.js)
Hay una clase llamada **ModalTarjetas** el cual se encarga de declarar el contenedor de la **ventana modal** y leer y copiar todas las tarjetas para guardarlas en una estructura de datos.

Cada tarjeta se guarda en un array llamado `elements` de esta forma...
```js
elements = [
    {
        id:"xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
        title:"Mario 64 juego",
        raw_content:`<section id="${id}" class="tarjeta">${element.innerHTML}</section>`
    }
]
```
* La propiedad **title** se usa para realizar las búsquedas.
* La propiedad **id** se usa para eliminar una tarjeta de la ventana modal cuando no tiene que ser visible (cuando no coincide con la búsqueda actual por ejemplo o cuando se limpia toda la ventana)
* La propiedad **raw_content** se usa para insertar la tarjeta en la ventana modal.

-> El algoritmo que se usa para la búsqueda esta en un comentario en el código de la clase [ModalTarjetas](./tarjetas_encontradas.js).

## SearchBar
[click aquí para leer el archivo](./searchbar.js)
Aquí solo se declara y exporta el objeto que contiene la **tag** del [`input:search`](./searchbar.js) y tiene el método para buscar el cual puede hacer un pre proceso antes de buscar desde el objeto instanciado de [ModalTarjetas](./tarjetas_encontradas.js) pero actualmente no hace ningún pre proceso.