/*
Função. salvar os usuarios que utilizam o metodo login

Ser autenticavel significa ter o método autenticar

ducky type
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
                             //caso a classe possua o metodo autenticar
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
          //chama o metodo autenticar como uma função.
            return autenticavel.autenticar(senha);
        }
        return false;
    }
//duck type / Polimorfismo. Verifica se os parametros que vão na função possuem certos metodos e propiedades
    static ehAutenticavel(autenticavel){
             //verifica se a classe que está chamando esse metodo possui o metodo autenticar e se é uma instancia de uma função
       return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}