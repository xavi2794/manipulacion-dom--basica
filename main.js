const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result'); 
const form = document.querySelector('#form');


form.addEventListener('submit', sumarInputs);


function sumarInputs(event) {
    event.preventDefault();
    let valor1 = parseInt(input1.value);
    let valor2 = parseInt(input2.value);


    let sumaInputs = valor1 + valor2;
    pResult.innerText = "Resultado: " + sumaInputs;
}

