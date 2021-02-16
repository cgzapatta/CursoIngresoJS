/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var elDividendo;
	var elDivisor;
	var elResto;

	elDividendo = txtIdNumeroDividendo.value;
	elDivisor = txtIdNumeroDivisor.value;

	elDividendo = parseInt(elDividendo);
	elDivisor = parseInt(elDivisor);

	elResto = elDividendo % elDivisor;

	alert("El resto es: " + elResto);
}