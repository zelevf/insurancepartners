
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

// --------------------------------------------------------------------------------------------------------------------------------- 





// setTimeout(() => {
//     // funcion o comando que vaya a ejecutar;
//     divMensaje.remove();
// }, 1000);



// CAMBIAR A APARECER EN TRANSICION Y NO GENERAR EL TEXTO 
document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        const texto = document.querySelector('.mainPortada');
        texto.style.opacity = 1;
        texto.style.transitionDuration = "1s";
    }, 800);

});




// ----------------------------------- FORMULARIO -----------------------------------------------

// -------------------- VARIABLES
const enviarConsulta = document.getElementById("enviarConsulta");
const borrarConsulta = document.getElementById("borrarConsulta");
const formularioConsulta = document.getElementById('blockText');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



// -------------------- VARIABLES CAMPOS
const nombreCampo = document.getElementById("nombreConsulta");
const emailCampo = document.getElementById("emailConsulta");
const textoCampo = document.getElementById("textoConsulta");




eventListeners();
function eventListeners() {
    // Inhabilita los botones hasta que se cumplan las condiciones
    document.addEventListener(('DOMContentLoaded'), iniciarApp);
    document.addEventListener('DOMContentLoaded', iniciarApp2);
    document.addEventListener('input', iniciarApp2);

    // CAMPOS DEL FORMULARIO
    nombreCampo.addEventListener('blur', validarFormulario);
    emailCampo.addEventListener('blur', validarFormulario);
    textoCampo.addEventListener('blur', validarFormulario);

    //Botones
    // enviarConsulta.addEventListener('click', enviarFormulario);
    borrarConsulta.addEventListener('click', borrarTodo);
}



// -------------------  FUNCIONES  
function iniciarApp() {
    enviarConsulta.disabled = true;
    enviarConsulta.style.cursor = 'not-allowed';
    enviarConsulta.style.opacity = .5;
}

function iniciarApp2() {
    if(nombreCampo.value === '' && emailCampo.value === '' && textoCampo.value === '') {
        borrarConsulta.disabled = true;
        borrarConsulta.style.cursor = 'not-allowed';
        borrarConsulta.style.opacity = .5;
    } else {
        borrarConsulta.style.opacity = 1;
        borrarConsulta.disabled = false;
        borrarConsulta.style.cursor = 'pointer';
    }  
}

// Borrar los campos del formulario
function borrarTodo(e) {
    e.preventDefault();
    nombreCampo.value = '';
    nombreCampo.style.borderColor = '#e0e0e0';
    emailCampo.value = '';
    emailCampo.style.borderColor = '#e0e0e0';
    textoCampo.value = '';
    textoCampo.style.borderColor = '#e0e0e0';
    borrarConsulta.disabled = true;
    borrarConsulta.style.cursor = 'not-allowed';
    borrarConsulta.style.opacity = .5;
    enviarConsulta.disabled = true;
    enviarConsulta.style.cursor = 'not-allowed';
    enviarConsulta.style.opacity = .5;
   
    const eliminarError = document.getElementById('mensajeError');

    if(eliminarError) {
        eliminarError.remove();
    }
}

// VALIDAR FORMULARIO 
function validarFormulario(e) {

    if(e.target.value.length > 0) {
        e.target.style.borderColor = '#54e346';
    } else {
        e.target.style.borderColor = '#e0e0e0';
    }

    if(e.target.type === 'email' && emailCampo.value.length > 0) {
        if(er.test(e.target.value)) {
            let errorAviso = document.querySelector('error');

            if(errorAviso) {
                e.target.style.borderColor = '#e0e0e0';
            } else {
                e.target.style.borderColor = '#54e346';
            }
            e.target.style.borderColor = '#54e346';

        } else {
            e.target.style.borderColor = 'red';
            mostrarError('EMAIL NO VÁLIDO');
        }
    } else {
        const eliminarError = document.getElementById('mensajeError');
        if(eliminarError) {
            eliminarError.remove();
            emailCampo.style.borderColor = '#e0e0e0';
        }
    }


    if(nombreCampo.value !== '' && er.test(emailCampo.value) && textoCampo.value !== '') {
        enviarConsulta.disabled = false;
        enviarConsulta.style.cursor = 'pointer';
        enviarConsulta.style.opacity = 1;

        const eliminarError = document.getElementById('mensajeError');

        if(eliminarError) {
            eliminarError.remove();
        }
    } else {
        enviarConsulta.disabled = true;
        enviarConsulta.style.cursor = 'not-allowed';
        enviarConsulta.style.opacity = .5;
    }
}






function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');
    mensajeError.style.color = '#ffffff';
    mensajeError.style.background = 'red';
    mensajeError.style.padding = '1vw 3vw';
    mensajeError.style.borderRadius = '.5vw';
    mensajeError.style.fontFamily = 'Alata';
    mensajeError.id = 'mensajeError';

    if (window.matchMedia("(max-width: 768px)").matches) {
        mensajeError.style.fontSize = '5vw';
    } 
    
    if (window.matchMedia("(min-width: 769px)").matches){
        mensajeError.style.fontSize = '1.3vw';
    }



    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formularioConsulta.appendChild(mensajeError);
    } else {
        mensajeError.remove();
    }
}



function mensajeEnviado() {
    const mensajeEnviado = document.createElement('p');
    mensajeEnviado.textContent = "CONSULTA ENVIADA";
    mensajeEnviado.classList.add('mensajeEnviado');
    mensajeEnviado.style.color = '#ffffff';
    mensajeEnviado.style.background = '#28df99';
    mensajeEnviado.style.padding = '1vw 3vw';
    mensajeEnviado.style.borderRadius = '.5vw';
    mensajeEnviado.style.fontFamily = 'Alata';
    mensajeEnviado.id = 'mensajeEnviado';

    if (window.matchMedia("(max-width: 768px)").matches) {
        mensajeEnviado.style.fontSize = '5vw';
    } 
    
    if (window.matchMedia("(min-width: 769px)").matches){
        mensajeEnviado.style.fontSize = '1.3vw';
    }

    setTimeout(() => {
        mensajeEnviado.remove();
    }, 3000);

}





// -----------------------------------------------------------------------------------------------------------------------













// ----------------------------------------------- POR QUÉ DEBO APRENDER INGLÉS ----------------------- 

window.addEventListener('scroll', () => {
    const seccionAprender = document.querySelector(".razones");
    const ubicacion = seccionAprender.getBoundingClientRect();

    const scrollPX = window.scrollY;

    // MOBILE 
    if (window.matchMedia("(max-width: 768px)").matches) {
        if(window.scrollY < 950) {
            seccionAprender.style.transitionDuration = ".1s";
            seccionAprender.style.opacity = "0";
        } else {
            setTimeout(() => {
                seccionAprender.style.transitionDuration = ".6s";
                seccionAprender.style.opacity = "1";
            }, 400);
        };
    } 
    
    // DESKTOP
    if (window.matchMedia("(min-width: 769px)").matches){
        if(scrollPX < 110) {
            seccionAprender.style.transitionDuration = ".1s";
            seccionAprender.style.opacity = "0";

        } else {
            setTimeout(() => {
                seccionAprender.style.transitionDuration = ".6s";
                seccionAprender.style.opacity = "1";
            }, 400);
        };
    }
})

// --------------------------------------------------------------------------------------------------------------------------------- 















// --------------------------- APAREZCA BOTON IR AL PRINCIPIO ------------------------

const btnSubirInicio = document.querySelector(".subirInicio");

window.addEventListener('scroll', () => {
    const seccionAprender = document.querySelector('.aprender');
    const ubicacion = seccionAprender.getBoundingClientRect();

    // MOBILE 
    if (window.matchMedia("(max-width: 768px)").matches) {
        if(ubicacion.top < 950) {
            btnSubirInicio.style.opacity = 1;
            btnSubirInicio.style.right = "0vw";
            btnSubirInicio.style.transitionDuration = ".5s";
        } else {
            btnSubirInicio.style.opacity = 0;
            btnSubirInicio.style.right = "-4vw";
            btnSubirInicio.style.transitionDuration = ".5s";
        };
    } 
    
    // DESKTOP
    if (window.matchMedia("(min-width: 769px)").matches){
        if(ubicacion.top < 500) {
            btnSubirInicio.style.opacity = 1;
            btnSubirInicio.style.right = "0vw";
            btnSubirInicio.style.transitionDuration = ".5s";
        } else {
            btnSubirInicio.style.opacity = 0;
            btnSubirInicio.style.right = "-4vw";
            btnSubirInicio.style.transitionDuration = ".5s";
        };
    }
})


