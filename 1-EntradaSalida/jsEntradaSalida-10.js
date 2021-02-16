/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var elImporte;
	var elResultado;
	var elDescuento;

	elImporte = txtIdImporte.value;

	elImporte = parseInt(elImporte);

	elDescuento = elImporte * 25/100;

	elResultado = elImporte - elDescuento;

	txtIdResultado.value = elResultado; 

}
