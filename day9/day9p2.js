const fs = require('fs')
const readline = require('readline')

const SUM = 530627549

const checkSum = (previous, sum) => {
  success = false
  previous.forEach((number1, index1) => {
    previous.forEach((number2, index2) => {
      if (index1 !== index2 && (number1 + number2 === sum)) {
        success = true
      }
    })
  })
  return success
}

const reducer = (accumulator, currentValue) => accumulator + currentValue

const checkContig = (numbers, sum) => {
  let index = 0
  let curSum = 0
  let curLength = 2
  let done = false

  while (index < numbers.length - 1 && !done) {
    let subset = numbers.slice(index, index + curLength)

    try {
      curSum = subset.reduce(reducer)
    } catch (error) {
      console.log(subset)
    }

    if (curSum === sum) {
      let answer = subset.sort()
      console.log(answer[0] + answer[answer.length - 1])
      done = true
    } else {
      curLength += 1
    }

    if (curSum > sum || (index + curLength) > numbers.length) {
      curLength = 2
      index += 1
    }
  }
}

const main = async () => {
  try {
    const readInterface = readline.createInterface({
      input: fs.createReadStream('./input.txt'),
      console: false
    })

    let numbers = []

    readInterface.on('line', (line) => {
      numbers.push(parseInt(line))
    })

    let preambleLength = 25

    readInterface.on('close', () => {
      checkContig(numbers, SUM)
    })
  }
  catch (error) {
    console.log(error)
  }
}

main()


