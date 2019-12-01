export default class Proceso{
    constructor(preorder, posorder){
        this._preorder = preorder;
        this._posorder = posorder;
        this.__elementos = new Array();
        this._Pila = new Array();
        this._PilaNumeros = new Array();

    }
    agregarNodo(nodo){
        this.__elementos.push(nodo);  
    }
    crearArbol(){
        for(let i=0; i<this.__elementos.length; i++){
            if(this.__elementos[i] === "/" || this.__elementos[i] === "*"){
                this.__elementos[i].izquierda = this.__elementos[i-1];
                this.__elementos[i].derecha = this.__elementos[i+1];
                remover (this.__elementos, this.__elementos[i-1])
                remover (this.__elementos, this.__elementos[i+1])
            }
        }
        for(let i=0; i<this.__elementos.length; i++){
            if(this.__elementos[i] === "+" || this.__elementos[i] === "-"){
                this.__elementos[i].izquierda = this.__elementos[i-1];
                this.__elementos[i].derecha = this.__elementos[i+1];
                remover (this.__elementos, this.__elementos[i-1])
                remover (this.__elementos, this.__elementos[i+1])
            }
        }
        
    }
    remover ( arr, item ) {
        var i = arr.indexOf( item );
     
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
    preOrder(){
        _preOrder(this.__elementos[this.__elementos.length-1]);
    }
    _preOrder(valor){
        this._preorder.innerHTML+= valor;
        this._Pila.push(valor);
        if(valor.izquierda!=null){
            _preOrder(valor.izquierda)
        }else if(valor.derecha != null){
            _preOrder(valor.derecha)
        }
    }
    posOrder(){
        if(valor.izquierda!=null){
            _preOrder(valor.izquierda)
        }else if(valor.derecha != null){
            _preOrder(valor.derecha)
        }
        this._posorder.innerHTML+= valor;
    }


    }