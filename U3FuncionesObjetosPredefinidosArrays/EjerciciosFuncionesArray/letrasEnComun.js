//Realizar una función que reciba como argumento un array con dos elementos de tipo cadena y devuelva true si en el primer elemento de matriz
//se encuentran todas las letras del segundo elemento de la matriz. Por ejemplo, ['javascript', 'Javascript'] debe devolver true;
//['java', 'Javascript'], false; ['Javascript','java'], true.
//['javascript', 'Javascript'] true;
//['java', 'Javascript'], false;
//['Javascript','java'], true.


function mismasLetras(array){
    

    let array1 = array[0].split('');
    let array2 = array[1].split('');
    let resultado = [];
    let noquiero;
    if(array1.length > array2.length) return document.write(`No se puede comparar ${array2} con ${array1} porque tiene menos caracteres`);

    for (let i = 0; i < array1.length; i++) {
       
        for (let j = 0; j < array2.length ; j++) {
           
 
                console.log('array1 ' + i +' de '+ ' array2 '+ j+ ' estoy en el segundo array');
             
            
            if(array1[i] == array2[j]){
                
                resultado += array1.splice(i,1);
                noquiero += array2.splice(j,1);
                console.log('guardo ' + resultado)
                console.log(array1[i] + " 2ª "+ array2[j]); 
                j=0;
            }else{
                console.log(' no esta ' + array1[i] +' no la quiero ' + " 2ª "+ array2[j]); 
            }
             
        }
    }

   return document.write(`Estas son las letras que he encontrado: ${resultado} <br>`);


}
