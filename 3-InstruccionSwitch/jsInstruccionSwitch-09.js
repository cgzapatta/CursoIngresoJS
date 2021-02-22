function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var aumento;
	var descuento;
	var precio=15000;

	estacionIngresada=txtIdEstacion.value;
	destinoIngresado=txtIdDestino.value;
	
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento=20;
					descuento=0;
					break;
				case "Mar del plata":
					aumento=0;
					descuento=20;
					break;
				default:
					aumento=0;
					descuento=10;
					break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento=0;
					descuento=20;
					break;
				case "Mar del plata":
					aumento=20;
					descuento=0;
					break;
				default:
					aumento=10;
					descuento=0;
					break; 
			}
		break;
		default:
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					aumento=10;
					descuento=0;
					break;
				default:
					aumento=0;
					descuento=0;
					break; 
			}
		break;
	}

	precio=precio+(precio*(aumento/100))-(precio*(descuento/100));
	alert("Descuento: "+descuento+"%"+"\nAumento: "+aumento+"%"+"\nPrecio: "+precio);
}//FIN DE LA FUNCIÓN