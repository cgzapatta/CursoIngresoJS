/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

// Ejercicio 5 BIS

function mostrar()
{	
	var elNombre;
	var laEdad;
	var elApellido;
	elNombre = txtIdNombre.value;
	laEdad = txtIdEdad.value;
	elApellido = prompt("Ingrese su apellido: ");
	alert("Usted se llama " + elNombre + " " + elApellido + " y tiene " + laEdad + " años");
}

