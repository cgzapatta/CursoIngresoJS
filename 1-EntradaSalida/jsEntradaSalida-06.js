/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var suma;
	var num1 = txtIdNumeroUno.value;
	var num2 = txtIdNumeroDos.value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	suma = num1 + num2;
    alert("La suma es: "+suma);
}


