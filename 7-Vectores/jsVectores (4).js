/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
// Taboada Ezequiel 1°D

function mostrar()
{
    let seguir=true;
    let producto;
    let precio;
    let bolsas;
    let precioBruto;
    let precioConDescuento;
    let prodCaro;
    let precioMayor;
    let prodMasBolsas;
    let cantidadBolsas;
    let cantidadArena=0;
    let cantidadCal=0;
    let cantidadCemento=0;
    let descuento=0;
    let precioCemento=0;
    let precioCal=0;
    let precioArena=0;
    let costoArena;
    let costoCal;
    let costoCemento;
    let flagProd=0;


    while (seguir==true) {
      producto=prompt("Ingrese el producto","cal - arena - cemento");
      producto=producto.toLowerCase();
      while (producto!="cal" && producto!="arena" && producto!="cemento") {
        producto=prompt("producto invalido!!  reingrese el producto");     
      }
      
      precio=parseFloat(prompt("ingrese el precio"));
      while (isNaN(precio)|| precio<0) {
        precio=parseFloat(prompt("Precio erroneo!!!  Reingrese el Precio"));			
      }

      bolsas=parseInt(prompt("Ingrese cantidad de bolsas"));
      while (isNaN(bolsas)|| bolsas<0) {
        bolsas=parseInt(prompt("cantidad invalida!! Ingrese cantidad de bolsas"));       
      }

      if (producto=="arena") {
        cantidadArena+=bolsas; 
        precioArena+=precio;  

      } else {if (producto=="cal") {
        cantidadCal+=bolsas;
        precioCal+=precio;    
            
      } else {
        cantidadCemento+=bolsas;
        precioCemento+=precio;
      }        
      }             

      if (flagProd==0 || precio>precioMayor) {
        precioMayor=precio;
        prodCaro=producto;
        flagProd=1;
      }

      seguir=confirm("¿quiere seguir comprando?");
    }

    if (cantidadArena>cantidadCemento && cantidadArena>cantidadCal) {
      prodMasBolsas="hay mas bolsas de arena";
      
    } else {if (cantidadCal>cantidadCemento) {
      prodMasBolsas="hay mas bolsas de cal";
      
    } else {
      prodMasBolsas="hay mas bolsas de cemento";
    }    
    }   

    cantidadBolsas=cantidadCemento+cantidadCal+cantidadArena;

    if (cantidadBolsas>10 && cantidadBolsas<30) {
      descuento=15;
    } else {if (cantidadBolsas>30) 
      descuento=25;      
    } 
    costoArena=precioArena*cantidadArena;
    costoCal=precioCal*cantidadCal;
    costoCemento=precioCemento*cantidadCemento;

    precioBruto=costoCemento+costoCal+costoArena;
    precioConDescuento=precioBruto-precioBruto*descuento/100; 

    console.log("El importe bruto a pagar es $"+precioBruto);
    if (descuento!=0) {
      console.log("El importe a pagar con un "+descuento+"% de descuento es $"+precioConDescuento);      
    }
    console.log(prodMasBolsas);
    console.log("El producto mas caro es: "+prodCaro);
 
}