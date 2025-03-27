n1 = 20;
n2 = 40;

soma = n1 + n2;
subtracao = n2 - n1;
multi = n1 * n2;
divisao = n2 / n1;
restoDivisao = n2 % n1;
comparacao = n2 == n1;

document.getElementById("n1").innerHTML = "O número 1 é " + n1;
document.getElementById("n2").innerHTML = "O número 2 é " + n2;
document.getElementById("soma").innerHTML = "A soma dos números é " + soma;
document.getElementById("divisao").innerHTML =
  "A divisão dos números é " + divisao;
document.getElementById("multi").innerHTML =
  "A multiplicação dos números é " + multi;
document.getElementById("restoDivisao").innerHTML =
  "O resto da divisão é " + restoDivisao;
document.getElementById("comparacao").innerHTML =
  "Os números são iguais? " + comparacao;
