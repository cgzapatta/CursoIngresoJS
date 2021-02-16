/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var elSueldo;
	var elAumento;
	var elResultado;

	elSueldo = txtIdSueldo.value;
	
	elSueldo = parseInt(elSueldo);
	elResultado = parseInt(elResultado);

	elAumento = elSueldo * 10/100;
	elResultado = elSueldo + elAumento;

	txtIdResultado.value = elResultado;
}
