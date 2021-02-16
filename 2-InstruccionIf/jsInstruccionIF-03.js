function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17){
		alert("Mayor de edad");
	}
	else{
		alert("Menor de edad");
	}
}//FIN DE LA FUNCIÓN