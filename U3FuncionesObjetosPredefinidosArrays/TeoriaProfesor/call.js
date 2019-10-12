function imprimir(){
	console.log(this);
}
undefined
imprimir();
//resultado consola:VM262:2 Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
undefined
imprimir.call(window)
//resultado consola:VM262:2 Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
undefined
imprimir.call(Array)
//resultado consola:VM262:2 ƒ Array() { [native code] }
undefined