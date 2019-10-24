(function(){

    let arrayAleatorio;
    let numPar;
    let numImpar;
    let resultado;
    
    
    arrayAleatorio = generarArray(15,8);
    resultado = calculoProductos(arrayAleatorio);
        
          
    /*** FUNCIONES ***/
    //Función que genera un array aleatorio 
    function generarArray(max, min){
        
        let tamaño = generaNumAleatorio(min, max);
        let array= [];

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
    
    //
    function calculoProductos(array){
         
        const productos = array.reduce((arrayProductos,v,i)=>{

          (i % 2) ? arrayProductos[1] *= v : arrayProductos[0] *=v;
          return arrayProductos;

        },[1, 1]);

       const resul =  (productos[0] === productos[1]);

       return document.write("Matriz generada: ["+arrayAleatorio+"]<br>Producto pares: "+productos[2] +"<br>Producto impares: "+productos[0] +"<br>Comparación de resultados: "+resultado+"<br>");
    }
        
        // return document.write("Matriz generada: ["+arrayAleatorio+"]<br>Producto pares: "+productos[2] +"<br>Producto impares: "+productos[0] +"<br>Comparación de resultados: "+resultado+"<br>");


    })();
    
    
    