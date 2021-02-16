/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	suma = numeroUno + numeroDos;
	alert("El resultado de la suma es: " + suma);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	suma = numeroUno - numeroDos;
	alert("El resultado de la resta es: " + suma);	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	suma = numeroUno * numeroDos;
	alert("El resultado de la multiplicación es: " + suma);	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	suma = numeroUno / numeroDos;
	alert("El resultado de la división es: " + suma);	
}

