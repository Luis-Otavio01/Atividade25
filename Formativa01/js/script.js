// Atividade 1
const exercicio1 = () => {
  //Captura o elemento "resposta" e armazena em uma variavel
  let resposta = document.getElementById("resposta");

  let resultado = "";
  // loop de 1 a 10
  for (let i = 0; i <= 10; i++) {
    // Concatena o resultado com o valor de 1
    resultado += i + " # ";
  }

  // Exibe o resultado
  resposta.innerHTML = resultado;
};
// Atividade 2
const exercicio2 = () => {
  let resultado = document.getElementById("resposta");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    for (let i = 0; i <= numero; i += 2) {
      resultado.innerHTML += i + " ";
    }
    erro.innerHTML = "";
  }
};
// Atividade 3
const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let primo = true;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return;
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        primo = false;
      }
    }
  }
  if (primo) {
    resultado.innerHTML = `O número ${numero} é primo`;
    erro.innerHTML = "";
  } else {
    resultado.innerHTML = `O número ${numero} não é primo`;
    erro.innerHTML = "";
  }
};
// Atividade 4
const exercicio4 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      resultado.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
    }
    erro.innerHTML = "";
  }
};
// Atividade 5
const exercicio5 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let contador = 1;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = "";
    while (contador <= numero) {
      resultado.innerHTML += contador + " ";
      contador += 2;
    }
  }
};
// Atividade 6
const exercicio6 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let contador = 1;
  let soma = 0;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return;
  } else {
    while (contador <= numero) {
      if (contador % 2 == 0) {
        soma += contador;
      }
      contador++;
    }
    resultado.innerHTML = `A soma dos números pares de 1 a ${numero} é ${soma}`;
  }
};
// Atividade 7
const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let resultado = " # ";
  let contador = 10;

  while (contador >= 1) {
    resultado += contador + " # ";
    contador--;
  }
  
  resposta.innerHTML = "<h2>Resposta da Atividade</h2><p>" + resultado + "</p>";
};
// Atividade 8
const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  
  resultado.innerHTML = "";
  erro.innerHTML = "";

  
  let palavraInvertida = "";

  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  resultado.innerHTML = `A palavra invertida é: ${palavraInvertida}`;
  if (palavra == palavraInvertida) {
    resultado.innerHTML += "<br>A palavra é um palíndromo";
  } else {
    resultado.innerHTML += "<br>A palavra não é um palíndromo";
  }
};
// Atividade 9
const exercicio9 = () => {
  let resposta = document.getElementById("resposta");
  let soma = 0;

  for (let i = 0; i <= 100; i++) {
    soma += i;
  }
  resposta.innerHTML += soma;
};
// Atividade 10
let contador = 0;
let soma = 0;
const exercicio10 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  if (numero >= 0) {
    soma += parseInt(numero);
    contador++;
  }
  resultado.innerHTML = `A média dos numeros digitados é: ${soma / contador}`;
  erro.innerHTML = "";
};
// Atividade 11
const exercicio11 = () => {
  let resposta = document.getElementById("resposta");
  let resultado = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      resultado += i + "";
    }
  }
  resposta.innerHTML = `<h2>Resposta da Atividade</h2><p>Os números multiplos de 3 de 1 até 100 são: ${resultado} </p>`;
};
// Atividade 12
const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let soma = 0;
  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = "";
    for (let i = 0; i <= numero.length - 1; i++) {
      soma += parseInt(numero[i]);
    }
    erro.innerHTML = "";
    resultado.innerHTML = `A soma dos digitos do número ${numero} é: ${soma}`;
  }
};
// Atividade 13
const exercicio13 = () => {
    let resultado = document.getElementById('resultado');
    let erro = document.getElementById('erro');
    let numero = document.getElementById('num1','num2').value;
    let primo = true;

    if(numero <= 0){
        erro.innerHTML = 'Digite um número maior do que 0!'
        resultado.innerHTML = '';
        return;
    } else {
        for(let i = 2; i <numero; i++){
            if(numero % i == 0){
                primo = false;
                i++;
            }
        }
    }
    if (primo){
        resultado.innerHTML = `Existem ${i} números primos até o ${num1,num2}`
        erro.innerHTML = '';
}
}
// Atividade 14
const exercicio14 = () => {
  let result = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;
  if (numero1 <= 0 || numero2 <= 0) {
    erro.innerHTML = "Digite dois números válidos";
    result.innerHTML = '';
  } else {
    let calculo = parseInt(numero1) * parseInt(numero2);
    resultado.innerHTML = `A área do retângulo é de: ${calculo} un²`;
  }
}
// Atividade 15
const exercicio15 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let palavra = document.getElementById("palavra").value;
    let vogais = ['a', 'e', 'i', 'o', 'u'];

    if (palavra.length < 1) {
        erro.innerHTML = 'Digite no mínimo uma letra';
        resultado.innerHTML = '';
    } else {
        palavra = palavra.toLowerCase();
        resultado.innerHTML = ''; 
        
        for (let i = 0; i < palavra.length; i++) {
            if (vogais.includes(palavra[i])) {
                resultado.innerHTML += `A letra <b>${palavra[i]}</b> é uma vogal<br>`;
            } else {
                resultado.innerHTML += `A letra <b>${palavra[i]}</b> não é uma vogal<br>`;
            }
        }
        erro.innerHTML = '';
    }
};
// Atividade 16
const exercicio16 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let raio = document.getElementById("num1").value;
  let pi = Math.PI;

  if (raio > 0) {
    let area = parseFloat(pi) * (parseFloat(raio) * parseFloat(raio));
    resultado.innerHTML = area.toFixed(2);
    erro.innerHTML = "";
  } else {
    erro.innerHTML = "Digite um valor válido para o raio.";
    resultado.innerHTML = "";
  }
};
// Atividade 17
const exercicio17 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let base = parseFloat(document.getElementById("num1").value);
  let altura = parseFloat(document.getElementById("num2").value);

  if (base > 0 && altura > 0) {
    let area = (base * altura) / 2;
    resultado.innerHTML = `A área do triângulo é: ${area.toFixed(2)}`;
    erro.innerHTML = "";
  } else {
    erro.innerHTML = "Digite valores válidos para base e altura.";
    resultado.innerHTML = "";
  }
};
// Atividade 18
const exercicio18 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let baseMaior = document.getElementById("num1").value;
  let baseMenor = document.getElementById("num2").value;
  let altura = document.getElementById("num3").value;

  if (baseMaior > 0 && baseMenor > 0 && altura > 0) {
    let area =
      ((parseInt(baseMaior) + parseInt(baseMenor)) * parseInt(altura)) / 2;
    resultado.innerHTML = area;
    erro.innerHTML = "";
  } else {
    erro.innerHTML = "Digite valores válidos para as bases e altura.";
    resultado.innerHTML = "";
  }
};
// Atividade 19
const exercicio19 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let letra = document.getElementById("letra").value;
    let palavra = document.getElementById("palavra").value;
    let vogais = ['a', 'e', 'i', 'o', 'u'];


    if (letra.length > 1) {
        erro.innerHTML = 'Digite apenas uma letra';
        resultado.innerHTML = '';
    } else {
        palavra = palavra.toLowerCase();
        let palavraVetor = palavra.split('');
        for (let i = 0; i < palavraVetor.length; i++) {
            if (vogais.includes(palavraVetor[i])) {
                palavraVetor[i] = letra; 
            }
        }
        palavra = palavraVetor.join('');
        resultado.innerHTML = `A palavra resultante é: ${palavra}`;
        erro.innerHTML = '';
    }
}
// Atividade 20
const exercicio20 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let frase = document.getElementById("frase").value;
    let fraseInvertida = '';
    if(frase.length <= 0){
      erro.innerHTML = 'Digite uma frase';
      resultado.innerHTML = '';
    } else{
      for(let i = frase.length - 1; i >= 0; i--){
        fraseInvertida += frase[i];
      }
      resultado.innerHTML = `A frase invertida é: ${fraseInvertida}`;
      erro.innerHTML = '';
    }
  }
// Atividade 21
const exercicio21 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let frase = document.getElementById("frase").value;
    let fraseSemEspaco = '';
    if(frase.length <= 0){
      erro.innerHTML = 'Digite uma frase';
      resultado.innerHTML = '';
    } else{
      for(let i = 0; i < frase.length; i++){
        if(frase[i] != ' '){
          fraseSemEspaco += frase[i];
        }
      }
      resultado.innerHTML = `A frase sem espaços é: ${fraseSemEspaco}`;
      erro.innerHTML = '';
    }
  };
// Atividade 22
const exercicio22 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let numero;
    let soma = 0;
    while (soma < 100) {
      numero = parseInt(prompt("Digite um número"));
      soma += numero;
    }
    resultado.innerHTML = soma;
    erro.innerHTML = "";
  };
// Atividade 23
const exercicio23 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let frase = document.getElementById("frase").value;
    let palavra = document.getElementById("palavra").value;
    let contador = 0;
    if(frase.length <= 0 || palavra.length <= 0){
      erro.innerHTML = 'Digite uma frase e uma palavra';
      resultado.innerHTML = '';
    } else{
      let fraseVetor = frase.split(' ');
      for(let i = 0; i < fraseVetor.length; i++){
        if(fraseVetor[i] == palavra){
          contador++;
        }
      }
      resultado.innerHTML = `A palavra ${palavra} aparece ${contador} vezes na frase`;
      erro.innerHTML = '';
    }
  };
// Atividade 24
const exercicio24 = () => {
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");
    let frase = document.getElementById("frase").value;
    let fraseTitleCase = '';
    if(frase.length <= 0){
      erro.innerHTML = 'Digite uma frase';
      resultado.innerHTML = '';
    } else{
      let fraseVetor = frase.split(' ');
      for(let i = 0; i < fraseVetor.length; i++){
        fraseTitleCase += fraseVetor[i].charAt(0).toUpperCase() + fraseVetor[i].slice(1) + ' ';
      }
      resultado.innerHTML = `A frase em Title Case é: ${fraseTitleCase}`;
      erro.innerHTML = '';
    }
  }
// Atividade 25
const exercicio25 = () => {
  let resposta = document.getElementById("resposta");
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");

  let numero1 = document.getElementById("num1").value.trim();
  let numero2 = document.getElementById("num2").value.trim();
  let numero3 = document.getElementById("num3").value.trim();

  let num1 = Number(numero1);
  let num2 = Number(numero2);
  let num3 = Number(numero3);

  if (numero1 === "" || numero2 === "" || numero3 === "") {
    erro.textContent = "Por favor, preencha todos os campos.";
    resultado.textContent = "";
    return;
  }

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    erro.textContent = "Por favor, insira números válidos.";
    resultado.textContent = "";
    return;
  }

  erro.textContent = "";
  let numeros = [num1, num2, num3];
  numeros.sort((a, b) => a - b);

  let textoOrdenado = `Números ordenados: ${numeros.join(" ")}`;

  resposta.innerHTML = textoOrdenado;
  resposta.innerHTML += "<br/> Ordenação concluída!";
};
