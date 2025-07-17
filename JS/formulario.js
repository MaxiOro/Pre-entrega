
function formvalid() {

    const txtnombre = document.getElementById ('Nombre').value;
    const txtemail = document.getElementById ('email').value;
    const txtconsulta = document.getElementById('mensaje').value; 
    const isValid = true;

    if(txtnombre.trim() === '' ) {
        error('error-nombre', 'El campo no puede quedar vacio');
        isValid = false;
    } else{
        hideError('error-nombre');
    }

    if (txtemail.trim() === '') {
        error('error-email', 'El email es obligatorio.');
        isValid = false;
    } else{
        hideError('error-email')
    }

    if (txtconsulta.trim() === '') {
        error('error-consulta', 'No puede enviar una consulta vacia');
        isValid = false;
    } else{
        hideError('error-consulta')}


    return isValid
}




function error(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = "✖️ " + message;
    errorElement.style.display = 'block';
}


function hideError(fieldId) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

const btnform = document.getElementById('btnform');
btnform.addEventListener('click', function(event){
    event.preventDefault();
    if(formvalid()) {
        window.location.href ="formvalido.html"
    }
        
})

/* 
*/