// similar a css h1 {color: red}
//.parrafito { ... } para clases
//#pid { ... } para ids


const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

form.addEventListener('submit',sumarImputValues)

function sumarImputValues(event){
    // console.log({event})
    event.preventDefault()
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaImputs;

}
