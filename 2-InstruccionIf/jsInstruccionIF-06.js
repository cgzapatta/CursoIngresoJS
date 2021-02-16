function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 17) {
		alert("Es Mayor");
	}
	else {
		if(edad < 13){
		alert("Es niño");	
		}
		else {
			alert("Es adolescente")
		}
	}
}//FIN DE LA FUNCIÓN