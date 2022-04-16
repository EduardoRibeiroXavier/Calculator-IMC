const nome = document.querySelector('#nome')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const result = document.querySelector('#result')

const calcIMC = () => {
    if (nome.value !== '' && altura.value !== '' && peso.value !== '') {
        const valorIMC = (peso.value / (altura.value * altura.value)).toFixed(1)

        let classificacao = ''

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso'
        }
        else if(valorIMC < 25){
            classificacao = ' com Peso normal'
        }
        else if(valorIMC < 30){
            classificacao = ' com Sobrepeso'
        }
        else if(valorIMC < 35){
            classificacao = ' com Obesidade Grau I'
        }
        else if(valorIMC < 41){
            classificacao = ' com Obesidade Grau II'
        }
        else {
            classificacao = ' com Obesidade Grau III, cuidado!!!'
        }

        result.textContent = `${nome.value}, Seu IMC é de ${valorIMC} e você está ${classificacao}`
    } else {
        result.textContent = 'Preencha todos os campos!!!'
    }

}


