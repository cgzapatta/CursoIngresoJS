function mostrar()
{
	//tomo la hora
	var horaDelDia=txtIdHora.value;
	horaDelDia=parseInt(horaDelDia);
	
	switch (horaDelDia)
	{
		case 8:
		case 9:
		case 10:
			alert("Es de mañana.");
			break;
		default:
	}
}//FIN DE LA FUNCIÓN