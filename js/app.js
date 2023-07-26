document.addEventListener('DOMContentLoaded', ()=>{
    const formulario = document.querySelector('.submit');
    const botonDismiss = document.querySelector('.dismiss');

    formulario.addEventListener('submit', enviarEmail);
    if(botonDismiss){
        botonDismiss.addEventListener('click', cerrarPagina);
    }

    function enviarEmail(e){
        e.preventDefault();
        const inputEmail = document.querySelector('.emailLabelInput').value;
        console.log(inputEmail);
        console.log('Diste click');
        if(inputEmail.trim() === ''){
            console.log('esta vacio');
        }
        if(!validarEmail(inputEmail)){
            const inputEmailClass = document.querySelector('.emailLabelInput');
            const inputEmailLabel = document.querySelector('.emailLabelError');
            inputEmailClass.classList.add('emailInputError');
            inputEmailLabel.classList.add('emailLabelErrorShow');
            return;
        }
        setTimeout(() => {
            alertaExito(inputEmail);
        }, 300);
    }

    function cerrarPagina(){
        console.log('cerrando...');

        setTimeout(() => {
            location.reload(); //para recargar la pagina 
        }, 300);
    }

})

function validarEmail(email){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; //a esto se le llama una expresion regular 
    //una expresion regular va a buscar que se cumpla ese patron
    const resultado = regex.test(email);
    return resultado;

}

function alertaExito(correo){
    //Parte Izquierda y Derecha del Newsletter
    const formulario = document.querySelector('.newsletter')
    const formularioImg = document.querySelector('.newsletterRight')
    //Escondiendo el contenido
    formulario.classList.add('hide')
    formularioImg.classList.add('hide')
    //Seleccionando el card de la alerta
    const exito = document.querySelector('.card');
    const buttonSubmit = document.querySelector('.card .buttonSubmit');
    //Removiendo la clase
    exito.classList.remove('hide')
    //Añdiendo el texto con el correo correspondiente
    const texto = document.createElement('p');
    texto.innerHTML= `
    A confirmation email has been sent to <span class="correo"> ${correo}</span>. Please open it and click the button inside to confirm your suscription
    `
    exito.insertBefore(texto, buttonSubmit);
}
