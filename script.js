let summary = document.querySelector('p')
document.querySelectorAll('input').forEach(item => 
{
    item.addEventListener('input', (event) =>
    {
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
        let sum = num1*num1M + num2*num2M + num3*num3M + num4*num4M + num5*num5M
        if (sum.toString().length <= 5) summary.style.fontSize = "100px"
        else if (sum.toString().length > 6) summary.style.fontSize = "70px"
        else if (sum.toString().length > 5) summary.style.fontSize = "85px"
        summary.textContent = sum
    })
})
document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('.number').forEach(item => {
        item.value = ""
    })
    summary.textContent = "0"
})