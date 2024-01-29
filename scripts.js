
const form = document.querySelector('.caixa-fale')
const background = document.querySelector('.mascara-form')

function mostrarForm() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    background.style.visibility = 'visible'
    
}

function esconderForm() {
    form.style.left = '-830px'
    form.style.transform = 'translateX(0)'
    background.style.visibility = 'hidden'
}
