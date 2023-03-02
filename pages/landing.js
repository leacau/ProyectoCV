let nombreLanding = document.querySelectorAll(".nombreLanding")
console.log(nombreLanding);

function mostrar(){
    nombreLanding.forEach(element => {
        element.setAttribute('style', 'visibility: visible')
    });   
}

function ocultar(){
    nombreLanding.forEach(element => {
        element.setAttribute('style', 'visibility: hidden')
    });   
}

