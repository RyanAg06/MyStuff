// Variables
let contenedores = document.querySelectorAll(".slider__imagenes");                  // Selecciono Contenedores
let sliderActual = "";                                                              // Reinicio Slider Seleccionado
let margin = 0;                                                                     // Reinicio Margin

// Redimensiono Slider
contenedores.forEach(contenedor =>
{
    let imagenes = contenedor.querySelectorAll(".slider__imagen");                  // Selecciono Cada Imagen del Contenedor
    cantidad = imagenes.length;                                                     // Obtengo Numero de Imagenes
    contenedor.style.width = `${100 * cantidad}%`;                                  // Redimensiono Contenedor por Cada Imagen
    contenedor.style.marginLeft = `0%`;                                             // Voy a la Ultima Imagen

    imagenes.forEach(imagen =>
    {
        imagen.style.width = `${100 / cantidad}%`;                                  // Redimensiono Cada Imagen del Contenedor
    });
});

// Funcion Mover Derecha Slider
function moverDerecha(tarjeta__slider)
{
    let tarjeta = document.getElementById(`${tarjeta__slider}`);            // Selecciono La Tarjeta
    let sliderImagenes = tarjeta.querySelector(".slider__imagenes");        // Selecciono Conenedor de Imagenes
    let imagenes = tarjeta.querySelectorAll(".slider__imagen");             // Selecciono Todas las Imagenes
    let cantidad = imagenes.length;                                         // Cuento Nuemro de Imagenes

    if(sliderActual === tarjeta__slider)                                    // Verifico si Selecciono Otro Slider
    {
        margin -= 100;                                                      // Muevo a la Derecha
        if(margin < -((cantidad - 1) * 100))                                // Verifico si Llego al Final
        {
            margin = -((cantidad - 1) * 100);                               // Evito que se Pase
        }
    }
    else
    {
        sliderActual = tarjeta__slider;                                     // Cambio de Slider
        if(sliderImagenes.style.marginLeft == "0%")                         // Verifico si Esta en la Primera Posicion
        {
            margin = 0;                                                     // Reinicio Margin
            margin -= 100;                                                  // Muevo a Derecha
        }
        else
        {
            margin = parseInt(sliderImagenes.style.marginLeft.replace("%",""));     // Obtengo Margin Actual y lo Convierto a Numero
            margin -= 100;                                                          // Muevo a la Derecha
            if(margin < -((cantidad - 1) * 100))                                    // Verifico si Llego al Final
            {
                margin = -((cantidad - 1) * 100);                                   // Evito que se Pase
            }
        }
    }
    sliderImagenes.style.marginLeft = `${margin}%`;                                 // Aplico Margin al Contenedor de Imagenes
}

// Funcion Mover Izquierda Slider
function moverIzquierda(tarjeta__slider)
{
    let tarjeta = document.getElementById(`${tarjeta__slider}`);            // Selecciono La Tarjeta
    let sliderImagenes = tarjeta.querySelector(".slider__imagenes");        // Selecciono Conenedor de Imagenes

    if(sliderActual === tarjeta__slider)                                    // Verifico si Selecciono Otro Slider
    {
        margin += 100;                                                      // Muevo a la Derecha
        if(margin >= 0)                                                     // Verifico si Llego al Final
        {
            margin = 0;                                                     // Evito que se Pase
        }
    }
    else
    {
        sliderActual = tarjeta__slider;                                     // Cambio de Slider
        if(sliderImagenes.style.marginLeft == "0%")                         // Verifico si Esta en la Primera Posicion
        {
            margin = 0;                                                     // Reinicio Margin
        }
        else
        {
            margin = parseInt(sliderImagenes.style.marginLeft.replace("%",""));     // Obtengo Margin Actual y lo Convierto a Numero
            margin += 100;                                                          // Muevo a la Derecha
            if(margin >= 0)                                                         // Verifico si Llego al Final
            {
                margin = 0;                                                         // Evito que se Pase
            }
        }
    }
    sliderImagenes.style.marginLeft = `${margin}%`;                                 // Aplico Margin al Contenedor de Imagenes
}