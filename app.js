// console.log('hi')
// function add(x, y) {
//     return x + y
// }
// function subtract(x, y) {
//     return x - y
// }
// function multiply(x, y) {
//     return x * y
// }
// function divide(x, y) {
//     return x / y
// }
// let operand = 0

// let operator
let canOperatorEnter = false
let canDecimalPoint = true

const clear = document.querySelector('#clear')
const decPoint = document.querySelector('#decimal')
const numbers = document.querySelectorAll('.numbers div')
const box = document.querySelector('#input')
const equal = document.querySelector('#result')
for (num of numbers) {
    num.addEventListener('click', function () {
        // operand = operand * 10 + parseInt(this.innerText)
        if (this.innerText === '.') {
            if (canDecimalPoint) {
                box.innerText += '.'
                canDecimalPoint = false
            }
        }
        else {
            box.innerText += this.innerText
        }

        canOperatorEnter = true
        // console.log(canOperatorEnter)
        // console.log(operand)


    })
}
const operators = document.querySelectorAll('#operators div')
// const boxText = box.innerText

// if (box.innerText !== '' || box.innerText[box.innerText.length - 1] !== '+' || box.innerText[box.innerText.length - 1]
//     !== '-' || box.innerText[box.innerText.length - 1] !== '&times;'
//     || box.innerText[box.innerText.length - 1] !== '&divide;') {
//     for (ops of operators) {
//         ops.addEventListener('click', function () {
//             operator = this.innerText
//             box.innerText += this.innerText
//         })
//     }
// }

for (ops of operators) {
    ops.addEventListener('click', function () {
        if (canOperatorEnter) {
            // operator = this.innerText

            box.innerText += this.innerText
            canOperatorEnter = false
            canDecimalPoint = true
        }

        // console.log(canOperatorEnter)

    })
}
// decPoint.addEventListener('click', function () {
// if (canDecimalPoint) {
//     box.innerText += '.'
//     canDecimalPoint = false
// }
//     box.innerText += this.innerText;
// })
clear.addEventListener('click', function () {
    box.innerText = ""
})

equal.addEventListener('click', Calculate)

function Calculate() {
    const InputString = box.innerText;
    // console.log(InputString)

    let ans = eval(InputString);

    box.innerText = ans;


}