//Palabra mas larga, (Recursiva)
function fn(a){
    a = a.split(' ');

    if(a.length == 1){
        return a[0];
    }

    if(a[0].length >= a[1].length){
        a.splice(1.1);
        return fn(a.join(' '));
    }else{
        return fn(a.slice(1, a.length).join(' '));
    }
}

//Función que nos dice si el valor de un array es par o impar.
function parImpar(valor){
    console.log(`${valor} es ${(valor % 2) ? 
         'impar': 'par'}`)
}


numeros = [1,2,3,4,5,6,7,8];
function porCadaUno(callback, array){
    for (let i = 0; i < numeros.length; i++) {
        callback(numeros[i], i, array);
        
    }
}

/*********************************************************** */
function duplicado(valor){
    return valor * valor;
}

function transformar(callback, array){
    const nuevoArray = [];
    for (let i = 0; i < numeros.length; i++) {
        nuevoArray[i] = callback(numeros[i], i, array);
        
    }
    return nuevoArray;
}

/***********************************************************/
// Reduce()
function reducir(callback, array, acc){
    const nuevoArray = [];
    for (let i = 0; i < numeros.length; i++) {
        acc = callback(acc, numeros[i], i, array);
        
    }
    return acc;
}