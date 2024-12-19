class ModalTarjetas
{
    constructor()
    {
        this.contenedor = this.#makeContainer()
        this.is_hidden = true;
        this.elements = [];
        this.positioned_elements = [];
        this.#load_all();
    }
    #load_all(){
        const tarjetas = [...document.getElementsByClassName("tarjeta")];
        this.contenedor.innerHTML = ''
        this.elements = [];
        tarjetas.forEach(element => {
            const id = this.#makeId();
            this.elements.push({
                id:id,
                title:element.getElementsByClassName('tarjeta__titulo')[0].textContent,
                raw_content:`<section id="${id}" class="tarjeta">${element.innerHTML}</section>`
            });
        });
    }
    #makeId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    #makeContainer(){
        // const new_container = document.createElement('section');
        const new_container = document.getElementById("modal_search");
        new_container.id = "modal_search";
        new_container.className = "hidden";
        const button_close = document.createElement('button');
        button_close.id = 'modal_search__button_close';
        button_close.className = "hidden";
        button_close.textContent = "X";
        button_close.onclick = ()=>this.handle_show()
        document.body.appendChild(button_close);
        this.button_close = button_close;
        return new_container;
    }
    handle_show(){
        /*
        Esta función oculta la ventana si se esta mostrando o
        la muestra si se esta ocultando.
        */

        this.contenedor.className = this.is_hidden ? "" : "hidden";
        this.button_close.className = this.is_hidden ? "" : "hidden";
        this.is_hidden = !this.is_hidden;
        document.body.style.overflowY = this.is_hidden ? "auto" : "hidden";
        window.scrollTo(0, 0);
    }
    /*
    1. Buscar en la bd by keyword
    2. Si hay coincidencias se hace un array
    3. Por cada elemento en el array se verifica si...
        * Si no esta posicionado se agrega
        * Si esta posicionado no hace nada
    4. Si hay elementos ya posicionados que no estan en las coincidencias se crea otro array con ellos.
    5. Por cada elemento del array...
        * Se quita del posicionamiento
    */
   #add_element(element){
    this.contenedor.innerHTML += element.raw_content;
    this.positioned_elements.push(element);
   }
   #remove_element(element){
        document.getElementById(element.id).remove();
        this.positioned_elements = this.positioned_elements.filter(function(valor) {
            return valor !== element;
        });
   }
   search_by(keyword){
    const matching_elements = this.elements.filter((element)=>{
        return element.title.toLowerCase().includes(keyword)
    })
    matching_elements.forEach((element)=>{
        if (!this.positioned_elements.includes(element)){
            this.#add_element(element)
        }
    })
    const not_matching_elements = this.positioned_elements.filter((element)=>{
        return !(matching_elements.includes(element))
    })
    not_matching_elements.forEach((element)=>{
        this.#remove_element(element);
    })
   }

}
const modal_tarjetas = new ModalTarjetas()
const search_bar_field = {
    tag:document.getElementById('searchbar__field'),
    search_by_current(modal_tarjetas){
        modal_tarjetas.search_by(this.tag.value.toLowerCase());
    }
}

search_bar_field.tag.addEventListener('keyup', e=>
{
    modal_tarjetas.is_hidden?modal_tarjetas.handle_show():undefined;
    search_bar_field.search_by_current(modal_tarjetas)
})
