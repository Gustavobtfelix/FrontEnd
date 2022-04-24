import { Conta } from "./Conta.js";
//é uma boa pratica declarar os atributos de uma classe dentro de um metodo.
//ContaCorrente é herança da classe conta.
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        //super chama o construtor da classe pai
        super(0,cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    
    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}