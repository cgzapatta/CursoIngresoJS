function mostrar()
{
	var aleatorio;

	aleatorio = (Math.random()*10)+1;
	aleatorio = Math.floor(aleatorio);

	if(aleatorio > 3)
	{
		if(aleatorio > 8)
		{
			alert("NOTA: " + aleatorio + "\nEXCELENTE");
		}
		else
		{
			alert("NOTA: " + aleatorio + "\nAPROBÓ");
		}
	}
	else
	{
		alert("NOTA: " + aleatorio + "\nVamos, la proxima se puede.");
	}



}//FIN DE LA FUNCIÓN

/*Al presionar el Botón, asignar una nota RANDOM
 al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/