
// ----------------------------------------------- WHATSAPP ---------------------------------------------------------------------- 

document.getElementById('logoW').addEventListener('click', function(e) {
    writeToW();
});

function writeToW() {   
    let number = document.getElementById('numberW');
    let miNumber = '17864437366';
    let mensaje = 'Hola, quisiera información de sus cursos.'
    number.href = `https://api.whatsapp.com/send?phone=${miNumber}&text=${mensaje}`;
}

// --------------------------------------------------------------------------------------------------------------------------------- 


// setTimeout(() => {
//     // funcion o comando que vaya a ejecutar;
//     divMensaje.remove();
// }, 1000);


{/* <h2 class="mainPortada"><strong>APRENDE INGLÉS FÁCIL Y RÁPIDO CON NOSOTROS</strong></h2> */}


// let texto = document.querySelector('main-texto');
// texto.appendChild('h2') = 

document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento listo');

    console.log('Pasó 1 segundo');
    const texto = document.createElement('h2');
    texto.textContent = 'APRENDE INGLÉS FÁCIL Y RÁPIDO CON NOSOTROS';
    texto.classList.add('mainPortada');

    let newTexto = document.querySelector('.main-texto');
    newTexto.appendChild(texto)
});
