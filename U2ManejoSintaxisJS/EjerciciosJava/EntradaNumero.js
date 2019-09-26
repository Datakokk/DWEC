function pedirNumero(texto = "Introduce un número: ", numero = 18){
    let dato;
    let referencia;

    do{
        dato = prompt(texto, numero);
        referencia = isNaN(dato);
        //referencia ? alert("Debe de introducir un número:") : false;
        referencia && alert('Debe de introducir un número:');
    }while(referencia);
    
    return dato;

}    
