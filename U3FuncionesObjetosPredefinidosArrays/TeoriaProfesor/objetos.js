alumno = {
	nombre:"ANa",
	edad: 20,

}
{nombre: "ANa", edad: 20}
alumno = {
	nombre:"ANa",
	edad: 20,
	[prop]: 5

}
/*VM194:4 Uncaught ReferenceError: prop is not defined
    at <anonymous>:4:3
(anonymous) @ VM194:4*/
prop = "nota";
"nota"
alumno = {
	nombre:"ANa",
	edad: 20,
	[prop]: 5

}
//{nombre: "ANa", edad: 20, nota: 5}

let bibiotecaMath = {
	suma(a,b){return a + b;},
	multiplica(a,b){return a * b;}
}
//undefined
bibiotecaMath.suma(1,2);
//3

let alumno = {
	nombre:'Anabel',
	edad:22,
	saludo:()=>console.log(`Soy ${alumno.nombre}`)
}
undefined
alumno.saludo()
//VM773:4 Soy Anabel

let alumno = {
	nombre:'Anabel',
	edad:22,
	saludo:()=>console.log(`Soy ${this.nombre}`)
}
undefined
typeof alumno
"object"

abjA = Object.create(Object.prototype);
/*{}__proto__: 
    Objectconstructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    get __proto__: ƒ __proto__
    ()set __proto__: ƒ __proto__()*/
abjA = Object.create(null);
//{}