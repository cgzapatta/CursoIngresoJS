function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var precioUnitario = 35;
 	var factorDescuento = 0;
 	var descuento;
 	var precioFinal;
 	var marcaLampara;
 	var ingresosBrutos;

 	cantidadLamparas = txtIdCantidad.value;
 	marcaLampara = Marca.value; 

 	cantidadLamparas = parseInt(cantidadLamparas);

 	precioFinal = precioUnitario * cantidadLamparas;

	if(cantidadLamparas>5)
	{
		factorDescuento = 50;
	}
	else
	{
		if(cantidadLamparas==4 || cantidadLamparas==5)
		{
			if(cantidadLamparas==5)
			{
				if(marcaLampara == "ArgentinaLuz")
				{
					factorDescuento = 40;
				}
				else
				{
					factorDescuento = 30;
				}
			}
			else
			{
				if(cantidadLamparas==4)
				{
					if(marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
					{
						factorDescuento = 25;
					}
					else
					{
						factorDescuento = 20;
					}
				}
			}
		}
		else
		{
			if(cantidadLamparas==3)
			{
				if(marcaLampara=="ArgentinaLuz")
				{
					factorDescuento=15;
				}
				else
				{
					if(marcaLampara=="FelipeLamparas")
					{
						factorDescuento=10;
					}
					else
					{
						factorDescuento=5;
					}
				}
			}
		}
	}

	descuento = precioFinal * (factorDescuento/100);

	precioFinal = precioFinal - descuento;

	
	if(precioFinal>120)
	{
		ingresosBrutos=precioFinal*(10/100);
		precioFinal=precioFinal+ingresosBrutos;
		txtIdprecioDescuento.value=precioFinal;
		alert("IIBB Usted pagó: $" + ingresosBrutos)
	}
	else
	{
		txtIdprecioDescuento.value = precioFinal;	
	}
}
