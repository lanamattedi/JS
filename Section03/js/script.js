const num = Number(prompt("Digite o seu número:"));
const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');

numero.innerHTML = num ;
resultado.innerHTML += `<p> A raiz quadrada do seu número é ${num ** 0.5}. </p>` ;
resultado.innerHTML += `<p> O número é inteiro? ${Number.isInteger(num)}. </p>` ;
resultado.innerHTML += `<p> O número é NaN ? ${Number.isNaN(num)}. </p>` ;
resultado.innerHTML += `<p> Arrendondando seu número para baixo:  ${Math.floor(num)}. </p>` ;
resultado.innerHTML += `<p> Arrendondando seu número para cima ${Math.ceil(num)}. </p>` ;
resultado.innerHTML += `<p> Seu número com duas casas decimais:  ${num.toFixed(2)}. </p>` ;



