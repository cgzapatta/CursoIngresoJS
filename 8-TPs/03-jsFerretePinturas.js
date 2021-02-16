/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var centígrados;
	var fahrenheit;

	fahrenheit = txtIdTemperatura.value;

	fahrenheit = parseInt(fahrenheit);

	centígrados = (fahrenheit - 32)/1.8;

	centígrados = centígrados.toFixed(2);

	alert( fahrenheit + " Fahrenheit son " + centígrados +" Grados Centígrados");
}

function CentigradosFahrenheit () 
{
	var centígrados;
	var fahrenheit;

	centígrados = txtIdTemperatura.value;

	centígrados = parseInt(centígrados);

	fahrenheit = (centígrados * 1.8) + 32;

	fahrenheit = fahrenheit.toFixed(2);

	alert( centígrados + " Grados Centígrados son " + fahrenheit +" Fahrenheit");
}


//txtIdTemperatura
