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
// inteiros entre 15 (inclusive) e 100 (inclusive). -->
function exercicio4() {
    let mediaSoma = 0;
    let i;

    for (i = 15; i <= 100; i++) {
         mediaSoma += i;
    }

    const media = mediaSoma/85;
    alert(`A média é ${media}`);


}

document.getElementById("exercicio4").addEventListener("click", exercicio4);

function exercicio5() {
    // 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

    let number1 = parseInt(prompt("Digite um número"));
    let number2 = parseInt(prompt("Digite outro número"));

    while (number1<number2) {
        
        number2 = parseInt(prompt("O segundo número precisa ser menor que o primeiro! Digite novamente"));
    }

    let media =+ number1+number2/2;

    alert(`${media}`);

}

document.getElementById("exercicio5").addEventListener("click", exercicio5);
