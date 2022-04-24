import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//objeto baseado na classe Cliente
const cliente1 = new Cliente("Ricardo", 11122233309); //so pode ser atribuido por aqui por conta do metodo constructor
const cliente2 = new Cliente("Alice", 88822233309);

//
const contaCorrenteMaria = new ContaCorrente(null, cliente2);

// não funciona por conta do metodo set: contaCorrenteMaria.cliente = "n";
//funciona                             : contaCorrenteMaria.cliente = cliente2;

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
// transfere 200 da conta do Ricardo para a Maria
let valor = 100;
contaCorrenteRicardo.tranferir(valor, contaCorrenteMaria);



console.log(contaCorrenteRicardo);
console.log(contaCorrenteMaria);
console.log(ContaCorrente.numeroDeContas);
/*
ContaCorrente {
  agencia: 1001,
  _cliente: Cliente { nome: 'Ricardo', _cpf: 11122233309 },
  _saldo: 200
}
 */

/* creating package json on powershell console
    npm init
    projectName
    Version
    description
    options
    , "type": "module"
*/