
/* Questão 01 */
var X = 10;
X++;
var Z = X;
var Y = 10;
Y--;
var W = Y;
document.getElementById("ponto1").innerHTML=10+15;
document.getElementById("ponto2").innerHTML= "10"+2;
document.getElementById("ponto3").innerHTML= "10"*2;
document.getElementById("ponto4").innerHTML= "10"/3;
document.getElementById("ponto5").innerHTML= "10"%2;
document.getElementById("ponto6").innerHTML= 10+true;
document.getElementById("ponto7").innerHTML= 10 == "10";
document.getElementById("ponto8").innerHTML= 10 === "10";
document.getElementById("ponto9").innerHTML= 10 < 11;
document.getElementById("ponto10").innerHTML= 10 >12;
document.getElementById("ponto11").innerHTML= 10 <= 10.1;
document.getElementById("ponto12").innerHTML= 10 > 9.99;
document.getElementById("ponto13").innerHTML= 10 != "dez";
document.getElementById("ponto14").innerHTML= 10 + true;
document.getElementById("ponto15").innerHTML= "dez"+true;
document.getElementById("ponto16").innerHTML= 10+false;
document.getElementById("ponto17").innerHTML= 10*false;
document.getElementById("ponto18").innerHTML= true+true;
document.getElementById("ponto19").innerHTML= Z;
document.getElementById("ponto20").innerHTML= W;
document.getElementById("ponto21").innerHTML= 1&1;
document.getElementById("ponto22").innerHTML= 1&0;
document.getElementById("ponto23").innerHTML= 0&0;
document.getElementById("ponto24").innerHTML= 1&0;
document.getElementById("ponto25").innerHTML= 0/1;
document.getElementById("ponto26").innerHTML= 5+5==10;
document.getElementById("ponto27").innerHTML= "5"+"5"==10;
document.getElementById("ponto28").innerHTML= "5"*2>9;
document.getElementById("ponto29").innerHTML= (10+10)*2;
document.getElementById("ponto30").innerHTML= 10+10*2;

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var cavalo = carro;
/* Questão 02 - letra a */
var A = branco == "branco";
document.getElementById("letraa").innerHTML=(A);
/* Questão 02 - letra b */
var B = branco == cinza;
document.getElementById("letrab").innerHTML=(B);
/* Questão 02 - letra c */
var C = carro == branco;
document.getElementById("letrac").innerHTML=(C);
/* Questão 02 - letra d */
var D = cavalo == "preto"?"cinza":"marron";
document.getElementById("letrad").innerHTML=(D);

/* Questão 02 - letra e*/
var valor = 30000;
var entrada = 3000;
var prestacao = 750;
var Nprestacao = (valor - entrada)/prestacao;
document.getElementById("letrae").innerHTML=(Nprestacao+" prestações.");

/* Questão 02 - letra f*/
var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var soma = (branco + preto + cinza + carro);
var nun = soma.length; 
document.getElementById("letraf").innerHTML= nun + " caracteres.";