(function(){

    let arrayAleatorio;
    let numPar;
    let numImpar;
    let resultado;
    
    
    arrayAleatorio = generarArray(15,8);
    numPar = productoPar(arrayAleatorio);
    numImpar = productoImpar(arrayAleatorio);
    resultado = iguales(numPar,numImpar);
        
        
    /*** FUNCIONES ***/
    //Función que genera un array aleatorio 
    function generarArray(max, min){
        let aux;
        let tamaño = generaNumAleatorio(min, max);
        let array= [];
        if(min > max) {aux = min; min = max; min =aux;}

        array.length = tamaño;
    
        for (let i = 0; i < array.length; i ++) {
            array[i] = Math.floor(Math.random() * 100 +2); 
        }
    
        return array;
    }

    //Función que genera un número aleatorio 
    function generaNumAleatorio(min, max){
      return Math.floor(Math.random() * (max  - min) + min );  
    }
 
    //Función que multiplica los números que estan en las posiciones impares. 
    function productoImpar(array){
        let resul = array.reduce((acc, v,p,a) => {(p % 2 == 0) ? acc *= v : v;return acc;},1);
        return resul;
    }
    
    //Función que multiplica los números que estan en las posiciones pares.
    function productoPar(array){
        let resul = array.reduce((acc, v,p,a) => {(p % 2 != 0) ? acc *= v: v; return acc;},1);
        return resul;
    }
    
    //Función que compara los productos.
    function iguales(n1, n2){
        let resultado;
		(n1 === n2 ) ? resultado = 'iguales' : resultado = 'no iguales'; return resultado;
    }
        
        return document.write("Matriz generada: ["+arrayAleatorio+"]<br>Producto pares: "+numPar+"<br>Producto impares: "+numImpar+"<br>Comparación de resultados: "+resultado+"<br>");
    })();
    
    
    