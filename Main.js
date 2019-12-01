import Nodo from './Nodo.js';
import Proceso from './Proceso.js';

class Main{
    constructor(){
        let r = new Proceso(document.querySelector('#preorder'), document.querySelector('#posorder'));
        document.querySelector('#calcular').addEventListener('click', () => {

                let valores = new Array();
                let operacion = document.querySelector('#operacion').value;
                let resultado = document.querySelector('#resultado')
                console.log(operacion);
                
                for(let i=0;i<operacion.length;i++){
                    
                    if(operacion[i]!='+' && operacion[i]!='-'&& operacion[i]!='/'&& operacion[i]!='*'){
                        valores[i] = parseFloat(operacion[i])
                    }else{
                        valores[i] = operacion[i];
                    }
                    
                }
                for(let i=0;i<valores.length;i++){
                    
                    let nodo = new Nodo(valores[i]);
                    r.agregarNodo(nodo);
                }
                r.crearArbol();
                r.preOrder();
                r.posOrder();
                r.Calcular(resultado);
        })
    }

}
let main = new Main();