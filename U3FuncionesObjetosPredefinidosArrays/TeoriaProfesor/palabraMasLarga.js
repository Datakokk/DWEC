function palabraMasLarga(frase){
    
    return frase
                .split('')
                .filter(charOk)
                .join('')
                .split(' ')
                .reduce(palabraMayor,""); 
}

function palabraMayor(p1,p2){
    return  (p1.length > p2.length) ? p1 : p2;
}

function charOk(c){
    return ("!¡¿?.:;/\\,*\"+-&".indexOf(c) === -1);
}




