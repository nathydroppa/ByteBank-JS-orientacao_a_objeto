import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Nathalia", 11122233309);

const cliente2 = new Cliente("Alice", 88822233307);  

const contaCorrenteNathalia = new contaCorrente(1001, cliente1);  //vincular a CC a um cliente especifico
contaCorrenteNathalia.depositar(500);
const conta2 = new contaCorrente(102, cliente2);

let valor = 200;
contaCorrenteNathalia.transferir(valor, conta2);


//const valorSacado = contaCorrenteNathalia.sacar(50);
//console.log(valorSacado);