// ----------------------------------------------- WHATSAPP ---------------------------------------------------------------------- 

document.getElementById('logoW').addEventListener('click', function(e) {
    writeToW();
});

function writeToW() {   
    let number = document.getElementById('numberW');
    let miNumber = '18485253582';
    let mensaje = 'Hola, quisiera más información.'
    number.href = `https://api.whatsapp.com/send?phone=${miNumber}&text=${mensaje}`;
}

// ----------------------------------------------------------------------------------------------------------------