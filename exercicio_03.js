

function(balancofinanceiro);

let ganho = []
let gasto = []
let ganhoSoma = 0
let gastoSoma = 0
let total

for(let i; i < 12; i++){

    ganho[i] = Number(prompt("Insira o ganho do mês ") + (i+1));
    gasto[i] = Number(prompt("Insira o gasto do mês ") + (i+1));

    ganhoSoma += ganho[i];
    gastoSoma += gasto[i];

}

    total = ganhoSoma - gastoSoma;


if(total > 0){
    alert("Você teve lucro!");
}else{
    alert("Você teve prejuízo!");
}

balancofinanceiro()