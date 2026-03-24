function folhaPagamento(){

    let nome;
    let salario;

    nome = prompt("Informe seu nome");
    salario = prompt("Informe seu salário atual");

    alert("Olá "+ nome + ", seu salário com a taxa de desconto é: "+ (salario - salario*0.08));

}