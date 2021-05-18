const previousOperand = document.querySelector(".previous-operand-JS")
const currentOperand = document.querySelector(".current-operand-JS")
const numeros = document.querySelectorAll("[data-numero]")
const operacoes = document.querySelectorAll("[data-operacao]")
const AC = document.querySelector("[data-AC]")
const DEL = document.querySelector("[data-DEL]")
const igual = document.querySelector("[data-igual]")

let currentOp
function contas(){
    let current = parseFloat(currentOperand.innerHTML) //faz com que fique so o numero 
    let prev = parseFloat(previousOperand.innerHTML)
    switch(currentOp){
        case '+':
            currentOperand.innerHTML = prev + current
            previousOperand.innerHTML = ""
            break
        case '-':
            currentOperand.innerHTML = prev - current
            previousOperand.innerHTML = ""
            break
        case '*':
            currentOperand.innerHTML = prev * current
            previousOperand.innerHTML = ""
            break
        case '/':
            currentOperand.innerHTML = prev / current
            previousOperand.innerHTML = ""
            break
        default:
            return
    }
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
        currentOp = operacao.innerHTML;
    })
})

AC.addEventListener("click", () =>{
    currentOperand.innerHTML = ""
    previousOperand.innerHTML = ""
})

igual.addEventListener("click", () =>{
    contas()
})

