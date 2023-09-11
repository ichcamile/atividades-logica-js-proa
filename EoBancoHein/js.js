function eoBancoHein() {
    const nome = prompt("Qual seu nome?");
    let dinheiro = 1000.00;

    alert(`Olá ${nome} é um prazer ter você por aqui!`);


    function escolha() {
        const operacao = prompt("Qual operação você deseja realizar? \n 1) Saldo \n 2) Extrato \n 3) Depósito \n 4) Saque \n 5) Transferência \n 6) Sair ");

        switch (operacao) {
            case "Saldo":
                saldo();
                escolha();
                break;
            case "Extrato":
                extrato()
                break;
            case "Depósito":
                deposito()
                break
            case "Saque":
                saque()
            case "Transferência":
                transferencia()
                break
            case "Sair":
                sair()
                break;

        }


    }
    escolha();

    function sair() {
        alert(`${nome}, foi um prazer ter você por aqui!`);

    }

    function deposito() {
        saldo();
        const valorDeposito = parseFloat(prompt("Quanto você deseja depositar?"));
        dinheiro = (dinheiro + valorDeposito);
        alert(`O seu saldo atual é ${dinheiro}`);
        escolha();

    }

    function saldo() {
        senha()
        alert(`O seu saldo atual é ${dinheiro}`);
    }


    function senha() {
        const password = parseInt(prompt("Digite sua senha:"));

        if (password == 3589) {
            alert(`Sua senha está correta!`);
        } else {
            alert(`Senha incorreta, tente novamente!!!`);
            senha();
        }

    }



    function extrato() {
        senha()
        alert("Extrato dos últimos 30 dias \n - McDonalds  R$: -89,99 \n - Starbucks  R$: -38,97 \n - Pix para Vitor Moutim R$: -147,36 \n Total de Saídas: R$: -276,32 \n \n - Transferência de Vitor Moutim  R$: +302,90 \n - Depósito  R$: +270,80 \n - Pix recebido de Isaac  R$: +50,00 \n Total de Entradas: R$: +623,70");
        escolha();
    }

    function transferencia() {
        saldo();
        const valorTransferencia = parseFloat(prompt("Quanto você deseja transferir"));
        let chavePix = parseFloat(prompt("Digite a chave pix para realizar a transferência:"));

        while (isNaN(chavePix)) {
            alert("Informe somente números");
            chavePix = parseFloat(prompt("Digite a chave pix para realizar a transferência:"));
        }

        if (valorTransferencia > dinheiro) {
            alert("Operação não autorizada, saldo insuficiente.");
        } else {
            dinheiro = (dinheiro - valorTransferencia);
            alert(`Sua transferência para a chave pix: ${chavePix}, foi realizada com sucesso. Seu saldo atual é: R$ ${dinheiro}`);
        }
        escolha();

    }

    function saque() {
        saldo()
        let valorSaque = parseFloat(prompt("Quanto você deseja sacar?"));

        while (valorSaque > dinheiro) {
            alert("Saldo insuficiente, digite um novo valor.");
            valorSaque = parseFloat(prompt(`Digite um valor menor que ${dinheiro}`));
        }

        while (valorSaque <= 0) {
            alert("Operação não permitida");
            valorSaque = parseFloat(prompt(`Digite um valor maior que 0`));
        }

        dinheiro = (dinheiro - valorSaque);
        alert(`Seu saque  foi realizada com sucesso. Seu saldo atual é: R$ ${dinheiro}`);

        escolha();

    }

}