
const input = document.querySelector('#input')
const button = document.querySelector('#submitBtn')
const resultElement = document.querySelector('#result')


function countWords (inp) {
    const text = inp.value

    let count = 0
    let isWordTest = /[\wа-я]+/i
    const arr = text.trim().replace(/\s+/g, ' ').split(' ')
    for (let i = 0 ; i < arr.length ; i++) {
        if (isWordTest.test(arr[i])) {
            count++
        } 
    }
    console.log(arr)
    console.log(count)
    return count
    
}

function printResult (result) {
    resultElement.textContent = result
}

button.onclick = () => {
    
    const result = countWords(input)
    printResult(result)

}