document.querySelector('#first').value = +window.localStorage.getItem('first')
document.querySelector('#second').value = +window.localStorage.getItem('second')
document.querySelector('#third').value = +window.localStorage.getItem('third')
document.querySelector('#fourth').value = +window.localStorage.getItem('fourth')
document.querySelector('#fifth').value = +window.localStorage.getItem('fifth')
let summary = document.querySelector('p')
summary.textContent = +window.localStorage.getItem('sum')

const punkti = [20, 20, 40, 20, 20]
const suri = [20, 20, 40, 20, 25]
const balad = [35, 28, 45, 20, 25]
let sum

function sumAll() {
    const num1 = document.querySelector('#first').value
    const num2 = document.querySelector('#second').value
    const num3 = document.querySelector('#third').value
    const num4 = document.querySelector('#fourth').value
    const num5 = document.querySelector('#fifth').value
    const num1M = document.querySelector('#firstM').value
    const num2M = document.querySelector('#secondM').value
    const num3M = document.querySelector('#thirdM').value
    const num4M = document.querySelector('#fourthM').value
    const num5M = document.querySelector('#fifthM').value
    sum = num1*num1M + num2*num2M + num3*num3M + num4*num4M + num5*num5M
    summary.textContent = sum
    saveAll()
}

function saveAll () {
    window.localStorage.setItem('first', document.querySelector('#first').value)
    window.localStorage.setItem('second', document.querySelector('#second').value)
    window.localStorage.setItem('third', document.querySelector('#third').value)
    window.localStorage.setItem('fourth', document.querySelector('#fourth').value)
    window.localStorage.setItem('fifth', document.querySelector('#fifth').value)
    window.localStorage.setItem('sum', document.querySelector('p').textContent)
}

function clearAll () {window.localStorage.clear()}
document.querySelector('select').addEventListener('change', (event) => {
    document.querySelectorAll('.mul').forEach((item, index) =>
    {
        if (event.target.value == 'Пункты') item.value = punkti[index];
        else if (event.target.value == 'Суры') item.value = suri[index];
        else if (event.target.value == 'Балад') item.value = balad[index];
        sumAll()
    })
})
document.querySelectorAll('input').forEach(item => 
{
    item.addEventListener('input', (event) =>
    {
        sumAll()
        if (sum.toString().length <= 5) summary.style.fontSize = "85px"
        else if (sum.toString().length > 6) summary.style.fontSize = "70px"
        else if (sum.toString().length > 5) summary.style.fontSize = "85px"
    })
})
function reset() {
    document.querySelectorAll('.number').forEach(item => {
        item.value = "0"
    })
    summary.textContent = "0"
}
document.querySelector('button').addEventListener('click', () => {reset(); clearAll();})