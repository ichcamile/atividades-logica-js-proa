function exercicio1() {

    let number1 = parseInt(prompt("Digite um número"));
    let number2 = parseInt(prompt("Digite outro número"));

    while (number2 <= 0) {
        number2 = parseInt(prompt("Numero menor ou igual que 0, digite outro"));
    }

    let result = (number1 / number2);
    alert(result)
    alert(` a sua resposta ${number1}`)
}
document.getElementById("exercicio1").addEventListener("click", exercicio1);


function exercicio2() {

    let index;

    for (index = 30; index >= 0; index--) {

        document.write(`<p>Faltam ${index} segundos para explosão!</p>`);

        if (index == 0) {
            document.write(` <p> BOOOOOOM </p>`);
        }
    }

}

document.getElementById("exercicio2").addEventListener("click", exercicio2);


function exercicio3() {
    for (let i = 10; i >= 1; i--) {
        document.write(`<p>${i}</p>`);
    }
}

document.getElementById("exercicio3").addEventListener("click", exercicio3);


// <!-- 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números 3,
// inteiros entre 15 number1 (inclusive) e 100 number2 (inclusive). -->
function exercicio4() {
    let mediaSoma = 0;
    let i;

    for (i = 15; i <= 100; i++) {
        mediaSoma += i;
    }

    const media = mediaSoma / 85;
    alert(`A média é ${media}`);


}

document.getElementById("exercicio4").addEventListener("click", exercicio4);

function exercicio5() {
    // 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. 

    // Considere que o primeiro sempre será menor que o segundo.

    let soma = 0;
    let quantidadeNumeros = 0;

    let number1 = parseInt(prompt("Digite um número"));
    let number2 = parseInt(prompt("Digite outro número"));

    while (number2 < number1) {
        number2 = parseInt(prompt("O segundo número precisa ser maior que o primeiro! Digite novamente"));
    }

    for (let i = number1; i <= number2; i++) {
        soma += i;
        quantidadeNumeros++;

    }

    let media = soma / quantidadeNumeros;

    alert(`A média aritmetica é ${media}`);


}

document.getElementById("exercicio5").addEventListener("click", exercicio5);

// 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. 
// Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. 
// Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

function exercicio6() {
    let aprovacaoNota = 9.5;
    let quantidadeAprovados = 0;
    let resposta 
   
    do {
        let nota1 = parseFloat(prompt("Qual foi a sua nota em Matemática?"));
        let nota2 = parseFloat(prompt("Qual foi sua nota em Inglês?"));
        let medianota = nota1 + nota2 / 2;

        if (medianota >= aprovacaoNota) {
            alert("Você foi aprovado");
            quantidadeAprovados++;
        } else {
            alert("Não foi aprovado, tente novamente ano que vem!");
        }
        
        resposta = prompt("Calcular a média de outro aluno Sim/Não?");

        
    } while (resposta === "Sim");

    alert(`A Quantidade de alunos aprovados esse semestre foi: ${quantidadeAprovados}`);

}

document.getElementById("exercicio6").addEventListener("click", exercicio6);


// 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, 
// calcule e imprima a média (simples) desse aluno. 
// Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. 
// São 6 notas ao total.
// Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

function exercicio7() {
    let nota1 = parseFloat(prompt("Qual foi a sua nota em Matemática?"));
    let nota2 = parseFloat(prompt("Qual foi a sua nota em Quimica?"));
    let nota3 = parseFloat(prompt("Qual foi a sua nota em Português?"));
    let nota4 = parseFloat(prompt("Qual foi a sua nota em Física?"));
    let nota5 = parseFloat(prompt("Qual foi a sua nota em Biolgia?"));
    let nota6 = parseFloat(prompt("Qual foi a sua nota em Inglês?"));
    

}
