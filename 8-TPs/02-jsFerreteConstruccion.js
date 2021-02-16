/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var elLargo;
	var elAncho;
	var elPerimetro;
	var elAlambre;

	elLargo = txtIdLargo.value;
	elAncho = txtIdAncho.value;

	elLargo = parseInt(elLargo);
	elAncho = parseInt(elAncho);

	elPerimetro = (elLargo + elAncho) * 2;

	elAlambre = elPerimetro * 3;

	alert("Largo de alambre necesario: " + elAlambre);
}

function Circulo () 
{
	var elRadio;
	var elPerimetro;
	var elAlambre;

	elRadio = txtIdRadio.value;

	elRadio = parseInt(elRadio);

	elPerimetro = 2 * Math.PI * elRadio;

	elAlambre = elPerimetro * 3;

	elAlambre = elAlambre.toFixed(2);

	alert("Largo de alambre necesario: " + elAlambre);
}

function Materiales () 
{
	var elLargo;
	var elAncho;
	var laSuperficie;
	var elCemento;
	var laCal;

	elLargo = txtIdLargo.value;
	elAncho = txtIdAncho.value;

	elLargo = parseInt(elLargo);
	elAncho = parseInt(elAncho);

	laSuperficie = elLargo * elAncho;

	elCemento = laSuperficie * 2;

	laCal = laSuperficie * 3;

	alert("Materiales necesarios" + "\nBolsas de cementos: " + elCemento + "\nBolsas de cal: " + laCal);
}