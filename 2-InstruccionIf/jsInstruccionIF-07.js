function mostrar()
{
	var edad;
	var elEstadoCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	elEstadoCivil = estadoCivil.value;

	if(edad<18 && elEstadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN