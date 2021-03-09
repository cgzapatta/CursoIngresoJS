/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;

	var mayorTemperatura;
	var nombreMayorTemperatura;
	var banderaTemperatura;

	var mayoresViudos;

	var hombresSolterosViudos;

	var terceraEdadTemperaturaAlta;

	var cantidadSolteros;
	var edadTotalSolteros;
	var promedioEdadSolteros;

	

	banderaTemperatura=true;
	seguir=true;
	mayoresViudos=0;
	hombresSolterosViudos=0;
	terceraEdadTemperaturaAlta=0;
	cantidadSolteros=0;
	edadTotalSolteros=0;
	promedioEdadSolteros=0;


	while(seguir==true)
	{
		nombre=prompt("Ingrese su nombre");
		while(nombre=="" || isNaN(nombre)==false)
		{
			nombre=prompt("Reingrese su nombre");
		}

		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<1)
		{
			edad=prompt("Reingrese su edad");
		}

		sexo=prompt("Ingrese su sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Reingrese su sexo");
		}

		estadoCivil=prompt("Ingrese su estado civil");
		while(isNaN(estadoCivil)==false || estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("Reingrese su estado civil");
		}

		temperaturaCorporal=prompt("Ingrese su temperatura corporal");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<1)
		{
			temperaturaCorporal=prompt("Reingrese su temperatura corporal");
		}

		if(banderaTemperatura==true || temperaturaCorporal>mayorTemperatura)
		{
			nombreMayorTemperatura=nombre;
			mayorTemperatura=temperaturaCorporal;
			banderaTemperatura=false;
		}

		if(edad>17 && estadoCivil=="viudo")
		{
			mayoresViudos++;
		}

		if((sexo=="m" && estadoCivil=="viudo") || (sexo=="m" && estadoCivil=="soltero"))
		{
			hombresSolterosViudos++;
		}

		if(edad>60 && temperaturaCorporal>38)
		{
			terceraEdadTemperaturaAlta++;
		}

		if(estadoCivil=="soltero" && sexo=="m")
		{
			cantidadSolteros++;
			edadTotalSolteros=edadTotalSolteros+edad;
		}
		seguir=confirm("desea seguir?");
	}


	if(cantidadSolteros!=0)
	{
		promedioEdadSolteros=edadTotalSolteros/cantidadSolteros;
	}
	else
	{
		promedioEdadSolteros="No hay hombres solteros";
	}
	



	document.write("Persona con mayor temperatura corporal: "+nombreMayorTemperatura+" - Temperatura: "+mayorTemperatura);
	document.write("<br>"+"Mayores de edad viudos: "+mayoresViudos);
	document.write("<br>"+"Cantidad hombres solteros o viudos: "+hombresSolterosViudos);
	document.write("<br>"+"Personas de la tercera edad con 38 grados o mas: "+terceraEdadTemperaturaAlta);
	document.write("<br>"+"Promedio de edad entre hombres solteros: "+promedioEdadSolteros);
	
}
