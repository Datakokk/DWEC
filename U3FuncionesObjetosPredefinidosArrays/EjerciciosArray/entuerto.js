/**
 * 
 * La función devuelve un array con array vacios
 */
function trocearArrayEnTrozos(array, tamTrozo) {
    const nuevoArray = [];
  
    let j = 0, cont = 0;
    for(let i = 0; i < array.length; i++) {
      var nuevoNuevoArray = [];//Declaramos un array vacio en cada iteración, que es la que se guarda en el nuevoArray[] dentro del else.
      if(j < tamTrozo) {
        nuevoNuevoArray[j++] = array[i];
        
      } else {//El i no entra al if por lo tanto el valor de esa posicion no su vuelca en nuevoNuevoArray
        j = 0;
        nuevoArray[cont++] = nuevoNuevoArray;
      }
      //En la ultima iteración de la condición (j < tamTrozo) se acaba la ejecucion del programa, el ultimo array no es almacenado en nuevoArray[].
    }
  
    return nuevoArray;
  }

  //Solución a partir del estado de la función anterior.
  function trocearArrayEnTrozos(array, tamTrozo) {
    const nuevoArray = [];
  	let nuevoNuevoArray = [];
    let j = 0, cont = 0;
    for(let i = 0; i < array.length; i++) {
      
      if(j < tamTrozo) {
        nuevoNuevoArray[j] = array[i];
		    j++;
        
        if(i== array.length - 1){
          nuevoArray[cont] = nuevoNuevoArray;
        }
      }else{
        nuevoArray[cont] = nuevoNuevoArray;
		    nuevoNuevoArray = [];
		    j = 0;
        cont++;
		    i--;
		  }
    }
  
    return nuevoArray;
  }
  // trocearArrayEnTrozos(["a", "b", "c", "d"], 2); // devuelve [["a", "b"], ["c", "d"]].
  // trocearArrayEnTrozos([0, 1, 2, 3, 4, 5], 3); // devuelve [[0, 1, 2], [3, 4, 5]].
  // trocearArrayEnTrozos([0, 1, 2, 3, 4, 5], 4); // devuelve [[0, 1, 2, 3], [4, 5]].
  // trocearArrayEnTrozos([0, 1, 2, 3, 4, 5, 6], 3); // devuelve [[0, 1, 2], [3, 4, 5], [6]].
  // trocearArrayEnTrozos([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // devuelve [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
