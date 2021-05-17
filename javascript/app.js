const previousOperand = document.querySelector(".previous-operand-JS")
const currentOperand = document.querySelector(".current-operand-JS")
const numeros = document.querySelectorAll("[data-numero]")
const operacoes = document.querySelectorAll("[data-operacao]")


numeros.forEach(numero => {
    numero.addEventListener("click", () =>{

        currentOperand.innerHTML = numero.innerHTML
    })
})

operacoes.forEach(operacao => {
    operacao.addEventListener("click", () =>{

        currentOperand.innerHTML = operacao.innerHTML
    })
})
