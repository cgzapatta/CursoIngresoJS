function mostrar()
{
	var edad;
	var elEstadoCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	elEstadoCivil = estadoCivil.value;

	if(edad>17 && elEstadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}
}