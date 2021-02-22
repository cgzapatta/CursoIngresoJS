function mostrar()
{
	//tomo el mes
	var mesDelAño=txtIdMes.value;
	var mensaje;

	switch (mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes no tiene mas de 29 días.";
			break;
		default:
			mensaje="Este mes tiene 30 días o mas";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN