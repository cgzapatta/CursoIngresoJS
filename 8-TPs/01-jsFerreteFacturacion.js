/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	
	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;
	
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = precioUno + precioDos + precioTres;
	
	alert("La suma de los precios es: $" + suma);
}

function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	
	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;
	
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	promedio = (precioUno + precioDos + precioTres)/3;

	alert("El promedio de los precios es: $" + promedio);

}

function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var valorIva;
	var precioFinal;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;
	
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = precioUno + precioDos + precioTres;

	valorIva = suma * 21/100;

	precioFinal = suma + valorIva;

	alert("El precio final es: $" + precioFinal);

}