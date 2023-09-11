function exibirValor(){
    let nomeDoCarro = "Fusca";
    alert(nomeDoCarro);
    window.document(nomeDoCarro);
}

function perguntarNome() {
let nome = prompt("Qual é seu nome?");
alert("Olá, " + nome);
}


function perguntarNomeIdade() {
let nome = prompt("Qual é seu nome?");
let idadeString = prompt("Olá, " + nome + ". Quanto anos você tem?");
let idade = parseInt(idadeString);

alert("Olá, " + nome + ". Sua idade é " + idade);
}

function pergunteRetangulo(){
    let base = parseInt(prompt("Digite o valor da base"));
    let altura = parseInt(prompt("Digite o valor da altura"));
    let resultado = base*altura;
    alert("O valor da área do retângulo é " + resultado);

}

function pergunteQuadrado(){
    let lado1 = parseInt(prompt("Digite o valor de um lado"));
    let lado2 = parseInt(prompt("Digite o valor do outro lado"));
    let resultado1 = lado1*lado2**2;
    alert("O valor da área do quadrado é " + resultado1 );
}

function pergunteLosango(){
    let diagonalMaior = parseInt(prompt("Digite o valor da diagonal maior"));
    let diagonalMenor = parseInt(prompt("Digite o valor da diagonal menor"));
    let resultado3 = diagonalMaior*diagonalMenor/2;
    alert("O valor da área do losango é " + resultado3);
}

function pergunteTrapezio(){
    let baseMaior = parseInt(prompt("Digite o valor da base maior"));
    let baseMenor = parseInt(prompt("Digite o valor da base menor"));
    let altura = parseInt(prompt("Digite o valor da altura"));
    
    let resultado2 = ((baseMaior+baseMenor)*altura)/2;
    alert("O valor da área do Trapézio é " + resultado2);
}

function pergunteParalelogramoTrapezio (){
    let base2 = parseInt(prompt("Digite o valor da base"));
    let altura2 = parseInt(prompt("Digite o valor da altura"));
    let resultado4 = base2*altura2;
    alert("O valor da área do Paralelogramo é " + resultado4);
}

function pergunteTriangulo(){
    let base3 = parseInt(prompt("Digite o valor da base"));
    let altura3 = parseInt(prompt("Digite o valor da altura"));
    let resultado5 = base3*altura3/2;
    alert("O valor da área do Triângulo é " + resultado5);
}

function pergunteCirculo(){
let raio = parseInt(prompt("Digite o valor do raio "));
let resultado6 = Math.PI * (raio * raio);
alert("O valor da área do Circulo é " + resultado6);


}