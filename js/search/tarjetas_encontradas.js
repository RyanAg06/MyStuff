class ModalTarjetas{
    constructor(){
        this.contenedor = this.#makeContainer()
        this.is_hidden = true;
        document.body.appendChild(this.contenedor)
        this.#load_all();
    }
    #makeContainer(){
        const new_container = document.createElement('section');
        new_container.id = "modal_search";
        new_container.className = "hidden";
        const button_close = document.createElement('button');
        button_close.id = 'modal_search__button_close';
        button_close.textContent = "X";
        button_close.onclick = ()=>this.handle_show()
        new_container.appendChild(button_close);
        return new_container;
    }
    handle_show(){
        /*
        Esta función oculta la ventana si se esta mostrando o
        la muestra si se esta ocultando.
        */

        this.contenedor.className = this.is_hidden ? "" : "hidden";
        this.is_hidden = !this.is_hidden;
    }
    #load_all(){
        const tarjetas = [...document.getElementsByClassName("tarjeta")];
        this.contenedor.innerHTML = ''
        tarjetas.forEach(element => {
            this.contenedor.innerHTML += `<section class="tarjeta">${element.innerHTML}</section>`
        });
        // ! hay que mover esto no esta bien...
        const button_close = document.createElement('button');
        button_close.id = 'modal_search__button_close';
        button_close.textContent = "X";
        button_close.onclick = ()=>this.handle_show()
        this.contenedor.appendChild(button_close);
    }
}

export {ModalTarjetas};