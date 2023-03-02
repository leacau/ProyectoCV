let nombreLanding = document.querySelectorAll(".nombreLanding")


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

function ver(btn){
    console.log(btn);
    let detalle = document.querySelector(`.${btn.id}`)
    detalle.setAttribute('style', 'visibility: visible') 
}

function esconder(id){
    console.log(id);
    let detalle = document.querySelector(`.${id}`)
    detalle.setAttribute('style', 'visibility: hidden')    
}