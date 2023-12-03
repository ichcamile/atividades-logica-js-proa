function exercicio1() {
  let nomesAlunos = [];
  let nomeAluno;

  do {
    nomeAluno = prompt("Qual aluno você deseja cadastrar?");
    if (nomeAluno !== "Exit") {
      nomesAlunos.push(nomeAluno);
    }
  } while (nomeAluno !== "Exit");
  alert(nomesAlunos);
}


document.getElementById("exercicio1").addEventListener("click", exercicio1);


function exercicio2() {
  const planetas = [
    "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"
  ];

  let planetaUsuario = prompt("Qual planeta deseja comprar?");

  if (planetas.includes(planetaUsuario)) {
    alert(`Temos o ${planetaUsuario} em estoque! `)
  } else {
    alert(`Sintimos muito, infelizmente não temos o ${planetaUsuario} em estoque no momento!`)

  }



}

document.getElementById("exercicio2").addEventListener("click", exercicio2);


function exercicio3() {

  let listaFrutas = ["Maçã", "Banana", "Morango", "Pera", "Uva", "Abacaxi", "Melancia", "Kiwi", "Laranja", "Limão"];

  alert(`A lista de frutas tem: ${listaFrutas.join(", ")}`);

  while (listaFrutas.length > 0) {
    
    let usuarioFruta = prompt("Digite o nome de uma fruta!");

    if (listaFrutas.includes(usuarioFruta)) {
      listaFrutas = listaFrutas.filter(fruta => fruta !== usuarioFruta);
      alert(`${usuarioFruta} foi retirada da lista.`);
    } else {
      alert("Fruta indisponível no nosso mercado.");
    }

    if (listaFrutas.length > 0) {
      alert(`A lista de frutas agora tem: ${listaFrutas.join(", ")}`);
    }
  }

  alert("Lista de compras finalizada.");



}

document.getElementById("exercicio3").addEventListener("click", exercicio3);
