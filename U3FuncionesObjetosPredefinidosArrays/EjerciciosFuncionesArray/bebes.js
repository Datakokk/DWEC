// 1. ¿Cuántos nombres comienzan por …?
// 2. ¿Cuántos nombres tienen la letra …?
// 3. Crear un array con todos los nombres que empiecen por…?.
// 4. ¿Está tu nombre el la lista?
// 5. El primer nombre en orden alfabético
// 6. ¿Cuántas veces aparece la letra … en todos los nombres?
// 7. ¿Cuál es el máximo número de vocales en un nombre?
// 8. ¿Cuántos nombres tienen el máximo número de vocales?


const niños = `LUCAS
HUGO
MARTIN
DANIEL
PABLO
ALEJANDRO
MATEO
ADRIAN
ALVARO
MANUEL
LEO
DAVID
MARIO
DIEGO
JAVIER
ENZO
IZAN
MARCOS
MARCO
ALEX
CARLOS
SERGIO
MARC
ANTONIO
BRUNO
MIGUEL
GONZALO
JORGE
JUAN
ANGEL
DYLAN
NICOLAS
OLIVER
THIAGO
ERIC
IKER
GABRIEL
JOSE
HECTOR
IVAN
ADAM
GAEL
DARIO
SAMUEL
VICTOR
RODRIGO
RUBEN
LUCA
JESUS
AARON
RAUL
FRANCISCO
GUILLERMO
IAN
ERIK
PEDRO
JAIME
AITOR
PAU
RAFAEL
ALBERTO
MOHAMED
LUIS
JOEL
JULEN
SAUL
UNAI
POL
MARTI
RAYAN
ANDRES
ISMAEL
NIL
FERNANDO
ASIER
JAN
SANTIAGO
LIAM
ALONSO
ALEIX
BIEL
ALAN
ARNAU
YOUSSEF
OSCAR
IGNACIO
ISAAC
CRISTIAN
MIGUEL ANGEL
MATIAS
AMIR
NEIZAN
NOAH
JOAN
AXEL
TEO
ENRIQUE
IMRAN
OMAR
MAURO
`;

const niñas = `
LUCIA
SOFIA
MARIA
MARTINA
PAULA
JULIA
DANIELA
VALERIA
ALBA
EMMA
CARLA
SARA
NOA
CARMEN
CLAUDIA
VALENTINA
ALMA
ANA
CHLOE
MARTA
OLIVIA
ELENA
ADRIANA
LAIA
VEGA
VERA
LOLA
IRENE
JIMENA
ALEJANDRA
LAURA
INES
CANDELA
MIA
TRIANA
AITANA
ABRIL
LARA
CARLOTA
ARIADNA
ALICIA
MARINA
CLARA
ROCIO
NORA
MANUELA
BLANCA
VICTORIA
AINHOA
ANDREA
LEYRE
ANGELA
LEIRE
NEREA
CELIA
EVA
AINARA
ZOE
ELSA
NATALIA
ISABEL
GALA
LIA
IRIA
AINA
ONA
MAR
AFRICA
LUNA
CRISTINA
CAYETANA
AMIRA
AROA
GABRIELA
IRIS
MARA
NURIA
MALAK
CAROLINA
JANA
JULIETA
CLOE
ARLET
HELENA
ALEXIA
DIANA
NAIA
AYA
SALMA
PAOLA
BERTA
INDIA
ELIA
ANNA
FATIMA
ADARA
NOUR
NAIARA
NAHIA
ELISA
`

// 1. ¿Cuántos nombres comienzan por …?
function primeraLetra(letra){
                 return niños
                        .concat(niñas)
                        .split("\n")
                        .filter(v => v.length)
                        .filter(v => v.startsWith(letra))
                        .length;
}

// 2. ¿Cuántos nombres tienen la letra …?
function cantidadNombres(letra){
                return niños
                        .concat(niñas)
                        .split("\n")
                        .filter(v => v.length)
                        .filter(v => v.includes(letra))
                        .length;
}

//3. Crear un array con todos los nombres que empiecen por…?.
function arrayPrimeraLetra(letra){
    return niños
           .concat(niñas)
           .split("\n")
           .filter(v => v.length)
           .filter(v => v.startsWith(letra));
}

// 4. ¿Está tu nombre el la lista?
function coincideNombre(nombre){
    let res = niños
           .concat(niñas)
           .split("\n")
           .filter(v => v.length)
           .filter(v => (v == nombre)).length;
           return (res > 0 ? console.log("Si esta") :console.log("No esta"));
}

// 5. El primer nombre en orden alfabético
function primerNombreAlfabeticamente(){
       return niños
              .concat(niñas)
              .split("\n")
              .filter(v => v.length)
              .sort()
              .shift();
}

// 6. ¿Cuántas veces aparece la letra … en todos los nombres?
function cantidadLetraTodosNombres(letra){
       return niños
              .concat(niñas)
              .split("\n")
              .filter(v => v.length)
		.join('')
              .split('')
              .filter(v => v == letra)
              .length;
}

// 7. ¿Cuál es el máximo número de vocales en un nombre?
function maxNumVocalesNombre(){
let resultado= niños
              .concat(niñas)
              .split("\n")
              .filter(v => v.length)
              .map(v => v.match(/[a,e,i,o,u]/gi).length);
	   
		return  Math.max(...resultado);
			  
}

// 8. ¿Cuántos nombres tienen el máximo número de vocales?
function NombresMaxVocales(){
       return  niños
               .concat(niñas)
               .split("\n")
               .filter(v => v.length)
               .map(v => v.match(/[a,e,i,o,u]/gi).length)
               .filter(v => v == maxNumVocalesNombre())
               .length;
               
}