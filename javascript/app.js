const previousOperand = document.querySelector(".previous-operand-JS")
const currentOperand = document.querySelector(".current-operand-JS")
const numeros = document.querySelectorAll("[data-numero]")
const operacoes = document.querySelectorAll("[data-operacao]")
const AC = document.querySelector("[data-AC]")

let contas = operacao => {
    //implement
}

numeros.forEach(numero => {
    numero.addEventListener("click", () =>{

        if(numero.innerHTML === '.' && currentOperand.innerHTML.includes('.')) return

        currentOperand.innerHTML = currentOperand.innerHTML.toString() + numero.innerHTML.toString()  //precisamos de converter para string, pois se fosse um numero o javascript ia tentar somar os dois 
    })
})

operacoes.forEach(operacao => {
    operacao.addEventListener("click", () =>{
        if(currentOperand.innerHTML === '') return

        currentOperand.innerHTML = currentOperand.innerHTML.toString() + operacao.innerHTML.toString()
        previousOperand.innerHTML =  currentOperand.innerHTML
        currentOperand.innerHTML = ""
    })
})

AC.addEventListener("click", () =>{
    currentOperand.innerHTML = ""
    previousOperand.innerHTML = ""
})
