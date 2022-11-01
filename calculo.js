const calcular = document.getElementById('calcular')

function calcularIMC(){
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && peso !== '' && altura !== ''){

        const valor = (peso/(altura*altura)).toFixed(1)
        let classificacao

        if (valor < 18.5){
            classificacao = 'Magreza'
        }
        else if (valor >=18.5 && valor<= 24.9){
            classificacao = 'o peso normal, Parabéns!!'
        }
        else if (valor >=25 && valor<= 29.9){
            classificacao = 'Sobrepeso'
        }
        else if (valor >=30 && valor<= 39.9){
            classificacao = 'Obesidade'
        }
        resultado.textContent = `${nome} seu IMC é ${valor}. Você está com ${classificacao}`
    }
    else{
        resultado.textContent = "Preencha todos os campos!!"
    }
}

calcular.addEventListener('click', calcularIMC)