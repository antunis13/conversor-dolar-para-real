const botaoCalcular = document.querySelector('#botaoCalcular')
const divResult = document.querySelector('#resultado')
const url =  'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL'
const inputValor = document.querySelector('#valor')





let requestOptions = {
  method: 'GET'
}
function error(){
    alert('Ops, algum erro foi encotrado!')
}


botaoCalcular.onclick = () =>{
  const valor = inputValor.value
  if(valor === ''){
    alert('Insira um número')
    return
  }

  fetch(url + coins, requestOptions)
  .then(response => response.json())
  .then(function(dados){
    const dolarReal= dados.USDBRL
    let moedas = parseFloat(dolarReal.high)
    let soma = moedas * valor
    let resultado = soma.toLocaleString('pt-br', {
      style: 'currency',
      currency:'BRL'
    })
    divResult.innerHTML = resultado
    divResult.classList.add('mostrar')
    inputValor.value = ''
    })
    .catch(error)
}

