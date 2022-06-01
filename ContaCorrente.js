import { Cliente } from "./Cliente.js";

export class contaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0; //usamos # p/ deixar o atributo privado, ele só irá ser impresso se dermos console.log dentro da classe, e o _indica que esse atributo não debe ser mexido.


    set cliente(novoValor){  // o acessor set dá acesso a propriedades privadas que estão protegidas p/ não serem mudadas durante o cód.Todos os atributos de proteção estão dentro dele, e se precisarmos mudar o atributo, mudamos em um só lugar 
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }


    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeContas += 1;
    }

    sacar(valor){   ////função ou método para declarar um comportamento
        if(this._saldo >= valor){  //usamos o this dentro da função para ele acessar o saldo da CC que estiver
            this._saldo -= valor;
            return valor; 
        } 
    } 

    depositar(valor){
        if(valor <= 0){  //declaramos as condições que não queremos primeiro,se o valor for menor ou igual
    //a zero damos um return para que seja concluído a execução dessa função
            return;
        }

        this._saldo += valor;  //se o valor for maior que 0 a função continua a execução
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor); //mexer no dinheiro da minha própria conta
        conta.depositar(valorSacado); //deposita o valor sacado na conta de outra pessoa
    }
} 