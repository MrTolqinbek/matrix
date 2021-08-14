const input = document.getElementById('input')
const btn = document.getElementById('btn')
const calc = document.getElementById('calc')
const ans = document.getElementById('answer')
let cells = []
input.addEventListener('input', () => {
    ins()
})
btn.addEventListener('click', () => {
    let matrix = cells.map((a) => {
        return a.map((b) => {
            return +b.querySelector('input').value
        })
    })
    ans.innerHTML = "Determinant is " + matrixCalc(matrix)
})


function matrixCalc(matrix) {
    let D = 0
    if (matrix.length == 1) {
        return matrix[0][0]
    }
    else {

        for (let i = 0; i < matrix.length; i++) {
            D += Math.pow(-1, i) * matrix[0][i] * matrixCalc(cut(matrix, i))
        }

    }
    return D

}

function cut(matrix, x) {
    let newM = []
    for (let i = 1; i < matrix.length; i++) {
        let newR = []
        for (let j = 0; j < matrix.length; j++) {
            if (j != x) {
                newR.push(matrix[i][j])
            }
        }
        newM.push(newR)
    }

    return newM

}

function ins() {
    calc.innerHTML = ""
    cells = []
    const val = +input.value
    for (let i = 0; i < val; i++) {
        let b = document.createElement('div')
        b.className = 'row'
        let cols = [];

        for (let j = 0; j < val; j++) {
            let a = document.createElement('div')
            a.className = 'col'
            let inp = document.createElement('input')
            inp.type = 'text'
            a.append(inp)
            b.append(a)
            cols.push(a)
        }
        calc.append(b)
        cells.push(cols)
    }

}