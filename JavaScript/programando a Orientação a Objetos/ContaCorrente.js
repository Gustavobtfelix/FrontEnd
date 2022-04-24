import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    //valor na classe que que pertence a todos os "branches"
    static numeroDeContas = 0;
    agencia;
    _cliente;
   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
   _saldo = 0;
    
// setter e getter, metodos de encapsulamento.

    //metodo acessor de atribuição que define que toda alteração no atributo _cliente deve ser instanciado da classe Cliente
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    //metodo acessor de acesso que define que o valor cliente so pode ser alterado se estiver de acordo com as normas impostas na classe
    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }
    //metodo que define que os valores referenciados durante a criação da classe passem para os atributos
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        //chama o valor como um todo. diferente do this que chama o valor especifico
        ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
            //caso nao coloque o return ele retorna undefined caso haja a necessidade
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        //remove valor de uma conta e insere em outra
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}
