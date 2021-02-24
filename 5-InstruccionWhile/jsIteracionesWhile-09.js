//Zapatta, Carlos German.

function mostrar()
{
	var numeroIngresado;
	var parMenor;
	var negativoMayor;
	var contador;
	var primerPar;
	var primerNegativo;
	var faltan; 
	
	contador=0;
	faltan=10 //contador de numeros que faltan por ingresar, info para el usuario.
	primerPar=1; //bandera de primer par ingresado.
	primerNegativo=1; //bandera de primer negativo ingresado.
	parMenor="No se ingresaron pares" //valor en caso de no haber pares.
	negativoMayor="No se ingresaron negativos" //valor en caso de no haber negativos.
	
	while(contador<10)
	{
		numeroIngresado=prompt("Ingrese un numero"+"\nFaltan "+faltan+" numeros por ingresar");
		numeroIngresado=parseInt(numeroIngresado);

		while(numeroIngresado==0)
		{
			numeroIngresado=prompt("El cero no es valido"+"\nFaltan "+faltan+" numeros por ingresar");
			numeroIngresado=parseInt(numeroIngresado);
		}
		if(primerPar==1 && numeroIngresado%2==0)
		{
			parMenor=numeroIngresado;
			primerPar=0;
		}
		if(primerPar==0 && numeroIngresado%2==0 && numeroIngresado<parMenor)
		{
			parMenor=numeroIngresado;
		}
		if(primerNegativo==1 && numeroIngresado<0)
		{
			negativoMayor=numeroIngresado;
			primerNegativo=0;
		}
		if(primerNegativo==0 && numeroIngresado<0 && numeroIngresado>negativoMayor)
		{
			negativoMayor=numeroIngresado;
		}
		
		contador++;
		faltan=faltan-1;
	}
	txtIdMaximo.value=parMenor;
	txtIdMinimo.value=negativoMayor;
}
// Realizado sobre ejercicio 9.
//Zapatta, Carlos German.