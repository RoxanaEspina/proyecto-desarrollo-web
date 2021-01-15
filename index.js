function cotizador(){

    var montoTotal = 0;
    var contador = 0;
    
    for(var i = 1; i<=3; i++) {
        if( document.querySelector('#check-curso'+i).checked ) { 
            contador = contador + 1;
            montoTotal = montoTotal + parseFloat(document.querySelector('#check-curso'+i).value);
        }
    }

    if(contador >= 2)
        montoTotal = montoTotal - (montoTotal * 0.2);

    
    document.querySelector('#total').textContent = montoTotal;

}


var input = document.querySelector("#buscar");


input.addEventListener("keyup", function(event) {
 
  if (event.keyCode === 13) {
    
    event.preventDefault();
   
    document.querySelector("#boton").click();
  }
});

function buscarCurso() {

    console.log("entró aqui")

    var texto = input.value.toLowerCase();

    if( texto === "desarrollo web" || texto === "base de datos" || texto === "diseño de estilo" ) {
        alert('¡El curso existe!');
    } else {
        alert('¡El curso no existe!');
    }  
    
}

function mensaje() {  

    var nombre = document.querySelector('#nombre').value;
    var email = document.querySelector('#email').value;
    var telefono = document.querySelector('#telefono').value;
    var observacion = document.querySelector('#observacion').value;

    if(nombre != "" && email != "" && telefono != "" && observacion !="")
        alert('¡Información enviada!');
}