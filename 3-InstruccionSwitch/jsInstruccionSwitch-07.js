function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch (destinoIngresado)
	{
		case "Bariloche":
			mensaje="OESTE";
			break;
		case "Cataratas":
			mensaje="NORTE";
			break;
		case "Ushuaia":
			mensaje="SUR";
			break;
		case "Mar del plata":
			mensaje="ESTE";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN