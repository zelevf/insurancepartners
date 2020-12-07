
// ----------------------------------------------- WHATSAPP ---------------------------------------------------------------------- 

document.getElementById('logoW').addEventListener('click', function(e) {
    writeToW();
});

function writeToW() {   
    let number = document.getElementById('numberW');
    let miNumber = '17864437366';
    let mensaje = 'Hola, quisiera información de sus productos.'
    number.href = `https://api.whatsapp.com/send?phone=${miNumber}&text=${mensaje}`;
}

// --------------------------------------------------------------------------------------------------------------------------------- 


setTimeout(() => {
    // funcion o comando que vaya a ejecutar;
    divMensaje.remove();
}, 1000);