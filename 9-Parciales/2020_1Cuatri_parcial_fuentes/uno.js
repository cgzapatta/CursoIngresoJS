/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/

//Zapatta, Carlos German.

function mostrar()
{
	var i;
	var continente;
	var pais;
	var cantidadHabitantes;
	var nivelPobreza;
	var temperaturaMinima;
	var seguir;

	seguir="si";

	while(seguir=="si")
	{
		//VALIDAR OPCIONES
		continente=prompt("Ingreses continente");
		continente=continente.toLowerCase();
		while(continente!="america" && continente!="asia" && continente!="europa" && continente!="africa" && continente!="oceania")
		{
			continente=prompt("DATO INCORRECTO\nReingrese continente");
			continente=continente.toLowerCase();
		}
		//VALIDAR UNA PALABRA
		pais=prompt("Ingrese país");
		pais=pais.toLowerCase();
		while(pais=="" || (isNaN(pais)==false))
		{
			pais=prompt("DATO INCORRECTO\nReingrese país");
			pais=pais.toLowerCase();
		}
		//VALIDAR CIFRA
		cantidadHabitantes=prompt("Ingrese cantidad de habitantes en millones");
		cantidadHabitantes=parseInt(cantidadHabitantes);
		while(isNaN(cantidadHabitantes)==true || cantidadHabitantes>7000 || cantidadHabitantes<1)
		{
			cantidadHabitantes=prompt("DATO INCORRECTO\nReingrese cantidad de habitantes en millones");
			cantidadHabitantes=parseInt(cantidadHabitantes);
		}
		//VALIDAR DOBLE
		nivelPobreza=prompt("Ingrese nivel de pobreza");
		nivelPobreza=nivelPobreza.toLowerCase();
		while ((nivelPobreza!="pobre" && nivelPobreza!="rico" && nivelPobreza!="muy rico") || (continente=="europa" && nivelPobreza=="pobre"))
		{
			nivelPobreza=prompt("Reingrese nivel de pobreza\nTenga en cuenta que en europa no hay paises pobres");
			nivelPobreza=nivelPobreza.toLowerCase();
		}
		//VALIDAR SEGUIR
		seguir=prompt("Desea seguir?")
		seguir=seguir.toLowerCase();
		while(seguir!="si" && seguir!="no")
		{
			seguir=prompt("DATO INCORRECTO\nDesea seguir?");
			seguir=seguir.toLowerCase();
		}
	}
	//MAYOR ENTRE 3 VALORES
	if(num1>num2 && num1>num3)
	{
		alert(num1);
	}
	else
	{
		if(num2>num3)
		{
			alert(num2);
		}
		else
		{
			alert(num3);
		}
	}

	

}





