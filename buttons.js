const d = document

const ACORDEON = (pointer, params) => {
    d.addEventListener("click", (e) => {
        if(e.target.matches(pointer)){
            d.querySelector(params).classList.toggle("active")
        }
    })
}

ACORDEON("#width-pointer", ".width-params")
ACORDEON("#height-pointer", ".height-params")
ACORDEON("#font-pointer", ".font-params")
ACORDEON("#shadow-pointer", ".shadow-params")



const TAMANIO = (btnSuma, btnResta, button, prop) => {

    let size = 0

    d.addEventListener("click", (e) => {
        if(e.target.matches(btnSuma)){
            size = size + 4
            console.log(size)
            d.getElementById(button).style.setProperty(prop, `${size}px`)
        }

        if(e.target.matches(btnResta)){
            size = size - 2
            console.log(size)
            d.getElementById(button).style.setProperty(prop, `${size}px`)
        }
    })
}

TAMANIO(".menu-btn-sube-width", ".menu-btn-baja-width", "btn", "width")
TAMANIO(".menu-btn-sube-height", ".menu-btn-baja-height", "btn", "height")
TAMANIO(".menu-btn-sube-font", ".menu-btn-baja-font", "btn", "font-size")


