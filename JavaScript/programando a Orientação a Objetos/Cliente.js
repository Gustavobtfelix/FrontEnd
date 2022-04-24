//Arquivo que comeca com letra maiuscula é classe
export class Cliente{
    //atributos tipo: any
    nome;
    //_ atributo privado
    _cpf;

    get cpf(){
        return this._cpf;
    }
    //metodo que define que os valores referenciados durante a criação da classe passem para os atributos
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}