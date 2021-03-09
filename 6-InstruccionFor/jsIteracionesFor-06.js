function mostrar()
{
	var i;
	var numero;
	var contador;

	contador=0;

	numero=prompt("Ingrese un numero");

	for(i=1; i<numero; i++)
	{
		if(i%2==0)
		{
			document.write(i+"<br>");
			contador++;
		}
	}
	document.write("Cantidad de pares: "+contador);
}