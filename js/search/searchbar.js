export const search_bar_field = {
    tag:document.getElementById('searchbar__field'),
    search_by_current(modal_tarjetas){
        modal_tarjetas.search_by(this.tag.value.toLowerCase());
    }
}