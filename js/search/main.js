import { search_bar_field } from "./searchbar.js";
import { ModalTarjetas } from "./tarjetas_encontradas.js";

const modal_tarjetas = new ModalTarjetas()
search_bar_field.tag.addEventListener('keydown', e=>{
    if (e.key==='Enter') {
        search_bar_field.search_by_current()
        modal_tarjetas.handle_show()
    };
})


console.log(search_bar_field)