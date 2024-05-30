//Primeiro projeto plataforma DIO
//Curso: Lógica de Programação.
//Criação de um algorítmo que classifique o nível de um herói ou heroína.
//Exigências: Variáveis, operadores, laços de repetição, estruturas de decisões.
let personagem = "Sakura";
let genero = "F";
let fazesVencidas= 19;
let contador = 0;
let texto = "";
let jogoFinalizado = "";
//Verificação de gênero da personagem, importante para classifocar como heói ou heroína.
switch(genero)
{
    case "F":
        genero = "Heroína";
        break;
    default:
        genero = "Herói";
        break;
}
//Contador de pontos, baseado em fazes vencidas, cumprindo a regra de laço de repetição.
for (let i = 1; i <= fazesVencidas; i++)
{
    contador +=500;
}
//Texto parabenizando ou motivando o jogador.
if (contador === 10500)
{
    jogoFinalizado = "Parabéns! Jogo finalizado.";
}
else
{
    jogoFinalizado = "Sempre há limites. Eu não conheço os meus.\nMeu foco é RADIANTE";
}
//Verificação da classificação da personagem
//Obs.: é uma boa prática usar o switch case para operações lógicas?
switch (contador > 0 )
{
    case contador <= 1000:
        texto = "Ferro";
        break;
    case contador > 1000 && contador <= 2000:
        texto = "Bronze";
        break;
    case contador > 2000 && contador <= 4000:
        texto = "Prata";
        break;
    case contador > 4000 && contador <= 6000:
        texto = "Ouro";
        break;
    case contador > 6000 && contador <= 7000:
        texto = "Platina";
        break;
    case contador > 7000 && contador <= 9000:
        texto = "Ascendente";
        break;
    case contador > 9000 && contador <= 10000:
        texto = "Imortal";
        break;
    default:
        texto = "Radiante";
      }
//Criação de uma variável para mostrar a classificação geral da personagem.
let textoFinal = "-Classificação-";
textoFinal = textoFinal +"\n" + genero + ": " + personagem + "\nPontuação: " + contador;
textoFinal = textoFinal + "\nNível: " + texto + "\n" + jogoFinalizado;
console.log(textoFinal)