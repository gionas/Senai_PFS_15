// Validar inscrição no evento
let dataInscricao = new Date("July 13, 2022 12:00:00");
let dataDoEvento = new Date("August 01, 2022 15:00:00");

if (dataInscricao < dataDoEvento) {
  console.log("Digite a data de Nascimento"); 

}
if (dataInscricao > dataDoEvento) {
  console.log("Inscrições encerradas");
}
// validar data de nascimento
let anoNascimentoParticipante = 2000;

if (anoNascimentoParticipante < 2004) {
    console.log("Digite o seu Nome"); 
  }
  else { 
    console.log("Não permitido para menores de 18 anos")
}
// Definir se é participante ou palestrante
let participante = 1;
if (lista = 1) {
    console.log("Você é Participante"); 
  }
  else { 
    console.log("Você é Parlestrante")
}
let palestrante = 2;
if (lista = 1) {
    console.log("Você é Parlestrante"); 
  }
  else { 
    console.log("Você é Participante")
}


// conferir quantidade na lista
let listaDoEvento = ["Helena", "Chico", "Mário", "José", "Maria"];
let quantidadeCadastrados = listaDoEvento.length;

if (quantidadeCadastrados < 100) {
	listaDoEvento.push("João");
	console.log(listaDoEvento);
} else {
	console.log("Não é possível inserir o nome na lista excedeu o limite");
}
