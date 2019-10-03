//Si no te importa cargarte el array original
function trocearArrayEnTrozos(array, tamTrozos){
    const nuevoArray = [];
    let trozo;

    while(array.length >= 1){
        trozo = array.splice(0,tamTrozos);
        nuevoArray.push(trozo);
    }
    return nuevoArray;

}

//Conservando el array original
function trocearArrayEnTrozos(array, tamTrozos){
    const nuevoArray = [];
    let trozo;
    let contador = 0;

    while(array.length > contador){
        trozo = array.slice(contador,(contador + tamTrozos));
        nuevoArray.push(trozo);
        contador += tamTrozos;
    }
    return nuevoArray;

}


