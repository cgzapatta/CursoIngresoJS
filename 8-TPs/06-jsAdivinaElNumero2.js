/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/


	var numeroSecreto=101;
	var numeroIngresado=101;
	var contadorIntentos=0;
	var mensaje;
	var contadorMensaje;

function comenzar()
{
	if(numeroSecreto==numeroIngresado)
	{
	numeroSecreto = (Math.random()*100)+1;
	numeroSecreto = Math.floor(numeroSecreto);
	//Alert generado para testear
	alert("Numero secreto: " + numeroSecreto + "\nShhhhh...");
	//Alert generado para testear
	}
	else
	{
		alert("El juego ya comenzó");
	}
}

function verificar()
{
	if(numeroSecreto!=101)
	{
		contadorIntentos=contadorIntentos+1;
		txtIdIntentos.value=contadorIntentos;
		numeroIngresado = txtIdNumero.value;

		if(numeroSecreto == numeroIngresado)
		{
			numeroSecreto=101;
			numeroIngresado=101;
			contadorMensaje=contadorIntentos;
			contadorIntentos=0;
			txtIdIntentos.value=0;

			if(contadorMensaje<6)
			{
				switch(contadorMensaje)
				{
					case 1:
						alert("Ganó con " + contadorMensaje + " intento" + "\nEs usted un Psíquico" + "\nYa puede volver a comenzar");
						break;
					case 2:
						alert("Ganó con " + contadorMensaje + " intentos" + "\nExcelente percepción" + "\nYa puede volver a comenzar");
						break;
					case 3:
						alert("Ganó con " + contadorMensaje + " intentos" + "\nEsto es suerte" + "\nYa puede volver a comenzar");
						break;
					case 4:
						alert("Ganó con " + contadorMensaje + " intentos" + "\nExcelente técnica" + "\nYa puede volver a comenzar");
						break;
					case 5:
						alert("Ganó con " + contadorMensaje + " intentos" + "\nUsted está en la media" + "\nYa puede volver a comenzar");
						break;
				}
			}
			else
			{
				if(contadorMensaje>10)
				{
					alert("Ganó con " + contadorMensaje + " intentos" + "\nAfortunado en el amor!!" + "\nYa puede volver a comenzar");
				}
				else
				{
					alert("Ganó con " + contadorMensaje + " intentos" + "\nFalta tecnica" + "\nYa puede volver a comenzar");
				}

			}
		}
		else
		{
			if(numeroSecreto>numeroIngresado)
			{
				alert("Falta...");
			}
			else
			{
				alert("Se pasó...");
			}
		}
	}
	else
	{
		alert("Primero debe iniciar el juego");
	}
}