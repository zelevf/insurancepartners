
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



// CAMBIAR A APARECXER EN TRANSICION Y NO GENERAR EL TEXTO 
document.addEventListener('DOMContentLoaded', () => {
    // console.log('Documento listo');

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
        console.log('No hay información para borrar');
        borrarConsulta.disabled = true;
        borrarConsulta.style.cursor = 'not-allowed';
        borrarConsulta.style.opacity = .5;
    } else {
        console.log('Hay información para borrar');
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
                console.log('Email válido');
            }
            e.target.style.borderColor = '#54e346';

        } else {
            e.target.style.borderColor = 'red';
            mostrarError('Email no válido');
        }
    } else {
        const eliminarError = document.getElementById('mensajeError');
        if(eliminarError) {
            eliminarError.remove();
            emailCampo.style.borderColor = '#e0e0e0';
        }
    }


    if(nombreCampo.value !== '' && er.test(emailCampo.value) && textoCampo.value !== '') {
        console.log('Pasaste la validación');
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
    mensajeError.style.padding = '1vw';
    mensajeError.style.borderRadius = '.5vw';
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























// ENVIAR EL FORMULARIO
enviarConsulta.addEventListener('click', function() {
    let nombreConsulta = document.getElementById('nombreCosulta').value;
    let emailConsulta = document.getElementById('emailCosulta').value;
    let textoConsulta = document.getElementById('textoCosulta').value;
})


