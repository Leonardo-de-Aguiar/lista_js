function folhaPagamentoVariavel(){

    let nome;
    let salario;

    nome = prompt("Informe seu nome");
    salario = prompt("Informe seu salário atual");

    if (salario <= 1000){

    alert("Olá "+ nome + ", seu salário com a taxa de desconto é: "+ (salario - salario*0.08));

    } else if (salario > 1000.01 & salario <= 1500){

        alert("Olá "+ nome + ", seu salário com a taxa de desconto é: "+ (salario - salario*0.085));

    } else if (salario > 1500){

        alert("Olá "+ nome + ", seu salário com a taxa de desconto é: "+ (salario - salario*0.09));

    }

}