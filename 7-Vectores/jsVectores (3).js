// 1- El alumno debera ingresar:
// Nombre del alumno
// Carreta(programacion, psicologia, diseño grafico)
// Estado de la carrera: en curso - abandono - finalizado
// Sexo(femenino - masculino - nobinario)
// Edad (18 o mas)
// Nota (entre 1 y 10)

// 2- Se desconoce la cantidad de alumnos que se ingresaran.
// 3- Se deberan validar los casos resaltados en negrita.
// 4- El programa debera informar a traves del document.html:

// A. Cantidad total de alumnos de cada carrera.
// B. Cantidad total de mujeres que cursan la carrera de programacion.
// C. Cantidad de alumnos no binarios.


let nombre;
let carrera;
let estadoCarrera;
let sexo;
let edad;
let nota;
let continuar;
let cantidadProgramacion;
let cantidadPsicologia;
let cantidadDiseno;
let mujeresProgramacion;
let cantidadNoBinarios;

cantidadNoBinarios = 0;
mujeresProgramacion = 0;
cantidadProgramacion = 0;
cantidadPsicologia = 0;
cantidadDiseno = 0;
continuar = true;

while (continuar)
{
	nombre = prompt("Ingrese nombre del alumno");
	while (nombre=="" || !isNaN(nombre))
	{
		nombre = prompt("Ingrese nombre del alumno");
	}

	carrera = prompt("Ingrese Carrera");
	carrera = carrera.toLowerCase();
	while (carrera!="programacion" && carrera!="psicologia" && carrera!="diseno grafico")
	{
		carrera = prompt("Error: Ingrese Carrera, debe ser programacion, psicologia o diseno grafico");
		carrera = carrera.toLowerCase();
	}

	estadoCarrera = prompt("Ingrese el estado de la carrera");
	estadoCarrera = estadoCarrera.toLowerCase();
	while (estadoCarrera!="en curso" && estadoCarrera!= "abandono" && estadoCarrera!="finalizado")
	{
		estadoCarrera = prompt("Error: Ingrese el estado de la carrera, debe ingresar en curso, abandono o finalizado");
		estadoCarrera = estadoCarrera.toLowerCase();
	}

	sexo = prompt("Ingrese sexo");
	sexo = sexo.toLowerCase();
	while (sexo!="femenino" && sexo!="masculino" && sexo!="no binario")
	{
		sexo = prompt("Error: Ingrese sexo, debe ser femenino, masculino o no binario");
		sexo = sexo.toLowerCase();
	}

	edad = prompt("Ingrese edad");
	edad = parseInt(edad);
	while (edad<18)
	{
		edad = prompt("Ingrese edad, debe ser 18 o mas.");
		edad = parseInt(edad);
	}

	nota = prompt("Ingrese la nota");
	nota = parseInt(nota);
	while (nota<1 || nota>10)
	{
		nota = prompt("Error: Ingrese la nota, debe ser entre 1 y 10");
		nota = parseInt(nota);
	}

	if (carrera == "programacion")
	{
		cantidadProgramacion++;
		if (sexo == "femenino")
		{
			mujeresProgramacion++;
		}
	}
	else
	{
		if (carrera == "psicologia")
		{
			cantidadPsicologia++;
		}
		else
		{
			cantidadDiseno++;
		}
	}

	if (sexo == "no binario")
	{
		cantidadNoBinarios++;
	}


	continuar = confirm("Desea continuar?");
}

document.write("Cantidad de alumnos en programacion: " + cantidadProgramacion + "<br>");
document.write("Cantidad de alumnos en psicologia: " + cantidadPsicologia + "<br>");
document.write("Cantidad de alumnos en diseno grafico: " + cantidadDiseno + "<br>");
document.write("Cantidad de mujeres en programacion: " + mujeresProgramacion + "<br>");
document.write("Cantidad de alumnos no binarios: " + cantidadNoBinarios + "<br>")