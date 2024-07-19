const TemplateSliderItem = function () {
    this.srcImage = null;
    this.linkDownload = null;
    this.link = null;
    this.title = null;
    this.description = null;
}
class SliderController {
    constructor(gap) {
        this.firstItem = null;
        this.gap = 2 // in vh
        this.translateStep = 5 // in vh
        this.currentStep = 0
        this.items;

        /*
        si estoy en el current step 1
        se actualiza el margin left del primer elemento
        a -5vh porque (translateStep = 5)*(currentStep=1)
        */

    }
    #changeStep(newStep) {
        this.currentStep = newStep
    }

    #updateFirstItemStyle() {

    }
    setItems(newItems) {
        this.items = newItems;
    }
    #createItem(itemData,index) {
        return (
`
                    <a id="${idSlider}-item-${index}" class="mini-tarjeta" ${itemData.link==null?'':'href="${itemData.link}"'} >
                <img src="${itemData.srcImage}" class="mini-tarjeta-imagen">
                <div class="mini-tarjeta-botones">
                    ${itemData.linkDownload==null?"":`<button class="boton-descargar">
                        <img src="/css/iconosPNG/descargar.png" alt="^" class="img-icono">
                    </button>`}
                </div>
                <div class="mini-tarjeta-info">
                    <h3>${itemData.title}</h3>
                    <p>${itemData.description}</p>
                </div>
            </a>
                    `
        )
    }
    createSlider(container, idSlider) {
        const itemsReadyToRender = this.items.map((itemData, index) => (this.#createItem(itemData,index))).join('')
            
        container.innerHTML += `
        <aside id="${idSlider}">
            ${itemsReadyToRender}
        </aside>
        `;
        this.firstItem = document.getElementById(`${idSlider}-item-${0}`)
        
    }
}


const sliderController = new SliderController()

const sliderItem = new TemplateSliderItem();
sliderItem.title = "Skin minecraft"
sliderItem.description = 'Esta es una skin muy bonita porque porque'
sliderItem.srcImage = '/imagenes/noticias/noticia2.jpg'

sliderController.setItems([sliderItem,sliderItem])
sliderController.createSlider(document.body, 'slider-mini-tarjetas')