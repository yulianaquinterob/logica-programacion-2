const temperatura = document.getElementById('temperatura'); 
const botonVerificar = document.getElementById('boton-convertir'); 
const resultado = document.getElementById('resultado'); 

botonVerificar.addEventListener('click', () => {
    const valorIngresado = temperatura.value;

    if (valorIngresado === "" || isNaN(valorIngresado)) {

        resultado.innerHTML = ` El valor ingresado no es válido. <br>
        Ingrese un valor númerico.<br>
         Ejemplo : 30 
        `
    
    temperatura.value = "";
    temperatura.focus();
         
    } else {
        const numeroValido = Number(valorIngresado);
        const convertirFahrenheit = (numeroValido * 1.8) + 32;
        const convertirKelvin = numeroValido + 273.15;
       
    
    resultado.innerHTML = `
    Temperatura en grados fahrenheit: ${convertirFahrenheit} <br>
    Temperatura en grados Kelvin: ${convertirKelvin}
    `
    }

});

const limpiarBusqueda = document.getElementById('boton-limpiar');

limpiarBusqueda.addEventListener('click', () =>{
    temperatura.value = "";
    resultado.innerHTML = "";
    temperatura.focus();

});

