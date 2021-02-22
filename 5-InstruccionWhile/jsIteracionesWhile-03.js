/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.", "ayuda: es utn750");

	while(claveIngresada!="utn750")
	{
		claveIngresada = prompt("Clave Incorrecta, vuelva a intentar.", "ayuda: es utn750");
	}

	alert("Bien");
	
}//FIN DE LA FUNCIÓN
