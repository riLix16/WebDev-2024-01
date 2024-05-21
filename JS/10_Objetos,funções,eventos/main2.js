//classes

class carro {
  constructor(nome, ano) {
    this.nome = nome;
    this.ano = ano;
  }
}

//Intancioando objetos á classe
let meuCarro1 = new carro("Ford, 2014");
let meuCarro2 = new carro("Audi, 2019");

//Imprimindo valores
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

console.log(meuCarro2.nome);
console.log(meuCarro2.ano);

console.clear();

class NovoCarro {
  constructor(nome, ano) {
    this.nome = nome;
    this.ano = ano;
  }
  idadeCarro(ano) {
    return ano - this.ano;
  }
}

//Buscadno o ano atual automaticamente

let dataHora = new Date();
let ano = dataHora.getFullYear();
//console.log(dataHoje);

//instancioando o objeto á classe
let meuNovoCarro = new NovoCarro("Ford, 2024");

console.log(meuNovoCarro.idadeCarro(ano));

console.clear();

let atualHora = new Date();
let hora = atualHora.getHours();

let atualDia = new Date();
let dia = atualDia.getDay();

let atualMes = new Date();
let mes = atualMes.getMonth();

let atualAno = new Date();
let year = atualAno.getFullYear();

console.log(hora);
console.log(dia);
console.log(mes);
console.log(year);
