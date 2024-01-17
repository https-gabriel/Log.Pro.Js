var name = prompt("Informe seu nome")
var height = prompt("Informe sua altura em centimetros")
var weigth = prompt("Informe seu peso")

var height = height/100

var imc = weigth/ (height*height)

var classificacao;
switch (true) {
    case imc < 16:
        classificacao = "Baixo peso muito grave";
        break;
    case imc >= 16 && imc <= 16.99:
        classificacao = "Baixo peso grave";
        break;
    case imc >= 17 && imc <= 18.49:
        classificacao = "Baixo peso";
        break;
    case imc >= 18.50 && imc <= 24.99:
        classificacao = "Peso normal";
        break;
    case imc >= 25 && imc <= 29.99:
        classificacao = "Sobrepeso";
        break;
    case imc >= 30 && imc <= 34.99:
        classificacao = "Obesidade grau I";
        break;
    case imc >= 35 && imc <= 39.99:
        classificacao = "Obesidade grau II";
        break;
    case imc > 40:
        classificacao = "Obesidade grau III";
        break;
    default:
        classificacao = "Classificação não encontrada";
}

alert(`${name} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`)