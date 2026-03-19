

function balancofinanceiro() {

    let ganho = 0
    let gasto = 0
    let ganhoSoma = 0
    let gastoSoma = 0
    let total

    for (let i = 1; i < 12; i++) {

        ganho = Number(prompt("Insira o ganho do mês " + i));
        gasto = Number(prompt("Insira o gasto do mês " + i));


        ganhoSoma += ganho;
        gastoSoma += gasto;

    }

    total = ganhoSoma - gastoSoma;

    alert("Seu saldo é:" + total);
    if (total > 0) {
        alert("Você teve lucro!");
    } else {
        alert("Você teve prejuízo!");
    }
};

balancofinanceiro()