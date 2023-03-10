document.addEventListener('DOMContentLoaded', function(){
    const heroSection = document.querySelector('.hero')
    const alturaHero =  heroSection.clientHeight

    const questions = document.querySelectorAll('[data-faq-question]')
    
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY
        
        if (posicaoAtual > alturaHero){
            ocultaHeader()
        }
        else{
            exibeHeader()
        }
    })
    
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreFecha)
    }
})

//Function Header:
function ocultaHeader(){
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

function exibeHeader(){
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}
//Function Faq:
function abreFecha(elemento){
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode
    
    elementoPai.classList.toggle(classe)
}
