/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
	
	var numeroSecreto=101;
	var numeroIngresado=101;
	var contadorIntentos=0;

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
			alert("Ganó con " + contadorIntentos + " intentos" + "\nYa puede volver a comenzar");
			numeroSecreto=101;
			numeroIngresado=101;
			contadorIntentos=0;
			txtIdIntentos.value=0;
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