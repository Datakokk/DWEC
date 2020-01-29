let app = (function(){
	let horas = ['09:40', '10:40', '12:20', '13:10','15:10',  '16:40', '17:40', '18:40', '19:30', '21:40']
	let sabado = '08:40';
	let domingo = '20:10';
	const UN_DIA = 1000 * 60 * 60 * 24;
	let numTrenes;
	let enlace = 0;

	function rellenarDias(fechaInicio, fechaFinal){
		let numDias;
		let arrayDias = [];
		let fechaActual = new Date();
		let fechIni = new Date(fechaInicio).getTime();
		let fechFin = new Date(fechaFinal).getTime();
		
		if(fechIni >= fechFin){return []};

		numDias = Math.round((fechFin - fechIni)/UN_DIA);
		
		for(let i = 0; i <= numDias; i++) {
			arrayDias[i] = new Date(fechIni).getTime() + i * UN_DIA;
		}


		return arrayDias;
	}

	function mostrarTren(array){
		
		let tren = [];
			array = array.map(fecha => {
			let objFecha = new Date(fecha);
			let diaSema = objFecha.getDay();
		   

			if(diaSema == 6){
				horas.unshift(sabado);
				tren.push(horas.map(v => rellenarTren(objFecha.getDate(),v)));
				horas.shift(sabado);
			}else if(diaSema == 0){
				horas.splice(9,0,domingo);
				tren.push(horas.map(v => rellenarTren(objFecha.getDate(),v)));
				horas.splice(9,1);
			}else{
				tren.push(horas.map(v => rellenarTren(objFecha.getDate(),v)));
			}
			
		});
		return tren;
	}

	function rellenarTren(dia, horario){
			return {
				id:dia+horario.split(':').join(''),
				horario:horario,
				sinDevolucion:numeroAleatorio(1,45),
				conDevolucion:numeroAleatorio(1,45),
				normal:numeroAleatorio(1,45)
			}
	}

	function numeroAleatorio(a,b){
		let may = Math.max(a,b);
		let men = Math.min(a,b);
		return Math.floor(Math.random() * (may - men) + 1) + men;
	}

	function hacerNodo(etiqueta, contenido){
		let nodo = document.createElement(etiqueta);

		if(typeof contenido === 'string'){
			let txt = document.createTextNode(contenido);
			nodo.appendChild(txt);
		
		}else if(typeof contenido === 'number'){
			let num = document.createTextNode(contenido);
			nodo.appendChild(num);

		}else if(typeof contenido === 'object'){
			nodo.appendChild(contenido);
		}

		return nodo;
	}

	function hacerBotones(array){
		array = array.map(fecha => new Date(fecha).getDate());

		let h1 = hacerNodo('h1','Días');
		let ul = hacerNodo('ul');
		let div = hacerNodo('div', h1);
		div.appendChild(ul);
		let li;
		
		array.forEach((element, posicion) => {
			li = hacerNodo('li', element);
			ul.appendChild(li);
		});    
	   
		document.querySelector('body').appendChild(div);
	}

	function hacerTabla(arrayObjetos, indice){
		let obj = document.getElementsByTagName('li')[indice];
		let contenido = obj.textContent;
		let claves = Object.keys(arrayObjetos[0][0])
		
		let table = hacerNodo('table');
		let caption = hacerNodo('caption', `Trenes del día ${contenido}`);

		table.appendChild(caption);
		let tr = hacerNodo('tr');

		claves.forEach(elemento =>{
			let th = hacerNodo('th', elemento);
			tr.appendChild(th);
		})

		let thead =hacerNodo('thead', tr);
		let tbody = hacerTbody(arrayObjetos, indice);
		table.appendChild(thead);
		table.appendChild(tbody);
		
		return table;
	}

	function hacerTbody(arrayObjetos, indice){
		let tbody = hacerNodo('tbody');

		arrayObjetos.forEach((fila,p) =>{
		   
			if(p===indice){
				fila.forEach((campo,i) => {
				
						let tr = hacerNodo('tr');
						let td = hacerNodo('td',arrayObjetos[p][i]['id']);
						tr.appendChild(td);
						td = hacerNodo('td',arrayObjetos[p][i]['horario']);
						tr.appendChild(td);
						td = hacerNodo('td',arrayObjetos[p][i]['conDevolucion']);
						tr.appendChild(td);
						td = hacerNodo('td',arrayObjetos[p][i]['sinDevolucion']);    
						tr.appendChild(td);
						td = hacerNodo('td',arrayObjetos[p][i]['normal']);    
						tr.appendChild(td);
						tbody.appendChild(tr);
					numTrenes = i; console.log(numTrenes);
				})
			}
		   
		})
		return tbody;
	}

	function hacerFooter(){
		let footer = hacerNodo('footer',`Número de trenes: ${numTrenes+1}`);
		document.querySelector('body').appendChild(footer);
	}

	function mostrarTabla(tabla, etiquetaPadre){
		let tablaAnterior = document.querySelector(`${etiquetaPadre} > table`);

		if(tablaAnterior){
			tablaAnterior.parentNode.replaceChild(tabla, tablaAnterior);
		}else{
			document.querySelector(etiquetaPadre).appendChild(tabla);
		}
	}

	function main(){

		let dias = rellenarDias('1.29.2020', '2.3.2020');
		let botones = hacerBotones(dias);
		let tren = mostrarTren(dias);
		let tabla = hacerTabla(tren,enlace);
		let listo = mostrarTabla(tabla, 'body');
		let pie = hacerFooter();
		
		let lis = document.querySelectorAll('li');

		lis.forEach((ele, index) =>{
		   ele.addEventListener('click', function(){
			tabla = hacerTabla(tren,index);
			mostrarTabla(tabla, 'body');
			document.querySelector('footer').parentNode.removeChild(document.querySelector('footer'));
			pie = hacerFooter()
		   })
		   
		});
	}
		return{iniciar:main}
})()  