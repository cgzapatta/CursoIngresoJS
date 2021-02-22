function mostrar()
{
	var mesDelAño=txtIdMes.value;
	var mensaje="A";

	switch(mesDelAño)
	{
		case "Enero":
			mensaje="Que comiences bien el año!!!";
			break;
		case "Marzo":
			mensaje="a clases!!!";
			break;
		case "Julio":
			mensaje="Se vienen las vacaciones!!!";
			break;
		case "Diciembre":
			mensaje="Felices fiestas!!!"
			break;
	}
	if(mensaje=="A")
	{

	}
	else
	{
		alert(mensaje);
	}
	
}