const fs = require('fs')
const readline = require('readline')

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
      for (let i=preambleLength; i<numbers.length; i++) {
        let preamble = numbers.slice(i-preambleLength, i)
        let sum = numbers[i]
        let success = checkSum(preamble, sum)
        if (!success) {
          console.log(sum)
        }
      }
    })
  }
  catch (error) {
    console.log(error)
  }
}

main()


