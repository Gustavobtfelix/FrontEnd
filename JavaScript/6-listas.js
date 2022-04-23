console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
//console.log(salvador, saoPaulo, rioDeJaneiro)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // adicionando um item na lista

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(0,1);
                    //(start, delete count)
console.log(listaDeDestinos);


console.log(listaDeDestinos[0], "/", listaDeDestinos[2]);