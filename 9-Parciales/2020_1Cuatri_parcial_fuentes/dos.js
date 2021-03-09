/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  var tipo;
  var precio;
  var cantidad;
  var cantidadBolsasArena;
  var cantidadBolsasCal;
  var cantidadBolsasCemento;
  var precioBolsaArena;
  var precioBolsaCal;
  var precioBolsaCemento;
  var seguirPidiendo;
  var tipoTomado;
  var cantidadTomado;
  var precioTomado;
  var pedirTomado;
  var totalBolsas;
  var descuento;
  var importeTotal;
  var importeTotalCemento;
  var importeTotalCal;
  var importeTotalArena;
  var respuestaSeguir;
  var importeFinal;
  var mensajeBolsas;
  var mensajeCaro;

  seguirPidiendo=0;
  tipoTomado=0;
  cantidadTomado=0;
  precioTomado=0;
  pedirTomado=0;
  totalBolsas=0;
  cantidadBolsasArena=0;
  cantidadBolsasCal=0;
  cantidadBolsasCemento=0;
  importeTotal=0;
  importeTotalArena=0;
  importeTotalCemento=0;
  importeTotalCal=0;
  precioBolsaArena=0;
  precioBolsaCal=0;
  precioBolsaCemento=0;
  importeFinal=0;
  descuento=0;

  while(seguirPidiendo==0)
  {
  	while(tipoTomado==0)
  	{
  		tipo=prompt("¿Que desea comprar? \nIngrese: arena, cal o cemento");
  		tipo=tipo.toLowerCase();
  		if(tipo=="arena" || tipo=="cal" || tipo=="cemento")
  		{
  			tipoTomado=1;
  		}
  		else
  		{
  			alert("Nombre ingresado erroneo");
  		}
  	}
  	tipoTomado=0;
  	alert(tipo);
  	while(cantidadTomado==0)
  	{
  		cantidad=prompt("Ingrese cantidad de bolsas");
  		cantidad=parseInt(cantidad);
  		if(cantidad>0)
  		{
  			cantidadTomado=1
  		}
  		else
  		{
  			alert("Cantidad erronea");
  		}

  	}
  	cantidadTomado=0;
  	alert(cantidad);
  	while(precioTomado==0)
  	{
  		precio=prompt("Ingrese precio de la bolsa");
  		precio=parseInt(precio);
  		if(precio>0)
  		{
  			precioTomado=1;
  		}
  		else
  		{
  			alert("Precio erroneo");
  		}
  	}
  	precioTomado=0;
  	alert(precio);
  	switch(tipo)
  	{
	  	case "arena":
	  		cantidadBolsasArena=cantidadBolsasArena+cantidad;
	  		cantidadBolsasArena=parseInt(cantidadBolsasArena);

	  		precioBolsaArena=precioBolsaArena+precio;
	  		precioBolsaArena=parseInt(precioBolsaArena);

	  		break;
	  	case "cal":
	  		cantidadBolsasCal=cantidadBolsasCal+cantidad;
	  		cantidadBolsasCal=parseInt(cantidadBolsasCal);

	  		precioBolsaCal=precioBolsaCal+precio;
	  		precioBolsaCal=parseInt(precioBolsaCal);

	  		break;
	  	case "cemento":
	  		cantidadBolsasCemento=cantidadBolsasCemento+cantidad;
	  		cantidadBolsasCemento=parseInt(cantidadBolsasCemento);

	  		precioBolsaCemento=precioBolsaCemento+precio;
	  		precioBolsaCemento=parseInt(precioBolsaCemento);

	  		break;
 	}
 	totalBolsas=totalBolsas+cantidad;

 	while(pedirTomado==0)
  	{
  		respuestaSeguir=prompt("Desea pedir otro producto? \nIngrese si o no");
  		switch(respuestaSeguir)
  		{
  			case "si":
  				pedirTomado=1;
  				break;
  			case "no":
  				pedirTomado=1;
  				seguirPidiendo=1;
  				break;
  			default:
  				alert("Respuesta incorrecta");
  				break;
  		}
  	}
  	pedirTomado=0;
  	
  }

  

  if(totalBolsas>10 && totalBolsas<31)
  {
  	descuento=15;
  }
  if(totalBolsas>30)
  {
  	descuento=25;
  }
  

  if(cantidadBolsasCemento>cantidadBolsasCal && cantidadBolsasCemento>cantidadBolsasArena)
  {
  	mensajeBolsas="Hay mas bolsas de cemento";
  }
  else
  {
  	if(cantidadBolsasCal>cantidadBolsasArena)
  	{
  		mensajeBolsas="Hay mas bolsas de cal";
  	}
  	else
  	{
  		mensajeBolsas="Hay mas bolsas de arena";
  	}
  }

  if(precioBolsaCemento>precioBolsaCal && precioBolsaCemento>precioBolsaArena)
  {
  	mensajeCaro="El mas caro es el cemento";
  }
  else
  {
  	if(precioBolsaCal>precioBolsaArena)
  	{
  		mensajeCaro="El mas caro es la cal";
  	}
  	else
  	{
  		if(precioBolsaArena>precioBolsaCal && precioBolsaArena>precioBolsaCemento)
  		{
  			mensajeCaro="El mas caro es la arena";
  		}
  		else
  		{
  			mensajeCaro="Todos valen lo mismo";
  		}
  		
  	}
  }

  importeTotalCemento=cantidadBolsasCemento*precioBolsaCemento;
  importeTotalCal=cantidadBolsasCal*precioBolsaCal;
  importeTotalArena=cantidadBolsasArena*precioBolsaArena;

  importeTotal=importeTotalCemento+importeTotalCal+importeTotalArena;
  importeTotal=parseInt(importeTotal);

  importeFinal=importeTotal-(importeTotal*(descuento/100));

  if(descuento==0)
  {
  	alert("Importe total: "+importeTotal);
  }
  else
  {
  	alert("Importe con descuento: "+importeFinal);
  }
  alert(mensajeBolsas);
  alert(mensajeCaro);
}
