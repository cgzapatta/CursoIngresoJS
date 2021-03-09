/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar(){
	
	let producto
	let unidades;
	let marca;
	let fabricante;
	let precio;
	let alcoBarato;
	let fabriAlcoBarato;
	let promedio;
	let mensajeProducto;
	let unidAlcoBarato=0;
	let cantJabones=0;
	let cantAlco=0;
	let cantBarbi=0;
	let flagAlco=0;
	let barbijo=0;
	let jabon=0;
	let alcohol=0;
	let i=0;

	while (i<5) {

		producto=prompt("Ingrese el producto","'B-barbijo' 'J-jabon' 'A-alcohol'");
		producto=producto.toLowerCase();
		while (producto!='b' && producto!='j' && producto!='a') {
			producto=prompt("producto invalido!!  reingrese el producto");     
		}

		precio=parseFloat(prompt("ingrese el precio"));
		while (isNaN(precio) || (precio<100 || precio>300)) {
			precio=parseFloat(prompt("Precio erroneo!!!  Reingrese el Precio"));			
		}
		unidades=parseFloat(prompt("ingrese las unidades"));
		while (isNaN(unidades) || (unidades<0 || unidades>1000)) {
			unidades=parseFloat(prompt("Unidad incorrecta!!!  Reingrese las unidades"));			
		}
		
		fabricante=prompt("Ingrese el fabricante");
		marca=prompt("Ingrese la marca");

		if (producto=='a') {
			cantAlco+=unidades;  
			alcohol++;      
		  } else {if (producto=='j') {
			cantJabones+=unidades; 
			jabon++;       
		  } else {
			cantBarbi+=unidades;
			barbijo++;
		  }        
		  }   

		  if (flagAlco==0 || (producto=='a' && precio<alcoBarato)) {
			alcoBarato=precio;
			fabriAlcoBarato=fabricante;
			unidAlcoBarato+=unidades;
			flagAlco=1;
		}

		i++;
	}

	if (cantAlco>cantJabones || cantAlco>cantBarbi) {
		mensajeProducto="hay mas cantidad de Alcohol";
		promedio=cantAlco/alcohol;
		
	  } else {if (cantBarbi>cantJabones) {
		mensajeProducto="hay mas cantidad de Barbijo";
		promedio=cantBarbi/barbijo;
		
	  } else {
		mensajeProducto="hay mas cantidad de Jabon";
		promedio=cantJabones/jabon;
	  }    
	  }

	console.log("hay "+unidAlcoBarato+" unidades de alcohol mas barato y el fabricante es "+fabriAlcoBarato);
	console.log(mensajeProducto+" y el promedio por compra es "+promedio+" unidades");
	console.log("En total hay "+cantJabones+" unidades de jabon");

}