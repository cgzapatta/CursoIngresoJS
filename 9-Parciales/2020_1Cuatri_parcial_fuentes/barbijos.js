/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var i; //variable de control
	var tipo;
	var unidadesBarbijo;
	var unidadesJabón;
	var unidadesAlcohol;
	var precioBarbijo;
	var precioJabón;
	var precioAlcohol;
	var precioMenorAlcohol;
	var primerPrecioAlcohol;
	var mayorCantidadUnidades;
	var precioTomado;
	var unidadesTomado;
	var marcaAlcohol;
	var fabricanteAlcohol;

	i=0;
	unidadesBarbijo=0;
	unidadesJabón=0;
	unidadesAlcohol=0;
	primerPrecioAlcohol=0;
	precioTomado=0;
	unidadesTomado=0;

	while(i<2)
	{
		tipo=prompt("Tipo: Barbijo, Jabón ó Alcohol");
		
		switch(tipo)
		{
			case "Barbijo":
				while(precioTomado==0)
				{
					precioBarbijo=prompt("Ingrese el precio");
					precioBarbijo=parseInt(precioBarbijo);
					if(precioBarbijo>99 && precioBarbijo<301)
					{
						precioTomado=1;
					}
					else
					{
						alert("Precio erroneo");
					}
				}
				precioTomado=0;
				while(unidadesTomado==0)
				{
					unidadesBarbijo=prompt("Ingrese cantidad de unidades");
					unidadesBarbijo=parseInt(unidadesBarbijo);
					if(unidadesBarbijo>0 && unidadesBarbijo<1001)
					{
						unidadesTomado=1;
					}
					else
					{
						alert("Cantidad de unidades erronea");
					}
				}
				unidadesTomado=0;
				prompt("Ingrese marca del producto")
				prompt("ingrese fabricante del producto")
				break;
			case "Jabón":
				while(precioTomado==0)
				{
					precioJabón=prompt("Ingrese el precio");
					precioJabón=parseInt(precioJabón);
					if(precioJabón>99 && precioJabón<301)
					{
						precioTomado=1;
					}
					else
					{
						alert("Precio erroneo");
					}
				}
				precioTomado=0;
				while(unidadesTomado==0)
				{
					unidadesJabón=prompt("Ingrese cantidad de unidades");
					unidadesJabón=parseInt(unidadesJabón);
					if(unidadesJabón>0 && unidadesJabón<1001)
					{
						unidadesTomado=1;
					}
					else
					{
						alert("Cantidad de unidades erronea");
					}
				}
				unidadesTomado=0;
				prompt("Ingrese marca del producto")
				prompt("ingrese fabricante del producto")
				break;
			case "Alcohol":
				while(precioTomado==0)
				{
					precioAlcohol=prompt("Ingrese el precio");
					precioAlcohol=parseInt(precioAlcohol);
					if(precioAlcohol>99 && precioAlcohol<301)
					{
						if(primerPrecioAlcohol==0)
						{
							precioMenorAlcohol=precioAlcohol;
							primerPrecioAlcohol=1;
						}
						if(primerPrecioAlcohol==1 && precioAlcohol<primerPrecioAlcohol)
						{
							precioMenorAlcohol=precioAlcohol;
						}
						precioTomado=1;
					}
					else
					{
						alert("Precio erroneo");
					}
				}
				precioTomado=0;
				while(unidadesTomado==0)
				{
					unidadesAlcohol=prompt("Ingrese cantidad de unidades");
					unidadesAlcohol=parseInt(unidadesAlcohol);
					if(unidadesAlcohol>0 && unidadesAlcohol<1001)
					{
						unidadesTomado=1;
					}
					else
					{
						alert("Cantidad de unidades erronea");
					}
				}
				unidadesTomado=0;
				break;
			default:
				alert("Ingresó un producto incorrecto o mal escrito \nRespete las mayusculas y los acentos");
				break;
		}
	i++;
	}
	alert(precioMenorAlcohol);
}





/*while(PrecioTomado=0)
				{
					precioAlcohol=prompt("Ingrese el precio.");
					if(precioAlcohol>99 && precioAlcohol<301)
					{
						if(primerPrecioAlcohol==0)
						{
							precioAlcohol=precioMenorAlcohol;
							primerPrecioAlcohol=1;
						}
						if(primerPrecioAlcohol==1 && precioAlcohol<precioMenorAlcohol)
						{
							precioMenorAlcohol=precioAlcohol;
						}
						PrecioTomado=1;
					}
					else
					{
						alert("Ingresó un precio incorrecto");
					}
				}
				PrecioTomado=0;	*/