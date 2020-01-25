
  let app = (function(){
    const NUEVA_LINEA = '\n', 
            SEPARADOR = ';';
      let datosObj;
      let boton1;
      
      function principal(){
        let main = document.querySelector('main');
        let datosArray = datosCSV(camisetasCSV);
        let cab = cabecera(datosArray);
        datosObj = objCSv(cab,datosArray);
        let tabla = crearTablaDesdeObjeto(datosObj);
        mostrarTabla(tabla, 'main');
        crearOrdenBotones();

      }

      const datosCSV = (datos, NUEVA_LINEA = '\n', SEPARADOR = ';') =>
                        datos.split(NUEVA_LINEA)
                            .filter(linea => Boolean(linea.trim()))
                            .map(linea => linea.split(SEPARADOR)
                                              .filter(campo => Boolean(campo.trim())))
                            .filter(fila => fila.length!=0);
      
      const cabecera = (array) => array.shift();

      const unObjeto = (cabecera, array)=>
          array.reduce((obj, v, po)=>{
            obj[cabecera[po]] = v;
            return obj;
          },{})
      

      const objCSv = (cabecera, array)=>array.map(fila=> unObjeto(cabecera, fila));

      function crearTablaDesdeObjeto(objetos, elementosFila = 4){
        let tabla = hacerNodo('table');  
        let caption = hacerNodo('caption','Camisetas');

        tabla.appendChild(caption);

        let tbody = hacerNodo('tbody');

        let tr;

        objetos.forEach((fila, posicion) => {
          if(posicion % elementosFila == 0){
            tr = hacerNodo('tr');
            tbody.appendChild(tr);
          }

          let img = hacerNodo('img');
          img.src = `img/${fila.color}.png`;
          img.alt = `${fila.color}`;
          let divImg = hacerNodo('div',img);

          let span = hacerNodo('span', fila.desc);
          span.classList.add('desaparece');

          let pSpan = hacerNodo('p',fila.nombre);
          
          pSpan.addEventListener('mouseover', crearPopup);
          pSpan.addEventListener('mouseout', destruirPopup);
          pSpan.addEventListener('mousemove', moverPopup);

          span.classList.add('desaparece');
          pSpan.appendChild(span);

          let pPrecio = hacerNodo('p', fila.precio);

          let divP = hacerNodo('div', pSpan);
          divP.appendChild(pPrecio);

          let td = hacerNodo('td', divImg);
          td.appendChild(divP);

          tr.appendChild(td);
        });

        tabla.appendChild(tbody);
          
        return tabla;
      }
      function crearPopup(e){
          this.lastChild.classList.toggle('desaparece');
      }

      function destruirPopup(e){
        this.lastChild.classList.toggle('desaparece');
      }

      function moverPopup(e){
          const child = this.lastChild;
          
          child.style.top = (e.offsetY ) + 'px';       // e.page es donde esta el raton con respecto a la pagina
          child.style.left = (e.offsetX + 20)+ 'px';
      }

      function hacerNodo(etiqueta, contenido){
        let nodo = document.createElement(etiqueta);

        if(typeof contenido === 'string'){
          let nodoTxt = document.createTextNode(contenido);
          nodo.appendChild(nodoTxt);

        }else if(typeof contenido === 'object'){
          nodo.appendChild(contenido);
        }
        return nodo;
      }

      function mostrarTabla(tabla, etiquetaPadre){
        let tablaAnterior = document.querySelector(`${etiquetaPadre} > table`);
        

        if(tablaAnterior){
          tablaAnterior.parentNode.replaceChild(tabla, tablaAnterior);
        }else{
          document.querySelector(etiquetaPadre).appendChild(tabla);
        }
      }

      function ordenar(evt){
          
          if(boton1.textContent === '↑'){
            datosObj.sort((a,b) => parseFloat(b.precio) - parseFloat(a.precio));
            boton1.textContent = '↓';

          }else if(boton1.textContent === '↓'){
            datosObj.sort((a,b) => parseFloat(a.precio) - parseFloat(b.precio));
            boton1.textContent = '↑';
          }

          mostrarTabla(crearTablaDesdeObjeto(datosObj), 'main');
      }

      function crearOrdenBotones(){
        
        boton1 = hacerNodo('button');
        boton1.innerHTML = '&uarr;';
        boton1.addEventListener('click', ordenar);

        let div = hacerNodo('div', boton1);
        
        document.querySelector('main').appendChild(div);
        
      }
        return {run:principal}
    })();