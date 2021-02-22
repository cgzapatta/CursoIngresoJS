function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="FRIO";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje="CALOR";
			break;
	}
	alert(mensaje);
}