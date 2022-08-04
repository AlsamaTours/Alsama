//Inicio Seccion Español
function SeisEnUnoEspañol(){
    location.href = "Servicio.html#6-in-1";
}

function VipEspañol(){
    location.href = "Servicio.html#VIP";
}

function coffeeEspañol(){
    location.href = "Servicio.html#coffee";
}
function TortugaJacoEspañol(){
    location.href = "Servicio.html#TortugaJaco";
}

function CincoEnUnoEspañol(){
    location.href = "Servicio.html#CincoEnUno";
}
function TocoriEspañol(){
    location.href = "Servicio.html#Tocori";
}

function ComboEspañol(){
    location.href = "Servicio.html#Combo";
}
function TransportEspañol(){
    location.href = "Servicio.html#Transport";
}
function ToursSanJoseEspañol(){
    location.href = "Servicio.html#ToursSanJose";
}
function ToursJacoEspañol(){
    location.href = "Servicio.html#ToursJaco";
}

function RentaCarEspañol(){
    location.href = "Servicio.html#RentaCar";
}

function PackagesEspañol(){
    location.href = "Servicio.html#Packages";
}
//Fin Seccion Español

//Inicio Seccion Ingles
function SeisEnUno(){
    location.href = "services.html#6-in-1";
}

function Vip(){
    location.href = "services.html#VIP";
}

function coffee(){
    location.href = "services.html#coffee";
}
function TortugaJaco(){
    location.href = "services.html#TortugaJaco";
}

function CincoEnUno(){
    location.href = "services.html#CincoEnUno";
}
function Tocori(){
    location.href = "services.html#Tocori";
}

function Combo(){
    location.href = "services.html#Combo";
}
function Transport(){
    location.href = "services.html#Transport";
}
function ToursSanJose(){
    location.href = "services.html#ToursSanJose";
}
function ToursJaco(){
    location.href = "services.html#ToursJaco";
}

function RentaCar(){
    location.href = "services.html#RentaCar";
}

function Packages(){
    location.href = "services.html#Packages";
}
//Fin seccion ingles
function URlPage(){ //Async await para obtener el URL
    return new Promise((resolve,reject) =>{
        resolve(window.location.href);
    } )
}
async  function namePage(){
    let nombre = await URlPage(); //llamo para ver el URL
    const NombreService = nombre.split('#')[1]; //Uso lo que esta despues del # asi da una sensacion de php
    if(NombreService == "Exito"){
        alert("gracias por la suscripcion, ahora tienes un 5% de descuento / thanks for subscribing, now you have a 5% discount");
    }

}
window.addEventListener('DOMContentLoaded', async (e) =>{	//DOMContentLoaded

    namePage(); //Cargar la pagina depende de que URL sea pues no se usa php


})