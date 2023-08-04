class Motor{
    constructor (p){
       console.log("construtor do motor rodando...");
       this.potenciadomeumotor = p; 
    }
}
class carro{
    constructor(cor){
        this.cor = cor;
    }
    acelerar(){
        console.log("vruummm");
    }
}
let mbasicao = new motor (2);
let mtop = new motor (10);
let ferrari = new carro ("vermelho");
carro.acelerar();